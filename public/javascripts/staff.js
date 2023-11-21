

fetch("../json/facultyandstaff.json").
    then(response => {
        return response.json();
    }).then(objectdata => {
        let table = "";
        objectdata.map(function (item) {
            table += `
            <a href=${item.username} id="each-staff">
            <img src=${item.img} alt="">
            <h3>${item.name}</h3>
             </a>
            `
        })

        document.querySelector("#staff-container").innerHTML = table


    });


