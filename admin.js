// Check admin login
if(localStorage.getItem("isAdmin") !== "true") {
    alert("Access denied. Please login as admin.");
    window.location.href = "admin-login.html";
}

// Logout button
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("isAdmin");
});

// DOM elements
const adminAddBtn = document.getElementById("adminAddBtn");
const adminItemInput = document.getElementById("adminItemInput");
const adminItemType = document.getElementById("adminItemType");
const adminItemContainer = document.getElementById("adminItemContainer");
const adminCommentContainer = document.getElementById("adminCommentContainer");

// Load data from localStorage
let items = JSON.parse(localStorage.getItem("items")) || [];
let comments = JSON.parse(localStorage.getItem("comments")) || [
    "Great project idea!",
    "Can you provide more resources?",
    "I had trouble downloading the file."
];

// Display items as cards
function displayItems() {
    adminItemContainer.innerHTML = "";
    items.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${item.type.toUpperCase()}: ${item.name}</h3>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        // Delete button
        card.querySelector(".delete-btn").onclick = () => {
            items.splice(index, 1);
            localStorage.setItem("items", JSON.stringify(items));
            displayItems();
        };

        // Edit button
        card.querySelector(".edit-btn").onclick = () => {
            const newName = prompt("Edit item name:", item.name);
            if(newName) {
                items[index].name = newName;
                localStorage.setItem("items", JSON.stringify(items));
                displayItems();
            }
        };

        adminItemContainer.appendChild(card);
    });
}

// Display comments as cards
function displayComments() {
    adminCommentContainer.innerHTML = "";
    comments.forEach((comment, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <p>${comment}</p>
            <button class="delete-btn">Delete</button>
        `;

        card.querySelector(".delete-btn").onclick = () => {
            comments.splice(index, 1);
            localStorage.setItem("comments", JSON.stringify(comments));
            displayComments();
        };

        adminCommentContainer.appendChild(card);
    });
}

// Add item
adminAddBtn.addEventListener("click", () => {
    const name = adminItemInput.value.trim();
    const type = adminItemType.value;
    if(name) {
        items.push({name, type});
        localStorage.setItem("items", JSON.stringify(items));
        displayItems();
        adminItemInput.value = "";
    } else {
        alert("Please enter a name for the item.");
    }
});

// Initial display
displayItems();
displayComments();
