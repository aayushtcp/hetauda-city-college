fetch("../json/facultyandstaff.json").then((data) => {
    return data.json();
}).then((objectData) => {
    // console.log(objectData[0].img)
    let tableData = "";
    objectData.map((value) => {
        tableData +=
            `
        <div id="each-staff">
        <img src=${value.img} alt="">
        <h3>${value.name}</h3>
    </div>
        `

    })

    document.querySelector("#staff-container").innerHTML = tableData;
})