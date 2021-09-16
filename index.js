class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate
        this.selector = selector
        this.time = 0
    }

    startTimer() {
        if (this.selector) {
            this.targetDate = this.targetDate.getTime()
            setInterval(() => {
                const currentDay = Date.now()
                this.time = this.targetDate - currentDay;

                this.daysCount(this.time)
                this.hoursCount(this.time)
                this.minsCount(this.time)
                this.secondsCount(this.time)

                this.setContentDate(this.refs("[data-value=days]"), this.daysCount(this.time))
                this.setContentDate(this.refs("[data-value=hours]"), this.hoursCount(this.time))
                this.setContentDate(this.refs("[data-value=mins]"), this.minsCount(this.time))
                this.setContentDate(this.refs("[data-value=seconds]"), this.secondsCount(this.time))

            }, 1000)
        }
    }
refs(param) {
return document.querySelector(this.selector + ' ' + param)
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

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 25, 2021'),
});
timer.startTimer()

