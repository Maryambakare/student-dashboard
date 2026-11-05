"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type PropsWithChildren,
} from "react";

import events from "../data";

const STORAGE_KEY = "gather-saved-events";
const CHANGE_EVENT = "gather-saved-events-change";
const knownEventIds = new Set(events.map((event) => event.id));

interface SavedEventsContextValue {
  savedEventIds: string[];
  isReady: boolean;
  isSaved: (eventId: string) => boolean;
  toggleSavedEvent: (eventId: string) => void;
}

const SavedEventsContext = createContext<SavedEventsContextValue | null>(null);

function subscribeToSavedEvents(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

function getSavedEventsSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch (error) {
    console.error("Unable to read saved campus events.", error);
    return "[]";
  }
}

function parseSavedEventIds(snapshot: string) {
  try {
    const parsedValue: unknown = JSON.parse(snapshot);
    if (!Array.isArray(parsedValue)) {
      throw new TypeError("Saved event data must be an array.");
    }
    const validIds = parsedValue.filter(
      (id): id is string => typeof id === "string" && knownEventIds.has(id),
    );
    return [...new Set(validIds)];
  } catch (error) {
    console.error("Unable to parse saved campus events.", error);
    return [];
  }
}

export function SavedEventsProvider({ children }: PropsWithChildren) {
  const savedEventsSnapshot = useSyncExternalStore(
    subscribeToSavedEvents,
    getSavedEventsSnapshot,
    () => null,
  );
  const isReady = savedEventsSnapshot !== null;
  const savedEventIds = useMemo(
    () => (isReady ? parseSavedEventIds(savedEventsSnapshot) : []),
    [isReady, savedEventsSnapshot],
  );

  const isSaved = useCallback(
    (eventId: string) => savedEventIds.includes(eventId),
    [savedEventIds],
  );
  const toggleSavedEvent = useCallback((eventId: string) => {
    if (!knownEventIds.has(eventId)) {
      console.error(`Cannot save unknown campus event "${eventId}".`);
      return;
    }
    const currentIds = parseSavedEventIds(getSavedEventsSnapshot());
    const nextIds = currentIds.includes(eventId)
      ? currentIds.filter((currentId) => currentId !== eventId)
      : [...currentIds, eventId];
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds));
      window.dispatchEvent(new Event(CHANGE_EVENT));
    } catch (error) {
      console.error("Unable to save campus events.", error);
    }
  }, []);
  const contextValue = useMemo(
    () => ({ savedEventIds, isReady, isSaved, toggleSavedEvent }),
    [savedEventIds, isReady, isSaved, toggleSavedEvent],
  );

  return (
    <SavedEventsContext.Provider value={contextValue}>
      {children}
    </SavedEventsContext.Provider>
  );
}

export function useSavedEvents() {
  const context = useContext(SavedEventsContext);
  if (!context) {
    throw new Error("useSavedEvents must be used within a SavedEventsProvider.");
  }
  return context;
}
