// wind chill conversion

let temp = parseFloat(document.getElementById('temp').innerText);
let speed = parseFloat(document.getElementById('wind').innerText);


if (temp <= 50 && speed > 3.0) {
    let chill = windchill(temp, speed).toFixed(2);
    document.getElementById('chill').textContent = `${chill}`;
} else {
    document.getElementById('chill').textContent = 'N/A';
};

function windchill(temp, speed) {
    return (
    35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed,.16)));
}
