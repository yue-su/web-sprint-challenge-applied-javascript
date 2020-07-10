/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function carousel() {

  const carousel =document.createElement('div')
  const leftButton =document.createElement('div')
  const image1 =document.createElement('img')
  const image2 =document.createElement('img')
  const image3 =document.createElement('img')
  const image4 = document.createElement('img')
  const rightButton = document.createElement('div')
  
  carousel.className = 'carousel'
  leftButton.className = 'left-button'
  rightButton.className = 'right-button'

  leftButton.textContent = '<'
  rightButton.textContent = '>'
  image1.setAttribute("src", "./assets/carousel/mountains.jpeg")
  image1.style.display = 'block'
  image2.setAttribute("src", "./assets/carousel/computer.jpeg")
  image3.setAttribute("src", "./assets/carousel/trees.jpeg")
  image4.setAttribute("src", "./assets/carousel/turntable.jpeg")

  carousel.appendChild(leftButton)
  carousel.appendChild(image1)
  carousel.appendChild(image2)
  carousel.appendChild(image3)
  carousel.appendChild(image4)
  carousel.appendChild(rightButton)

  let imgArr = [
    image1,
    image2,
    image3,
    image4,
  ]


  let index = 0

  rightButton.addEventListener('click', (event) => {
    if (index < 3) {
      imgArr[index].style.display = 'none'
      imgArr[index + 1].style.display = 'block'
      index++
    } else if(index === 3) {
      imgArr[3].style.display = 'none'
      imgArr[0].style.display = 'block'
      index = 0
    }
    
  })

  leftButton.addEventListener('click', (event) => {
    if (index > 0) {
      imgArr[index].style.display = "none"
      imgArr[index - 1].style.display = "block"
      index++
    } else if ((index === 0)) {
      imgArr[0].style.display = "none"
      imgArr[3].style.display = "block"
      index = 3
    }
  })

  return carousel
  
  
  
}

const carouselContainer = document.querySelector(".carousel-container")
carouselContainer.appendChild(carousel())

