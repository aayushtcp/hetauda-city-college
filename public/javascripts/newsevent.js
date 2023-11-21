fetch("../json/newsandevent.json").then((response) => {
    return response.json();
}).then((objectData) => {
    console.log(objectData)
    let table = '';
    objectData.map((data) => {

        table +=
            `
        <a href="/newsandevent/${data.url}" id="each-news-and-event">
        <img src=${data.img} alt="">
        <h3>${data.newstitle}</h3>
        </a>
        `
    })
    document.querySelector("#news-and-event").innerHTML = table;
})