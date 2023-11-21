


const comment = document.querySelector("#comment-of-commenter").value
const name = document.querySelector("#your-name").value
const form = document.querySelector("form")
form.addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelector("#name-of-commenter").innerText = name
})