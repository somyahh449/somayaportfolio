// Select the dark mode button
const darkModeBtn = document.querySelector("#darkModeBtn");

// Check saved theme
const savedTheme = localStorage.getItem("theme");

// Apply saved theme
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Change theme when button is clicked
darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save selected theme
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});