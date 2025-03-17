
document.getElementById('weatherButton').addEventListener('click', function() {
    const apiKey = "4f7f78da87f5f5f2d7bbe703a462459b";
    const city = document.getElementById('weatherInput').value;
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`

    if (city == '') {
        alert('Please enter your city to proceed!!');
        return;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {

        if (data.success == false) {
            document.getElementById('weatherOutput').innerHTML = `<p>Error Fetching weather</p>`;
            return;
        }

        const weather = `
        <p>This is your weather!!</p>
        <p>${data.location.name}</p>
        <p>${data.location.country}</p>
        <br/>

        <p>${data.current.temperature} °C</p>
        <img src=${data.current.weather_icons} height={50}/>
        <p>${data.current.weather_descriptions}</p>
        `

        document.getElementById('weatherOutput').innerHTML = weather;
    })
    .catch(error => {
        document.getElementById('weatherOutput').innerHTML = `<p>Error Fetching weather</p>`
    })
});