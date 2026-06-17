// OpenTrivaDB limits API calls to one every five seconds. This module prevents the user from making multiple API calls within this five second window.
// Local storage used to make five second timer persistent in case the user refreshes the page or navigates away somehow and makes another API call in that five second window.
// AI used to help with this chunk of code, although I've made sure I absolutely understand what's happening.

import { browser } from '$app/environment';

const STORAGE_KEY = 'quizApiCooldown';
const COOLDOWN_MS = 5100;

export function recordAPICall() {
    if (browser) {
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
    }
}

export function getRemainingCooldown() {
    if (!browser) return 0;
    const last = Number(localStorage.getItem(STORAGE_KEY) ?? 0);
    return Math.max(0, COOLDOWN_MS - (Date.now() - last));
}