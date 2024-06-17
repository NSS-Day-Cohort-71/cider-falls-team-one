//import locations
//import services
//import location services
import { getLocations, getLocationServices, getServices } from "./database.js"

const locations = getLocations()
const services = getServices()
const locationServices = getLocationServices()

// declare a function that finds what services a location provides

// function should take three parameters? (object, locationservicesarray, array)
export const getLocationServiceMatches = (locationObject, locationServicesArray, servicesArray) => {
    //declare an empty array to hold matched services
    let matchedServices = []

    //for the location object, if the location id matches the pairing location id, find the service ids
    for (const locationService of locationServicesArray) {
        if (locationObject.id === locationService.locationId) {
            // Iterate over the array of service IDs in the locationService object
            for (const serviceId of locationService.serviceId) {
                // Find the service in the services array
                for (const service of servicesArray) {
                    if (serviceId === service.id) {
                        // Push the service name to matchedServices array
                        matchedServices.push(service.name)
                    }
                }
            }
        }
    }

    // Return the matched services
    return matchedServices
}


export const getLocationsPerService = (service, locationServicesArray, locationsArray) => {
    let matchedLocations = ``

    for (const locationService of locationServicesArray) {
        if (locationService.serviceId.includes(service)) {
            let locationId = locationService
            for (const location of locationsArray) {
                if (locationId.id === location.id) {
                    matchedLocations += `${location.name} `
                    }
                }
        }
    }
    return matchedLocations
}