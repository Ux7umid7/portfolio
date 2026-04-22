let root = document.documentElement
let mono = document.querySelector('.mono')
let nanum = document.querySelector('.nanum')
let pacifico = document.querySelector('.pacifico')
let saira = document.querySelector('.saira')
let monoget = localStorage.getItem('mono')
let nanumget = localStorage.getItem('nanum')

if (monoget) {
  root.style.setProperty('--font-mono', monoget)
}
if (nanumget) {
  root.style.setProperty('--nanum-pen', nanumget)

}


mono.addEventListener('click', () => {
  root.style.setProperty('--font-mono', '"Space Mono", monospace')
  localStorage.setItem('mono', '"Space Mono", monospace')
})
nanum.addEventListener('click', () => {
  root.style.setProperty('--nanum-pen', '"Nanum Pen Script", cursive')
  localStorage.setItem('nanum', '"Nanum Pen Script", cursive')

})
pacifico.addEventListener('click', () => {
  root.style.setProperty('--nanum-pen', '"Nanum Brush Script", cursive')
  localStorage.setItem('nanum', '"Nanum Brush Script", cursive')

})
saira.addEventListener('click', () => {
  root.style.setProperty('--font-mono', '"Saira", sans-serif')
  localStorage.setItem('mono', '"Saira", sans-serif')

})


//
let palette = document.querySelector(".palette");
let toggle = document.getElementById("toggleBtn");
let colors = document.querySelectorAll(".color");

toggle.onclick = () => {
  palette.classList.toggle("active");
};

let savedColor = localStorage.getItem("siteColor");

if (savedColor) {
  root.style.setProperty("--dark", savedColor);
  document.body.style.backgroundColor = savedColor;
}

colors.forEach((color) => {
  color.onclick = () => {
    let newColor = color.dataset.color;

    document.body.style.backgroundColor = newColor;

    document.querySelectorAll("section").forEach((section) => {
      section.style.backgroundColor = newColor;
    });

    document.querySelector("header").style.backgroundColor = newColor;

    localStorage.setItem("siteColor", newColor);

    palette.classList.remove("active");
  };
});



//
let skills = document.querySelectorAll(".skill__progress")


let observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {


      if (entry.target.classList.contains("html")) {
        entry.target.style.width = "95%"
      }

      else if (entry.target.classList.contains("css")) {
        entry.target.style.width = "90%"
      }

      else if (entry.target.classList.contains("js")) {
        entry.target.style.width = "90%"
      }

      else if (entry.target.classList.contains("git")) {
        entry.target.style.width = "80%"
      }

    }
    else {
      if (entry.target.classList.contains("html")) {
        entry.target.style.width = "0"
      }

      else if (entry.target.classList.contains("css")) {
        entry.target.style.width = "0"
      }

      else if (entry.target.classList.contains("js")) {
        entry.target.style.width = "0"
      }

      else if (entry.target.classList.contains("git")) {
        entry.target.style.width = "0"
      }

    }

  })
})

skills.forEach((skill) => {
  observer.observe(skill)
})

//
let light = document.querySelector(".cursor-light")

document.addEventListener("mousemove", function (e) {

  let x = e.clientX
  let y = e.clientY

  light.style.left = x + "px"
  light.style.top = y + "px"

})
let cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", function (e) {

  let x = e.clientX
  let y = e.clientY

  cursor.style.left = x + "px"
  cursor.style.top = y + "px"

})

//
let text = [
  "Frontend Dasturchi",
  "Web dasturchi",
  "Backend dasturchi"
]

let index = 0
let charIndex = 0
let typingText = document.getElementById("typing__text")

function type() {

  if (charIndex < text[index].length) {

    typingText.textContent += text[index].charAt(charIndex)
    charIndex++
    setTimeout(type, 100)

  }
  else {

    setTimeout(erase, 1500)

  }

}

function erase() {

  if (charIndex > 0) {

    typingText.textContent = text[index].substring(0, charIndex - 1)
    charIndex--
    setTimeout(erase, 50)

  }
  else {

    index++

    if (index >= text.length) {
      index = 0
    }

    setTimeout(type, 200)

  }

}

type()