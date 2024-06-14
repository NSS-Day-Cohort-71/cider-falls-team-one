// // Import necessary data from the database module
// import { parkAreas, parkAreaServices, services, guests, guestVisits } from './database.js';

// // Get all park areas from the database
// const allParkAreas = parkAreas;

// // Function to retrieve services offered in a specific park area
// function getServicesForParkArea(parkAreaId) {
//     // Filter parkAreaServices to find services specific to the given parkAreaId
//     const filteredServices = parkAreaServices.filter(parkAreaServices => parkAreaServices.park_area_id === parkAreaId);
    
//     // Map filtered services to their full details from the services list
//     const servicesForArea = filteredServices.map(parkAreaServices => {
//         return services.find(service => service.id === parkAreaServices.service_id);
//     });

//     return servicesForArea;
// }

// // Function to get the number of guests visiting a specific park area
// function getNumberOfGuestsForParkArea(parkAreaId) {
//     // Filter guestVisits to find visits specific to the given parkAreaId and count them
//     const visits = guestVisits.filter(guestVisit => guestVisit.park_area_id === parkAreaId);
//     return visits.length;
// }

// // Define and export a function called LocationList
// function LocationList() {
//     let html = "<div class='park-locations'>";

//     // Iterate through allParkAreas using a for..of loop
//     for (const area of allParkAreas) {
//         // Get services offered in the current park area
//         const areaServices = getServicesForParkArea(area.id);

//         // Create a comma-separated list of service names
//         const servicesList = areaServices.map(service => service.name).join(", ");

//         // Construct HTML for each park area with its services
//         html += `
//             <div class="park-area" data-type="location" data-id="${area.id}">
//                 <h3>${area.name}</h3>
//                 <p>${servicesList}</p>
//             </div>
//         `;
//     }

//     html += "</div>";
//     return html;
// }

// // Click event listener for each park area to display the number of guests
// document.addEventListener("click", (clickEvent) => {
//     // Find the closest park-area element that was clicked
//     const itemClicked = clickEvent.target.closest('.park-area');

//     // If an element with class 'park-area' is clicked and has data-type="location"
//     if (itemClicked && itemClicked.dataset.type === "location") {
//         // Extract the location ID from the dataset attribute
//         const locationId = parseInt(itemClicked.dataset.id);
        
//         // Get the number of guests visiting the clicked park area
//         const numberOfGuests = getNumberOfGuestsForParkArea(locationId);

//         // Display an alert with the number of guests for the park area
//         window.alert(`Number of guests in ${itemClicked.querySelector('h3').textContent}: ${numberOfGuests}`);
//     }
// });

// // Export the LocationList function to be used in other modules
// export { LocationList };
