const database = {
    locations: [
        {
            id: 3,
            name: "Lodge",
            guestId:[3, 9, 12]
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            guestId:[2, 8]
        },
        {
            id: 1,
            name: "Chamfort River",
            guestId:[1, 7, 13, 14]
        },
        {
            id: 4,
            name: "Gander River",
            guestId:[4, 10, 15, 16, 17]
        },
        {
            id: 5,
            name: "Campgrounds",
            guestId:[5, 11]
        },
        {
            id: 6,
            name: "Pine Bluffs Trails",
            guestId:[6]
        },
    ],
    services: [
        {
            id: 1,
            name: "Hiking"
        },
        {
            id: 2,
            name: "Rafting"
        },
        {
            id: 3,
            name: "Canoeing"
        },
        {
            id: 4,
            name: "Fishing"
        },
        {
            id: 5,
            name: "Picnicking"
        },
        {
            id: 6,
            name: "Rock climbing"
        },
        {
            id: 7,
            name: "Lodging"
        },
        {
            id: 8,
            name: "Parking"
        },
        {
            id: 9,
            name: "Information"
        },
        {
            id: 10,
            name: "Zip lines"
        },
    ],
    locationServices: [
        {
            id: 1,
            serviceId: [2, 3, 4],
            locationId: 1
        },
        {
            id: 2,
            serviceId: [1, 5, 6],
            locationId: 2
        },
        {
            id: 3,
            serviceId: [5, 7, 8, 9],
            locationId: 3
        },
        {
            id: 4,
            serviceId: [1, 4],
            locationId: 4
        },
        {
            id: 5,
            serviceId: [7, 8, 9],
            locationId: 5
        },
        {
            id: 6,
            serviceId: [1, 5, 10],
            locationId: 6
        },
    ],
    guests: [
        {
            id: 1,
            name: "John Smith"
        },
        {
            id: 2,
            name: "Evan Gallagher"
        },
        {
            id: 3,
            name: "Jasmine Alvarez"
        },
        {
            id: 4,
            name: "Leonard Ashford"
        },
        {
            id: 5,
            name: "Gavin Holbrook"
        },
        {
            id: 6,
            name: "Clara Hastings"
        },
        {
            id: 7,
            name: "Trent Mulligan"
        },
        {
            id: 8,
            name: "Sabrina Voss"
        },
        {
            id: 9,
            name: "Dante Carmichael"
        },
        {
            id: 10,
            name: "Morgan Whitaker"
        },
        {
            id: 11,
            name: "Fiona Drexel"
        },
        {
            id: 12, 
            name: "Cody Clark"
        }, 
        {
            id: 13,
            name: "Caleb Ford"
        }, 
        {
            id: 14, 
            name: "Nicholas Winkler"
        }, 
        {
            id: 15,
            name: "Lane Dillard"
        },
        {
            id: 16,
            name: "Coach Steve"
        }, 
        {
            id: 17,
            name: "Greg Korte"
        }
    ]
}

export const getLocations = () =>
    database.locations.map((location) => ({ ...location }))

export const getServices = () =>
    database.services.map((service) => ({ ...service }))

export const getGuests = () =>
    database.guests.map((guest) => ({ ...guest }))

export const getLocationServices = () =>
    database.locationServices.map((locationService) => ({ ...locationService }))
