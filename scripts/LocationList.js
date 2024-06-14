// Import necessary data from the database module
import { getLocations, getServices, getLocationServices } from './database.js';

// Get all locations, services, and location services from the database
const allLocations = getLocations();
const allServices = getServices();
const allLocationServices = getLocationServices();

// Function to get the services for a specific park area

// Function to get the number of guests for a specific park area
function getNumberOfGuestsForParkArea(locationId) {
    // Find the location that matches the locationId
    const location = allLocations.find(location => location.id === locationId);
    if (location) {
        // Return the number of guests in the location
        return location.guestId.length;
    }
    return 0; // Return 0 if location is not found
}

// Define and export a function called LocationList
function LocationList() {
    // Start building the HTML string for park locations
    let html = "<div class='park-locations'>";

    // Iterate through allLocations using a for..of loop
    for (const location of allLocations) {
        // Get services for the current park area
        const servicesList = getServicesForParkArea(location.id).join(", ");

        // Each name should be an individual element within the overall element to have its own dataset
        html += `
            <div 
            class="park-area" 
            data-type="location" 
            data-id="${location.id}">
                <h3>${location.name}</h3>
                <p>Services: ${servicesList}</p>
            </div>
        `;
    }

    html += "</div>";
    return html;
}

// Add a click event listener to the document
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    // Check if the clicked element or its parent has the class 'park-area'
    if (itemClicked.classList.contains('park-area') || itemClicked.closest('.park-area')) {
        // If the clicked element does not have the class 'park-area', find the closest parent with the class 'park-area'
        const parkAreaElement = itemClicked.classList.contains('park-area') ? itemClicked : itemClicked.closest('.park-area');

        // Get the location ID from the data-id attribute
        const locationId = parseInt(parkAreaElement.getAttribute('data-id'));

        // Get the number of guests for the clicked park area
        const numberOfGuests = getNumberOfGuestsForParkArea(locationId);

        // Display an alert with the number of guests in the clicked park area
        window.alert(`Number of guests in ${parkAreaElement.querySelector('h3').textContent}: ${numberOfGuests}`);
    }
});

// Export the LocationList function to be used in other modules
export { LocationList };