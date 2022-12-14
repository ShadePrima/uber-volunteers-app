export const filterData = [
  { name: "Ride", image: require("../../assets/ride.png"), id: "0" },
  { name: "Food", image: require("../../assets/food.png"), id: "1" },
  { name: "Package", image: require("../../assets/package.png"), id: "2" },
  { name: "Reserve", image: require("../../assets/reserve.png"), id: "3" },
];

export const rideData = [
  { street: "Rozumovka", area: "This is Vladimir's home", id: "0" },
  { street: "Baburka", area: "This is home", id: "1" },
  {
    street: "Jabotinskogo",
    area: " This is our office",
    id: "2",
  },
  { street: "Different place", area: "Some diffetent address", id: "3" },
  { street: "Different place", area: "Some diffetent address", id: "4" },
];

export const carTypeData = [
  {
    title: "Popular",
    data: [
      {
        name: "Uber Go",
        group: 2,
        price: 7,
        image: require("../../assets/uberGo.png"),
        note: "Affordable.compact rides",
        promotion: 5,
        time: "20:19",
        id: "0",
      },
      {
        name: "UberX",
        group: 3,
        price: 5.5,
        image: require("../../assets/uberX.png"),
        note: "Affordable everyday trips",
        promotion: 0,
        time: "20:20",
        id: "1",
      },
      {
        name: "Connect",
        group: 0,
        price: 12.6,
        image: require("../../assets/uberConnect.png"),
        note: "Send and receive packages",
        promotion: 10,
        time: "20:33",
        id: "2",
      },
    ],
  },

  {
    title: "Premium",
    data: [
      {
        name: "Black",
        group: 3,
        price: 17.4,
        image: require("../../assets/uberBlack.png"),
        note: "Premium trips in luxury cars",
        promotion: 0,
        time: "20:31",
        id: "3",
      },
      {
        name: "Van",
        group: 6,
        price: 22.3,
        image: require("../../assets/uberVan.png"),
        note: "Rides for groups up to 6",
        promotion: 12,
        time: "20:31",
        id: "4",
      },
    ],
  },

  {
    title: "More",
    data: [
      {
        name: "Assist",
        group: 3,
        price: 35.3,
        image: require("../../assets/uberAssist.png"),
        note: "Special assistance from certified drivers",
        promotion: 26,
        time: "20:25",
        id: "5",
      },
    ],
  },
];

export const requestData = [
  {
    name: "For Me",
    id: 0,
  },
  {
    name: "For Someone",
    id: 1,
  },
];

export const rideOptions = [
  { name: "Personal", icon: "account", id: "0" },
  { name: "Business", icon: "briefcase", id: "1" },
];

export const paymentOptions = [
  { image: require("../../assets/visaIcon.png"), text: "Visa ...0476" },
  { image: require("../../assets/cashIcon.png"), text: "Cash" },
];

export const availableServices = [
  "Uber Go",
  "UberX",
  "Uber connect",
  "Uber Black",
  "Uber Van",
  "Uber Assist",
];

export const carsAround = [
  { latitude: 48.28423, longitude: 24.548835 },
  { latitude: 48.286657, longitude: 24.547143 },
  { latitude: 47.760394, longitude: 35.138751 },
  { latitude: 47.751994, longitude: 35.139238 },
  { latitude: 47.838953, longitude: 35.130279 },
];
