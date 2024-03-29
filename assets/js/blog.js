
// this is "listening" for the toggle button to be clicked so that it changes to dark mode when clicked
document.getElementById('themeToggle').addEventListener('click', function(event) {          
    document.body.classList.toggle('dark-mode');
});

// back button
const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function() {
    window.location.href ="index.html";
});

let blogEntries = JSON.parse(localStorage.getItem('blogData'));
function getBlogsFromLocalStorage(){
    document.getElementById('username1').textContent = blogEntries[0].username
    document.getElementById('title1').textContent = blogEntries[0].title
    document.getElementById('content1').textContent = blogEntries[0].content
}

// function view(){
//     if ( blogData !== null){
//         document.querySelector('username1').textContent = JSON.parse(localStorage.getItem('blogData'));
//     }
// }

for ( let i=0; i<4 && blogEntries.length; i++ ) {
    const elements = blogEntries;
    console.log(elements)
    let titleEl = `title${[i+1]}`
    console.log(titleEl);
    document.getElementById(titleEl).textContent = blogEntries[i].title;
}

getBlogsFromLocalStorage()

// function saveBlogEntries(blogEntries){
//     console.log('saveBlogEntry')
// }



