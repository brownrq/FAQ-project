
let plus = document.querySelectorAll(".plus")
let minus = document.querySelectorAll(".minus")
let para = document.querySelectorAll(".para")


plus[0].addEventListener("click", ()=>{
  plus[0].classList.add("inactive")
  para[0].classList.add("active")
  minus[0].classList.add("active")

})

minus[0].addEventListener("click", ()=>{
  para[0].classList.remove("active")
  minus[0].classList.remove("active")
  plus[0].classList.remove("inactive")
})

plus[1].addEventListener("click", ()=>{
  plus[1].classList.add("inactive")
  para[1].classList.add("active")
  minus[1].classList.add("active")

})
minus[1].addEventListener("click", ()=>{
    para[1].classList.remove("active")
    minus[1].classList.remove("active")
    plus[1].classList.remove("inactive")
  })
  
  plus[2].addEventListener("click", ()=>{
      plus[2].classList.add("inactive")
      para[2].classList.add("active")
      minus[2].classList.add("active")
    
    })
    
    minus[2].addEventListener("click", ()=>{
      para[2].classList.remove("active")
      minus[2].classList.remove("active")
      plus[2].classList.remove("inactive")
    })
  
    plus[3].addEventListener("click", ()=>{
      plus[3].classList.add("inactive")
      para[3].classList.add("active")
      minus[3].classList.add("active")
    
    })
    minus[3].addEventListener("click", ()=>{
        para[3].classList.remove("active")
        minus[3].classList.remove("active")
        plus[3].classList.remove("inactive")
      })