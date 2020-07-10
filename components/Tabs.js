// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topicURL = "https://lambda-times-backend.herokuapp.com/topics"

const topics = document.querySelector('.topics')

axios.get(topicURL)
    .then(function (topic) {
        //console.log(topic.data.topics)
        topic.data.topics.forEach(item => {
            const tab = document.createElement("div")
            tab.className = "tab"
            tab.textContent = `${item}`
            topics.appendChild(tab)
        });
     })
    .catch(function (error) { console.log(error) })



