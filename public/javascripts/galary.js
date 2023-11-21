fetch("../json/galary.json").then((response) => {
    return response.json();
}).then((objectData) => {
    let table = "";
    objectData.map((data) => {

        table += `
               <div id="each-galary-post">
                <img src=${data.img} alt="">
                <div id="info">
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                  </div>
                  </div>

`
    })



    document.querySelector("#galary-container").innerHTML = table

    // document.querySelectorAll("#each-galary-post").forEach(function (each) {
    //     each.addEventListener("click", function (e) {

    //         each.classList.toggle("open")
    //     })
    // })

})
