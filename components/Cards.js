// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const { default: Axios } = require("axios")


export function cardMaker(articleObj) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('span')

    card.className = 'card'
    headline.className = 'headline'
    author.className = 'author'
    imgContainer.className = 'img-container'
    
    headline.textContent = `${articleObj.headline}`
    image.setAttribute('src', `${articleObj.authorPhoto}`)
    name.textContent = `${articleObj.authorName}`

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(name)
    imgContainer.appendChild(image)

    card.addEventListener('click', ()=>console.log(articleObj.headline))

    return card
}

export const articlesURL = "https://lambda-times-backend.herokuapp.com/articles"

const cards = document.querySelector(".cards-container")
const errors = document.querySelector('.errors-container')
const tab = document.querySelectorAll(".tab")


Axios.get(articlesURL)
    .then(function (article) {
        //console.log(article.data.articles.javascript)
        article.data.articles.javascript.forEach(element => {cards.appendChild(cardMaker(element))});
        article.data.articles.bootstrap.forEach(element => {cards.appendChild(cardMaker(element))});
        article.data.articles.technology.forEach(element => {cards.appendChild(cardMaker(element))});
        article.data.articles.jquery.forEach(element => {cards.appendChild(cardMaker(element))});
        article.data.articles.node.forEach(element => { cards.appendChild(cardMaker(element)) });
        
        // const card = document.querySelectorAll('.card')
        // card.forEach(item => item.addEventListener('click', () => {
        //     console.log(item.childNodes[0].textContent)
        // }))
    })
    
    //Stretch 2
    .catch(function () { 
        const errorMessage = document.createElement('div')
        errorMessage.textContent = 'Error 404'
        errorMessage.style.fontSize ='300%'
        errors.appendChild(errorMessage)
     })

//Stretch 3    


    