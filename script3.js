class Calendar {

    timer;

    constructor(){
       
        let m = moment(new Date(2020, 6, 1));
        const timerContainer = document.getElementById("timer-container")
        const time = document.createElement('div')
        time.id="calendar"

        timerContainer.appendChild(time)

        time.className = "side-timer text-center py-3 bg-success"
        time.textContent = m.format("DD-MM-YYYY").toString();

    }

    start(){
        this.setTimer()
        this.render()

    }

    stop(){
        this.clearTimer()

    }

    pauseToggle(){
        if (this.timer === -1){
            this.setTimer()
        } else {
            this.clearTimer()
            this.timer = -1
        }
    }

    render(){
        const time = document.getElementById("calendar")
        time.textContent = m.format("DD-MM-YYYY").toString();
    }

    setTimer(){
        this.clearTimer()
        this.timer = setInterval(this.countDown.bind(this), 1000);
    }

    countDown(){
        m.add("days",1)
        this.render();

    }
    clearTimer(){
        clearInterval(this.timer)
    }

 
}



// const calendar = new Calendar()
// calendar.start()
// calendar.pauseToggle()