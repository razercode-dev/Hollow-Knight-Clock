const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");


function updateClockSmooth() {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ms = now.getMilliseconds();

    const hourDeg = ((h % 12) + m /60) * 30;
    const minuteDeg = (m + s / 60) * 6;
    const secondDeg = (s + ms / 1000) * 6;


    hour.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
minute.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
second.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

}

function updateDigital() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("digital").innerText = `${h}:${m}:${s}`;
}

requestAnimationFrame(updateClockSmooth);

setInterval( updateDigital, 1000);
updateDigital();
updateClockSmooth();