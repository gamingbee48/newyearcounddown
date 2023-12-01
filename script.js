const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const interval = setInterval(() => {
    const now = new Date().getTime();
    const duration = countDownDate - now;

    if (duration < 0) {
        clearInterval(interval);
        updateDurationElements(0);
        return;
    }

    updateDurationElements(duration);
}, 1000);

function updateDurationElements(duration) {
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}