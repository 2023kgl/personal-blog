
// this is "listening" for the toggle button to be clicked so that it changes to dark mode when clicked
document.getElementById('themeToggle').addEventListener('click', function(event) {          
    document.body.classList.toggle('dark-mode');
});

// back button
const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function() {
    window.location.href ="index.html";
});

function getBlogsFromLocalStorage(){

    let blogEntries = JSON.parse(localStorage.getItem('blogData'));

    document.getElementById('username').textContent = blogEntries[0].username
    document.getElementById('title').textContent = blogEntries[0].title
    document.getElementById('content').textContent = blogEntries[0].content
}
getBlogsFromLocalStorage()

function onButtonClick() {

    let newCard = document.createElement("div");
    newCard.className += "section";

    let newCardContent = document.createElement("div");
    newCardContent.className = "card";

    let newh2 = document.createElement("h2");
    newh2.textContent = "New Title";
    newCardContent.appendChild(newh2);

    let newP = document.createElement("p");
    newh2.textContent = "New Content";
    newCardContent.appendChild(newP);

    let newh3 = document.createElement("h3");
    newh2.textContent = "New Username";
    newCardContent.appendChild(newh3);
}

const formButton = document.getElementById('formButton');
formButton.addEventListener('click', onButtonClick);










