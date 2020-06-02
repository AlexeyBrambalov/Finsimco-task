class Timer {

    timer;
    input;
    sec;
    id;



    constructor(sec, id){
        this.sec = sec;
        this.id = id

        document.getElementById(id).addEventListener('click', () => {
            document.querySelector('div.active').classList.remove('active')

            document.querySelector('a.active').classList.remove('active')

            document.querySelector(`.${id}`).classList.add('active')
            document.querySelector(`.${id}-tab`).classList.add('active')

            
            // active.classList.remove('active')
            // document.querySelector(`.${id}`).classList.add('active')

        })

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

      const time = document.getElementById(this.id)

      time.textContent = `${this.id} ${text}`
      if(input > 300 ){
        time.classList.remove("bg-warning")
        time.classList.remove("bg-danger")
        time.classList.add("bg-success")
      } else if (input <= 300 && input > 60){
        time.classList.remove("bg-success")
        time.classList.remove("bg-danger")
        time.classList.add("bg-warning")
      } else if (input < 60){
        time.classList.remove("bg-warning")
        time.classList.remove("bg-success")
        time.classList.add("bg-danger")
      }
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