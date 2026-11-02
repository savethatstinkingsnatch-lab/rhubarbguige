export const UNLOCK_KEY = "rhubarb-field-guide-unlocked-v1";

export function readUnlocked(): boolean {
  try {
    return localStorage.getItem(UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

export function writeUnlocked(): void {
  localStorage.setItem(UNLOCK_KEY, "1");
}
