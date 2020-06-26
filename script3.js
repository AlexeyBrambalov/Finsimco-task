class Calendar {

    

    timer;

    constructor(dateStr, addSec){

        this.addSec = addSec
        let addDays =  Math.round(this.addSec/10)
        
        this.m = moment(dateStr)
        this.addSec && this.m.add(addDays, "days")
        const timerContainer = document.getElementById("timer-container")

        timerContainer.className = "side-timer text-center py-3 bg-success"
        timerContainer.textContent = this.m.format("DD MMM YYYY");

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
        const timerContainer = document.getElementById("timer-container")
        timerContainer.textContent = this.m.format("DD MMM YYYY");
    }

    setTimer(){
        this.clearTimer()

        this.timer = setInterval(this.countDown.bind(this), 1000);
    }

    countDown(){
        this.m.add(1, "days")
        this.render();

    }
    clearTimer(){
        clearInterval(this.timer)
    }

 
}



// const calendar = new Calendar()
// calendar.start()
// calendar.pauseToggle()