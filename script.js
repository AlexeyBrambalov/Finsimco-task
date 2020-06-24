class Timer {

    timer;
    input;
    sec;
    id;


    constructor(sec, id, url){
        this.sec = sec;
        this.id = id;
        this.url = url;
                    
        const timerContainer = document.getElementById("timer-container")

        const a = document.createElement('a')

        a.href = this.url

        const time = document.createElement('div')

        time.appendChild(a)


        timerContainer.appendChild(time)

        time.id=this.id



        const hash = this.url.slice(-5).toString()

        console.log(hash);
        

        

        time.className = "side-timer text-center py-3 bg-success"

        document.getElementById(this.id).addEventListener('click', () => {

            $(`a[href=${hash}]`).tab('show');

            window.location.href=`${this.url}`;


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





// const dcmTimer = new Timer(100, "DCM", "https://finsimco.netlify.app/test.html#tab2")

// dcmTimer.start()
// dcmTimer.pause()
// dcmTimer.pause()
// dcmTimer.stop()

