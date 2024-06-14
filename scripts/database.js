const database = {
    locations: [
        {
            id: 1,
            name: "Chamfort River",
            guestId:[1, 7]
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            guestId:[2, 8]
        },
        {
            id: 3,
            name: "Lodge",
            guestId:[3, 9]
        },
        {
            id: 4,
            name: "Gander River",
            guestId:[4, 10]
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
            name: "hiking"
        },
        {
            id: 2,
            name: "rafting"
        },
        {
            id: 3,
            name: "canoeing"
        },
        {
            id: 4,
            name: "fishing"
        },
        {
            id: 5,
            name: "picnicking"
        },
        {
            id: 6,
            name: "rock climbing"
        },
        {
            id: 7,
            name: "lodging"
        },
        {
            id: 8,
            name: "parking"
        },
        {
            id: 9,
            name: "information"
        },
        {
            id: 10,
            name: "zip lines"
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
    ]
}

export const getLocations = () =>
    database.locations.map((location) ({ ...location }))

export const getServices = () =>
    database.services.map((service) ({ ...service }))

export const getGuests = () =>
    database.guests.map((guest) ({ ...guest }))