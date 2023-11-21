let allImage = [];

fetch("../json/galary.json").then((response) => {
    return response.json();
}).then((objectData) => {
    let table = "";
    let tableTwo = '';
    objectData.forEach((data, index) => {
        allImage.push(data.img);

        table += `
            <div id="each-galary-post">
                <img src=${data.img} alt="">
                <div id="info">
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                </div>
            </div>
        `;

        tableTwo += `
            <div class="preview-img active">
                <img src=${data.img} alt="">
            </div>
        `;
    });

    document.querySelector("#photo-preview").innerHTML = tableTwo;
    document.querySelector("#galary-container").innerHTML = table;

    document.querySelectorAll("#each-galary-post").forEach(function (each, index) {
        each.addEventListener("click", function (e) {
            currentIndex = index;
            showImage(currentIndex);
            document.querySelector("#container").classList.add("open");
        });
    });

    let currentIndex = 0;
    const images = document.querySelectorAll('.preview-img');

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        showImage(currentIndex);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (event.key === 'ArrowRight') {
            changeSlide(1);
        } else if (event.key === 'Escape') {
            document.querySelector("#container").classList.remove("open");
        }
    });
    document.querySelector("#cancel-preview").addEventListener('click', function () {
        document.querySelector("#container").classList.remove("open");

    })


    // Move button event listeners here
    document.getElementById('prev-btn').addEventListener('click', function () {
        changeSlide(-1);
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        changeSlide(1);
    });
});
