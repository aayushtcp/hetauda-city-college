

fetch("../json/facultyandstaff.json").
    then(response => {
        return response.json();
    }).then(objectdata => {
        let table = "";
        objectdata.map(function (item) {
            table += `
            <a href=${item.username} id="each-staff">
            <img src="/images/naresh.jpeg" alt="">
            <h3>Naresh Radi ko Xoro</h3>
             </a>
            `
        })

        document.querySelector("#staff-container").innerHTML = table

        // document.querySelectorAll("#each-staff").forEach(function (item) {
        //     // console.log(item)
        //     item.addEventListener("click", function (e) {
        //         console.log(e.target)
        //     })
        // })


    });


