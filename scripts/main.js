import { ServiceList } from "./Services.js"
import { guestList } from "./GuestList.js"
import { LocationList } from "./LocationList.js"

//get container from index.html and save to a variable using document.query selector
const container = document.querySelector("#container")


//set a base html string to be added to the dom later ie mainHTML

const mainHTML = `
<article class="details">
    <section id="servicesContainer">
        ${ServiceList()}
    </section>
    <section id="locationContainer">
        ${LocationList()}
    </section>
    <section id="guestsContainer">
        ${guestList()}
    </section>
    
    
</article>
`

//<h1>Cider Falls</h1> //logo here? 
//<section>services()</section>
//<section>locations()</section>
//<section>guests()</section>
//<footer>Phone Number, Address, Email</footer>

container.innerHTML = mainHTML