//import locations

//import services

//import location services

//declare a function that finds what services a location provides

//function should take three parameters? (location object, locationservicesarray, servicesarray)
export const getLocationServices = (locationObject, locationServicesArray, servicesArray) => {
    //declare variable match = null
    let match = null
    //declare empty array locationservices = []
    let matchedServices = []
//for the location object, if the location id matches the pairing location id, pairobject = match
    for ( const locationService of locationServicesArray) {
        if (locationObject.id === locationService.locationId) {
            match = service
        }
        //for the pair object, if pairobject.id = service.id push service.name to locationservices
        for ( const service of servicesArray) {
            if ( match.serviceId === service.id ) {
                matchedServices.push(service.name)
            }
        }
    }
    //return locationservices
    return matchedServices
}

