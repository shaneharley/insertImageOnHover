const sectionHeadings = document.querySelectorAll('section h1')
const body = document.querySelector('body')

//creating my json file
let headings = {
  "headingOne": {
    "image": "images/headingOne.jpg"
  },
  "headingTwo": {
    "image": "images/headingTwo.jpg"
  },
  "headingThree": {
    "image": "images/headingThree.jpg"
  }
}

//this is where I find a random rotation number
const createRandomRotation = () => {
  let rotation = (Math.floor(Math.random() * 20 - 10))
  rotation.toString()
  return rotation
}

//this is where I set all my image styles
const createImage = (event, numberInJSON) => {
  let img = document.createElement('div')
  img.classList.add("placedImage")
  img.style.backgroundImage = "url(" + headings[numberInJSON].image + ")"
  img.style.width = "400px"
  img.style.height = "300px"
  img.style.position = "absolute"
  //by rermoving the width and height I ensure I'm centering it
  img.style.left = event.pageX - 200 + "px"
  img.style.top = event.pageY - 150 + "px"
  let rotationToApply = createRandomRotation()
  img.style.transform = "rotate(" + rotationToApply + "deg)"
  body.appendChild(img)


}

//here I loop through each heading, add a mouse over event, detects if the heading I moused over has a matching item in the array, and returns its BG image
sectionHeadings.forEach(heading => {
  heading.addEventListener('mouseover', (event) => {
    let hoveredHeading = heading.id
    for (x in headings) {
      if (hoveredHeading == x) {
        createImage(event, x)
      }
    }
  })
})

//remove all images
body.addEventListener('click', () => {
  let createdElement = document.querySelectorAll('div')
  createdElement.forEach(element => {
    let parent = element.parentNode;
    parent.removeChild(element)
  })
})



