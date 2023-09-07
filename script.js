  

  var  timerh1 = document.querySelector(".timer h1")
  var timerbutton =document.querySelector(".timer button")

  var groww = 0
  var timer = setInterval(function(){
      if(groww<90){
        groww += Math.floor(Math.random()*25 )
        timerh1.innerHTML=groww+" %"
      }
      else{
        groww = 100
        timerh1.innerHTML=groww+" %"
        // setTimeout(timer)
        clearInterval(timer)
        console.log(groww)
      }
      if(groww === 100){
    //    console.log("hello")
    gsap.to(".timer h1",{
        y:-100,
        opacity:0,
        duration:1,
        delay:0.3
    })
    gsap.to(".timer button",{
        y:-100,
        opacity:1,
        duration:1,
        delay:0.3
    })
      }
  },Math.floor(Math.random()*250))

  // var audio = Audioplay()

  timerbutton.addEventListener("click",function(){
      document.querySelector(".page-1").style.scale = 1
      document.querySelector(".timer").style.opacity= 0
      document.querySelector("#log").style.opacity=1
      document.querySelector("#log").style.rotate="5deg"
  })