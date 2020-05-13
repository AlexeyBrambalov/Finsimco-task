class Timer {

    timer;
    input;
    sec;
    callback




    constructor(sec, callback){
        this.sec = sec;
        this.callback = callback
    }

    start(){
        this.input= this.sec
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
        const input = this.input

      let hours =  Math.floor(input / 3600);
      let minutes = Math.floor((input - hours * 3600)/60)
      let seconds = input - hours * 3600 -  minutes * 60;

      seconds < 10 ? seconds = ('0' + seconds.toString()).slice(-2) : 0
      minutes < 10 ? minutes = ('0' + minutes.toString()).slice(-2) : 0
      hours < 10 ? hours = ('0' + hours.toString()).slice(-2) : 0

      const text = input > 3600 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`

      this.callback(text)

    }

    setTimer(){
        this.clearTimer()
        this.timer = setInterval(this.countDown.bind(this), 1000);
    }

    countDown(){
        this.input--;

        this.render();

        if(this.input <=0) {
            this.clearTimer()
        }

    }
    clearTimer(){
        clearInterval(this.timer)
    }

    setSec(sec){
        this.sec = sec
        this.input = sec

    }
    


}





// const dcfTimer = new Timer(100, function (text){document.getElementById("dcf-timer").textContent = `DCF ${text}`});

// dcfTimer.start()
// dcfTimer.pause()
// dcfTimer.pause()
// dcfTimer.stop()


// const fsgTimer = new Timer( 305, function (text){
//     const $el = $('#fsg-timer')
//     if(text == "05:00"){
//         $el.removeClass('bg-danger').addClass('bg-warning')
//     }
//     $el.text(`FSG ${text}`)


// });
// fsgTimer.start()
// fsgTimer.pause()
// fsgTimer.pause()
// fsgTimer.stop()