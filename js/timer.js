import ref from "./js/refs.js";
const { toDays, toHours, toMins, toSeconds } = ref;

const targetDate = new Date('Jan 07, 2022').getTime()

function startTimer() {
    setInterval(() => {
        const currentDay = Date.now();
        let time = targetDate - currentDay;

const days = daysCount(time);
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((time % (1000 * 60)) / 1000);

days = String(days).padStart(3, '0')
hours = String(hours).padStart(2, '0')
mins = String(mins).padStart(2, '0')
seconds = String(seconds).padStart(2, '0')
        
setContentDate(toDays, days)
setContentDate(toHours, hours)
setContentDate(toMins, mins)
setContentDate(toSeconds, seconds)
 }, 1000)
}

// startTimer()

function setContentDate(place, value) {
    place.textContent = value
}

function daysCount(valueTime) {
    Math.floor(valueTime / (1000 * 60 * 60 * 24));
}

function viewDate(value, number , symbol) {
    String(value).padStart(number, symbol)
}