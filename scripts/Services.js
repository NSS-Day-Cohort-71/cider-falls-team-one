//import getServices() from database.js
//import getLocations() from database.js

//declare variable allServices with value of getServices()

//define and export a function called ServiceList
        //function purpose: to use service data to create a list of services the park offers for display 
                //thinking ahead: how do you add dataset for future click events on each service?
                //how do you remove the last comma?

//function declaration
    //declare html variable with value of "<p>Park services: "
    //iterate through allServices using for..of loop
        //if service.id is less than allService.length
            //append name to html variable with comma following name
            //else
                //append name to html variable with no comma
                    //each name should be an individual element within the overall element to have it's own dataset
        //append "</p>" to service variable
        //return service variable

//click event for each service:

//addEventListener to document
    //declare as "click",
    //declare clickEvent function to run
    //declare variable itemClicked with value clickEvent.target
    //if itemClicked dataset.type equals "service"
        //declare variable allLocations with value of getLocations()
        //declare variable locationsThatOffer with value of {paringFunctionName}() passing in itemClicked and allLocations
        //window alert "service.name is available in locationsThatOffer"
