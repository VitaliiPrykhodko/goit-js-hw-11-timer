import ref from "./js/refs.js";
const { toDays, toHours, toMins, toSeconds } = ref;

class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = targetDate
        this.time = 0
    }
    startTimer() {
        this.targetDate = this.targetDate.getTime()
        setInterval(() => {
            const currentDay = Date.now()
            this.time = this.targetDate - currentDay;

            this.daysCount(this.time)
            this.hoursCount(this.time)
            this.minsCount(this.time)
            this.secondsCount(this.time)

            this.setContentDate(toDays, this.daysCount(this.time))
            this.setContentDate(toHours, this.hoursCount(this.time))
            this.setContentDate(toMins, this.minsCount(this.time))
            this.setContentDate(toSeconds, this.secondsCount(this.time))

        }, 1000)
    }

daysCount(valueTime) {
return this.viewDate(Math.floor(valueTime / (1000 * 60 * 60 * 24)), 3, '0');
}
hoursCount(valueTime) {
    return this.viewDate(Math.floor((valueTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2, '0');
}
minsCount(valueTime) {
return this.viewDate(Math.floor((valueTime % (1000 * 60 * 60)) / (1000 * 60)), 2, '0');
}
secondsCount(valueTime) {
return this.viewDate(Math.floor((valueTime % (1000 * 60)) / 1000), 2, '0');
    }

viewDate(value, num , symbol) {
 return String(value).padStart(num, symbol)
}

setContentDate(place, value) {
place.textContent = value
}
}

const timer = new CountdownTimer(new Date('Jan 07, 2022'))
timer.startTimer()

