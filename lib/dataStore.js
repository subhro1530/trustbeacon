// lib/dataStore.js

let flaggedItems = [];
let detectionThreshold = 0.5;

// Export simple getters and setters
export function getFlaggedItems() {
  return flaggedItems;
}

export function addFlaggedItem(item) {
  flaggedItems.push(item);
}

// For admin approvals/deletions
export function removeFlaggedItem(index) {
  flaggedItems.splice(index, 1);
}

// For threshold
export function getThreshold() {
  return detectionThreshold;
}

export function setThreshold(value) {
  detectionThreshold = value;
}
