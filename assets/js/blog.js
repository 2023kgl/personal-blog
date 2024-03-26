
// this is "listening" for the toggle button to be clicked so that it changes to dark mode when clicked
document.getElementById('themeToggle').addEventListener('click', function(event) {          
    document.body.classList.toggle('dark-mode');
});

// back button
const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function() {
    window.location.href ="index.html";
});

