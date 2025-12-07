// Select the LOGIN link
const loginLink = document.querySelector('a[href="#LOGIN"]');

// Create popup variable
let popup = null;

// Show Login Popup
function showPopup() {
    popup = document.createElement("div");
    popup.className = "popup-container";

    popup.innerHTML = `
        <div class="popup-box">
            <h2>Login</h2>
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <button class="submit-btn">Login</button>
            <button class="close-btn">Close</button>
        </div>
    `;

    document.body.appendChild(popup);

    // Close popup event
    popup.querySelector(".close-btn").addEventListener("click", closePopup);
}

// Close Popup
function closePopup() {
    if (popup) {
        popup.remove();
        popup = null;
    }
}

// When LOGIN link is clicked
loginLink.addEventListener("click", function(event) {
    event.preventDefault(); // stop page reload
    showPopup();
});
