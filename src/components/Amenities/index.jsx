const amenitiesData = [
  {
    id: 1,
    name: "First-Aid Kit",
    icon: "/first-aid.svg",
  },
  {
    id: 2,
    name: "Parking",
    icon: "/parking.svg",
  },
  {
    id: 3,
    name: "Changing Rooms",
    icon: "rooms.svg",
  },
  {
    id: 4,
    name: "Washrooms",
    icon: "/washrooms.svg",
  },
  {
    id: 5,
    name: "Racquets can be rented",
    icon: "/shoes.svg",
  },
];

const Amenities = () => {
  return (
    <div className="amenities">
      <h3>Amenities</h3>
      <div className="amenities-list">
        {amenitiesData.map((each) => (
          <div key={each.id} className="each">
            <img className="icon-amenities" src={each.icon} alt="icon3" />
            <span>{each.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Amenities;
