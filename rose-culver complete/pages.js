// this is the data for holding which page we're on
let pageNumber = 0

// have the content for the pages, store as objects
const pages = [
  {copy: "a Brooklyn-based graphic designer", background:"#edc7a9",circle:"#3e78ed"},
  {copy:"Kanye West's biggest fan", background:"#a1fffe",circle:"#e34a47"},
  {copy: "looking for a job at the start of October", background:"#d3c7f3", circle:"#f7fe00"},
  {copy: `letting you <a href="pdf.pdf"> download her PDF </a>`, background:"#faffb8", circle:"#b472e6"}
]


// pick the relevant tags
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")
// make a next function to increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }
  updateSection()
}

const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 1) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

// pick a random slide
const random = function () {
  pageNumber = Math.floor(Math.random() * pages.length)
  
  updateSection()
  
}

// this will update the section's content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})


// on click of previousTag, run this
previousTag.addEventListener('click', function() {
  previous()
})


// on click of random tag
randomTag.addEventListener("click", function(){
  random()
})

document.addEventListener("keyup", function(event){
  console.log('')
  
  // if the key being pressed is ArrowRight
  if (event.key == "ArrowRight") {
      next()
      }
  else if (event.key == "ArrowLeft") {
    previous ()
  }
})