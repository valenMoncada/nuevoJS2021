let long;
let lat;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=baf4bd9d7918b5e4f8f7ee8dfe0df0d1`;

        console.log(url);

        const getData = async() => {
            const data = await fetch(url);
            const response = await data.json();
            console.log(response);

            document.body.innerHTML += `
                <div id="container">
                    <ul>
                        <li>Porcentaje de nubes: ${response.clouds.all}</li>
                        <li>Población: ${response.name}</li>
                        <li>Humedad: ${response.main.humidity}</li>
                        <li>Visibilidad: ${response.visibility}</li>
                    </ul>

                    <style>
                        #container {
                            border: 1px solid red;
                            display: flex;
                            justify-content: center;
                        }

                        li {
                            font-size: 20px;
                            color: blue;
                        }
                    </style>
                </div>
            `;
        }

        getData();
    });
}

window.addEventListener('load', ()=> {
    const bd = document.querySelector('body');
    const fm = document.querySelector('.marco');
    const title = document.querySelector('h1');
    const img = document.querySelector('img');

    title.style.textAlign = "center";
    title.style.color = "red";
    title.style.marginTop = "100px";

    img.style.width = "200px";
    img.style.height = "200px";

    bd.style.width = window.innerWidth;
    bd.style.height = "500px";
    bd.style.border = "1px solid green";
    bd.style.background = "#dedede";

    fm.style.width = "100%";
    fm.style.height = "200px";
    fm.style.border = "2px solid black";
    fm.style.display = "flex";
    fm.style.justifyContent = "center";
    fm.style.alignItems = "center";
    fm.style.boxShadow = "9px 9px 19px black";
    fm.style.backgroundColor = "green";
})