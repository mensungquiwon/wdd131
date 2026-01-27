const temperature = 10;
const windspeed = 5;
const year = document.querySelector("#currentYear");
const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();
const fullYear = today.getFullYear();
document.querySelector("#lastModified").textContent = "Last Modified: " + month + "/" + date + "/" + fullYear;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

document.addEventListener("DOMContentLoaded", () => {
    let output = "N/A";

    if (temperature <= 10 && windspeed > 4.8) {
        output = `${(calculateWindChill(temperature, windspeed)).toFixed(1)} °C`;
    }
    document.querySelector("#windchill").textContent = output;

});
