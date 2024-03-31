
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

    blogEntries.forEach(blogData => {

    // let container = document.getElementById("container");
    // container.appendChild(newCard);

    let newCard = document.createElement("div");
    newCard.className = "section";

    let newCardContent = document.createElement("div");
    newCardContent.className = "card";

    let newh2 = document.createElement("h2");
    newh2.textContent = blogData.Title;
    newCardContent.appendChild(newh2);

    let newP = document.createElement("p");
    newP.textContent = blogData.Content;
    newCardContent.appendChild(newP);

    let newh3 = document.createElement("h3");
    newh3.textContent = blogData.Username;
    newCardContent.appendChild(newh3);

    newCard.appendChild(newCardContent);
    document.body.appendChild(newCard);

});
}
getBlogsFromLocalStorage()









