// ============================================
//  work section
// ===============================================


// button hover effect

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn")
const images = document.querySelectorAll(".image-overlay")

p_btns.addEventListener("click", (e) => {
  const p_btn_active = e.target;
  // console.log(p_btn_active)



    p_btn.forEach((currelem) => {
      currelem.classList.remove("p-btn-active")
    })
    p_btn_active.classList.add("p-btn-active")

  // filtering images


  const btn_num = p_btn_active.dataset.btnNum;
  // console.log(btn_num)

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

  images.forEach((currelem) => {
    currelem.classList.add("image-not-active")
  })

  img_active.forEach((curr) => {
    curr.classList.remove("image-not-active")
  })

})

// ============================================
//  client review section
// =============================================== 

const slides = document.querySelector(".slides")
const navlinks = document.querySelectorAll(".nav-dot")
const extraNav= document.querySelector(".extra")

navlinks[0].onclick = function () {
  slides.style.transform = "translateY(0%)"
  for (i = 0; i < 5; i++) {
    navlinks[i].classList.remove("activeDot")
  }
  this.classList.add("activeDot")
}

navlinks[1].onclick = function change1() {
  slides.style.transform = "translateY(-100%)"
  for (i = 0; i < 5; i++) {
    navlinks[i].classList.remove("activeDot")
  }
  this.classList.add("activeDot")

}

navlinks[2].onclick = function change2() {
  slides.style.transform = "translateY(-210%)"
  for (i = 0; i < 5; i++) {
    navlinks[i].classList.remove("activeDot")
  }
  this.classList.add("activeDot")
}

navlinks[3].onclick = function () {
  slides.style.transform = "translateY(-310%)"
  for (i = 0; i < 5; i++) {
    navlinks[i].classList.remove("activeDot")
  }
  this.classList.add("activeDot")
}

navlinks[4].onclick = function () {
  slides.style.transform = "translateY(-420%)"
  for (i = 0; i < 5; i++) {
    navlinks[i].classList.remove("activeDot")
  }
  this.classList.add("activeDot")
}
// responsive client review section

const mobSlide = ()=>{
  if(widthSize.matches){
    extraNav.style.display="block";

    navlinks[3].onclick = function () {
      slides.style.transform = "translateY(-320%)"
      for (i = 0; i < 10; i++) {
        navlinks[i].classList.remove("activeDot")
      }
      this.classList.add("activeDot")
    }

    navlinks[4].onclick = function () {
      slides.style.transform = "translateY(-425%)"
      for (i = 0; i < 10; i++) {
        navlinks[i].classList.remove("activeDot")
      }
      this.classList.add("activeDot")
    }

    navlinks[5].onclick = function () {
      slides.style.transform = "translateY(-550%)"
      for (i = 0; i < 10; i++) {
        navlinks[i].classList.remove("activeDot")
      }
      this.classList.add("activeDot")
    }
    navlinks[6].onclick = function () {
      slides.style.transform = "translateY(-660%)"
      for (i = 0; i < 10; i++) {
        navlinks[i].classList.remove("activeDot")
      }
      this.classList.add("activeDot")
    }
    navlinks[7].onclick = function () {
      slides.style.transform = "translateY(-760%)"
      for (i = 0; i < 10; i++) {
        navlinks[i].classList.remove("activeDot")
      }
      this.classList.add("activeDot")
    }
    navlinks[8].onclick = function () {
      slides.style.transform = "translateY(-870%)"
      for (i = 0; i < 10; i++) {
        navlinks[i].classList.remove("activeDot")
      }
      this.classList.add("activeDot")
    }
    navlinks[9].onclick = function () {
      slides.style.transform = "translateY(-980%)"
      for (i = 0; i < 10; i++) {
        navlinks[i].classList.remove("activeDot")
      }
      this.classList.add("activeDot")
    }

  }
}

const widthSize = window.matchMedia("(max-width:500px)");
//call listener function at run time
mobSlide(widthSize);
//attach listner function to state change

widthSize.addEventListener("change",mobSlide)



// ================= Scroll to top button===================
const header = document.querySelector(".hero-section")

const footerElem = document.querySelector(".footer-section")

const scrollToTop = document.createElement("div");

scrollToTop.classList.add("scroll-to-top")

scrollToTop.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`

footerElem.after(scrollToTop);

// for scrolling to top function
scrollToTop.addEventListener("click", () => {
  header.scrollIntoView({ behavior: "smooth" })

})

// ================= Work counter section ===================

const counter = document.querySelectorAll(".counter-number")
let speed = 100

counter.forEach((curElem) => {
  const updateCount = () => {
    const targetNumber = parseInt(curElem.dataset.numbers)
    // console.log(targetNumber);

    const initialNumber = parseInt(curElem.innerText)
    // console.log(initialNumber);

    const incrementNum = Math.trunc(targetNumber / speed)
    // console.log(incrementNum);

    if (initialNumber < targetNumber) {
      curElem.innerText = `${initialNumber + incrementNum}+`;

      setTimeout(updateCount, 10)

    }
  }
  updateCount();
})

// ========================= responsive navbar =========================
const mobileNavbarBtn = document.querySelector(".mobile-nav-btn");

mobileNavbarBtn.addEventListener("click", () => {
  header.classList.toggle("active")

})


// asking number functionality

const callMe= document.querySelector(".number-req")

callMe.addEventListener("click",()=>{
  alert("Request for number through a message.")
})