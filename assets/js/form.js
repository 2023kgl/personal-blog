document.getElementById('themeToggle').addEventListener('click', function(event) {          // this is "listening" for the toggle button to be clicked so that it changes to dark mode when clicked
    document.body.classList.toggle('dark-mode');
});