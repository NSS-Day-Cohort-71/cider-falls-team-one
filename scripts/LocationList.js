// import { parkAreas } from './database.js';

// // Get all park areas from the database
// const allParkAreas = parkAreas;

// // Define and export a function called LocationList
// function LocationList() {
//     let html = "<p>Park locations: ";

//     // Iterate through allParkAreas using for..of loop
//     for (const area of allParkAreas) {
//         // Each name should be an individual element within the overall element to have its own dataset
//         html += `<span data-type="location" data-id="${area.id}">${area.name}</span>`;

//         // Add a comma if it's not the last element
//         if (area.id < allParkAreas.length) {
//             html += ", ";
//         }
//     }

//     html += "</p>";
//     return html;
// }

// // Click event for each location
// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target;

//     if (itemClicked.dataset.type === "location") {
//         const locationId = itemClicked.dataset.id;
//         const selectedLocation = allParkAreas.find(location => location.id === parseInt(locationId));

//         window.alert(`${selectedLocation.name} is selected.`);
//     }
// });

// export { LocationList };
