// --- Create Account Logic ---
const AUTH_MINECRAFT_USERNAME_INPUT = document.getElementById('auth-minecraft-username-input');
const AUTH_ACCOUNT_NAME_INPUT = document.getElementById('auth-account-name-input');
const AUTH_PLATFORM_SELECT = document.getElementById('auth-platform-select'); // New platform select
const RULES_CHECKBOX_CONTAINER = document.getElementById('rules-checkbox-container');
const AGREE_RULES_CHECKBOX = document.getElementById('agree-rules-checkbox');

// Event listener for platform selection
AUTH_PLATFORM_SELECT.addEventListener('change', () => {
    if (AUTH_PLATFORM_SELECT.value === 'bedrock') {
        // Prepend and make non-removable dot for Bedrock
        AUTH_MINECRAFT_USERNAME_INPUT.value = '.';
        AUTH_MINECRAFT_USERNAME_INPUT.addEventListener('input', forceDotPrefix);
    } else {
        AUTH_MINECRAFT_USERNAME_INPUT.removeEventListener('input', forceDotPrefix);
        AUTH_MINECRAFT_USERNAME_INPUT.value = ''; // Clear if not bedrock
    }
});

// Function to force the dot prefix for Bedrock usernames
function forceDotPrefix() {
    if (AUTH_PLATFORM_SELECT.value === 'bedrock' && !AUTH_MINECRAFT_USERNAME_INPUT.value.startsWith('.')) {
        AUTH_MINECRAFT_USERNAME_INPUT.value = '.' + AUTH_MINECRAFT_USERNAME_INPUT.value.replace(/^\.+/, ''); // Ensure only one dot at start
    }
}
