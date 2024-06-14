// // Import necessary data from the database module
// import { parkAreas, services, guests, guestVisits } from './database.js';
// import { getParkAreaServices } from './pairings.js'; // import from pairings module

// // Function to get the number of guests for a specific park area
// function getNumberOfGuestsForParkArea(parkAreaId) {
//     return guestVisits.filter(guestVisit => guestVisit.park_area_id === parkAreaId).length;
// }

// // Define and export a function called LocationList
// function LocationList() {
//     let html = "<div class='park-locations'>";

//     // Iterate through allParkAreas using a for..of loop
//     for (const area of allParkAreas) {
//         // Get services offered in the current park area using getParkAreaServices from pairings module
//         const areaServices = getParkAreaServices(area.id);

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

// // Click event listener for each location to display the number of guests
// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target.closest('.park-area');

//     if (itemClicked && itemClicked.dataset.type === "location") {
//         const locationId = parseInt(itemClicked.dataset.id);
//         const numberOfGuests = getNumberOfGuestsForParkArea(locationId);

//         window.alert(`Number of guests in ${itemClicked.querySelector('h3').textContent}: ${numberOfGuests}`);
//     }
// });

// // Export the LocationList function to be used in other modules
// export { LocationList };
