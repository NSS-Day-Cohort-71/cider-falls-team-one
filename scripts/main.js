//import services()
//import locations()
//import guests()

import { getLocations, getLocationServices, getServices } from "./database.js"
import { getLocationServiceMatches, getLocationsPerService } from "./Pairings.js"

//get container from index.html and save to a variable using document.query selector

//set a base html string to be added to the dom later ie mainHTML

//<h1>Cider Falls</h1> //logo here? 
//<section>services()</section>
//<section>locations()</section>
//<section>guests()</section>
//<footer>Phone Number, Address, Email</footer>

//container.innerHTML = mainHTML

const services = getServices()
const locations = getLocations()
const locationServices = getLocationServices()

for (const service of services) {
    console.log(getLocationsPerService(service, locationServices, locations))
}