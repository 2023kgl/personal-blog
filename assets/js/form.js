
document.getElementById('themeToggle').addEventListener('click', function(event) {          
    document.body.classList.toggle('dark-mode');
});

const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const getData = localStorage.getItem('blogData');
console.log(getData);

let blogEntries = []

if (getData) {
    blogEntries = JSON.parse(getData);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (username === '' || title === '' || content === '') {
        alert('Please fill in all fields.');
        return;
    }

    const blogData = {
        Username: username,
        Title: title,
        Content: content
    };

    blogEntries.push(blogData);
    localStorage.setItem('blogData', JSON.stringify(blogEntries));
    renderfunction()
    form.reset();
console.log(blogEntries)
});

function renderfunction(){
    window.location.href = 'blog.html';
    }






