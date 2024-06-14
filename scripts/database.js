const parkAreas = [
    { id: 1, name: "Chamfort River", location: "northeast", description: "Supports rafting, canoeing, and fishing" },
    { id: 2, name: "Lost Wolf Hiking Trail", location: "northern", description: "Supports hiking, picnicking, and rock climbing" },
    { id: 3, name: "Lodge", location: "northwest", description: "Main attraction is the Lodge, also a hotel and a restaurant. Supports lodging, parking, information, and picnicking" },
    { id: 4, name: "Gander River", location: "southwest", description: "A natural preserve, supports fishing and hiking" },
    { id: 5, name: "Campgrounds", location: "southern", description: "Main attraction is the Campgrounds. Supports information, lodging, and parking" },
    { id: 6, name: "Pine Bluffs Trails", location: "southeast", description: "A vast network of trails for all levels of hikers. Supports hiking, picnicking, and zip lines" }
  ];
  
  const services = [
    { id: 1, name: "rafting" },
    { id: 2, name: "canoeing" },
    { id: 3, name: "fishing" },
    { id: 4, name: "hiking" },
    { id: 5, name: "picnicking" },
    { id: 6, name: "rock climbing" },
    { id: 7, name: "lodging" },
    { id: 8, name: "parking" },
    { id: 9, name: "information" },
    { id: 10, name: "zip lines" }
  ];
  
  const guests = [
    { id: 1, first_name: "John", last_name: "Doe" },
    { id: 2, first_name: "Jane", last_name: "Smith" },
    { id: 3, first_name: "Jim", last_name: "Beam" }
  ];
  
  const parkAreaServices = [
    { park_area_id: 1, service_id: 1 },
    { park_area_id: 1, service_id: 2 },
    { park_area_id: 1, service_id: 3 },
    { park_area_id: 2, service_id: 4 },
    { park_area_id: 2, service_id: 5 },
    { park_area_id: 2, service_id: 6 },
    { park_area_id: 3, service_id: 7 },
    { park_area_id: 3, service_id: 8 },
    { park_area_id: 3, service_id: 9 },
    { park_area_id: 3, service_id: 5 },
    { park_area_id: 4, service_id: 3 },
    { park_area_id: 4, service_id: 4 },
    { park_area_id: 5, service_id: 9 },
    { park_area_id: 5, service_id: 7 },
    { park_area_id: 5, service_id: 8 },
    { park_area_id: 6, service_id: 4 },
    { park_area_id: 6, service_id: 5 },
    { park_area_id: 6, service_id: 10 }
  ];
  
  const guestVisits = [
    { guest_id: 1, park_area_id: 1 },
    { guest_id: 1, park_area_id: 2 },
    { guest_id: 2, park_area_id: 3 },
    { guest_id: 2, park_area_id: 4 },
    { guest_id: 3, park_area_id: 5 },
    { guest_id: 3, park_area_id: 6 }
  ];
  
  export { parkAreas, services, guests, parkAreaServices, guestVisits };