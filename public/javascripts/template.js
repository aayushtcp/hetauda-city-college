


fetch("../json/people.json").then((data) => {
    return data.json();
}).then((objectData) => {
    let table = "";
    objectData.map((item) => {
        table +=

            `
        <div id="each-people">
                    <img src=${item.image_url} alt="">
                    <h2>${item.headline}</h2>
                    <p>
                    ${item.description}
                    </p>
                </div>
        `
    });
    document.querySelector("#people").innerHTML = table
})



