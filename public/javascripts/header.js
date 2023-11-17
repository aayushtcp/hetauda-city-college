
document.querySelector("#cancel-navmenu-button").addEventListener("click", function () {
    document.querySelector("#all-programs").classList.remove("open");
})

document.querySelector("#menu-button").addEventListener("click", function () {
    document.querySelector("#all-programs").classList.add("open");
})


