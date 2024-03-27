
document.getElementById('themeToggle').addEventListener('click', function(event) {          
    document.body.classList.toggle('dark-mode');
});

const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const getData = localStorage.getItem('blogData')
console.log(getData)

let blogEntries = []

if (getData) {
    blogEntries = JSON.parse(getData)
}

formButton.addEventListener('submit', function(event) {

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (username === '' || title === '' || content === '') {
        event.preventDefault()
        alert('Please fill in all fields.');

        const blogData = {
            Username: username.value.trim()
            Title: title.value.trim()
            Content: content.value.trim()
        }

        blogEntries.push(blogData)
        localStorage.setItem("blogData", JSON.stringify(blogEntries));
        renderContent()
        return;
    }
    form.reset();
});



