
// this is "listening" for the toggle button to be clicked so that it changes to dark mode when clicked
document.getElementById('themeToggle').addEventListener('click', function(event) {          
    document.body.classList.toggle('dark-mode');
});

// Get references to form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

// Event listener for form submission
form.addEventListener('submit', function(event) {

    // Get form input values
    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    // Check if any field is empty
    if (username === '' || title === '' || content === '') {
        event.preventDefault()
        alert('Please fill in all fields.');
        return; // Exit the function
    }

    // Save form data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);

    //reset the form fields after saving data
    form.reset();
});



