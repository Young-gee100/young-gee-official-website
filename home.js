// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // 1. Search bar functionality
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // 2. Add hover animation effect for all card buttons
    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.2s";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // 3. Comment section submit alert
    const commentButton = document.querySelector(".comment-section button");
    const commentTextarea = document.querySelector(".comment-section textarea");

    commentButton.addEventListener("click", () => {
        const comment = commentTextarea.value.trim();
        if (comment) {
            alert("Thank you for your comment!");
            commentTextarea.value = ""; // Clear textarea
        } else {
            alert("Please write a comment before submitting.");
        }
    });

});
