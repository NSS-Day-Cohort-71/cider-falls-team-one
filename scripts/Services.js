import { getLocationServices, getLocations, getServices } from "./database.js"
import { getLocationsPerService } from "./Pairings.js"

//declare variable allServices with value of getServices()
const allServices = getServices()
//define and export a function called ServiceList
        //function purpose: to use service data to create a list of services the park offers for display 
                //thinking ahead: how do you add dataset for future click events on each service?
                //how do you remove the last comma?

//function declaration
export const ServiceList = () => {
     //declare html variable with value of "<p>Park services: "
     let serviceHTML = `<p id="parkServices">Park services: `
    //iterate through allServices using for..of loop
    for (const service of allServices) {
        //if service.id is less than allService.length
        if(service.id < allServices.length){
            //append name to html variable with comma following name
            serviceHTML += `<span data-type="service"
                                  data-name="${service.name}"
                                  data-id="${service.id}"
                                  >${service.name}</span>, `
        } //else
                //append name to html variable with no comma
            else {
            serviceHTML += `<span data-type="service"
                                  data-name="${service.name}"
                                  data-id="${service.id}"
                                  >${service.name}</span>`
            //each name should be an individual element within the overall element to have it's own dataset
        }
    }
       //append "</p>" to service variable     
          serviceHTML += `</p>`          
        //return service variable
        return serviceHTML
        
}
   

//click event for each service:

//addEventListener to document
document.addEventListener(
    //declare as "click",
    "click",
    //declare clickEvent function to run
    (clickEvent) => {
    //declare variable itemClicked with value clickEvent.target
    const itemClicked = clickEvent.target
    //if itemClicked dataset.type equals "service"
    if(itemClicked.dataset.type === "service"){
        //declare variable allLocations with value of getLocations()
        const allLocations = getLocations()
        const allServiceList = getLocationServices()
        //declare variable locationsThatOffer with value of {paringFunctionName}() passing in itemClicked and allLocations
        const locationsThatOffer = getLocationsPerService(parseInt(itemClicked.dataset.id), allServiceList, allLocations)
        //window alert "service.name is available in locationsThatOffer"
        let locationsThatOfferString = ``
        for (const location of locationsThatOffer) {
            if(locationsThatOffer.length === 1) {
                locationsThatOfferString += `${location}.`
            } else if(locationsThatOffer.indexOf(location) === locationsThatOffer.length - 1){
                locationsThatOfferString += `and ${location}.`
            } else {
                locationsThatOfferString += `${location}, `
            }
            
        }
        window.alert(`${itemClicked.dataset.name} is available in ${locationsThatOfferString}`)
        }
    }
)
