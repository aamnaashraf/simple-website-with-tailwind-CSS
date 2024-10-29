function getRandomValue (min:number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}
export const destinationsItems = [
    {
     id: "1",
     image:"/img 1.jpg",
     title: "Maldives",
     rating: getRandomValue(1, 5),
     period: "2 Days 1 Night",
     price: getRandomValue(50, 100),
    },
    {
        id: "2",
        image:"/img 2.jpg",
        title: "Hawaii",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "3",
        image:"/img 3.jpg",
        title: "Switzerland",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "4",
        image:"/img 4.jpg",
        title: "New York",
        rating: getRandomValue(1, 5),
        period: "5 Days 4 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "5",
        image:"/img 5.jpg",
        title: "Bora Bora",
        rating: getRandomValue(1, 5),
        period: "6 Days 5 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "6",
        image:"/img 6.jpg",
        title: "Dubai",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "7",
        image:"/img 7.jpg",
        title: "Amazon Rainforest",
        rating: getRandomValue(1, 5),
        period: "7 Days 6 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "8",
        image:"/img 8.jpg",
        title: "Tuscany",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "9",
        image:"/img 9.jpg",
        title: "Alaska",
        rating: getRandomValue(1, 5),
        period: "5 Days 4 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "10",
        image:"/img 10.jpg",
        title: "Rome",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "11",
        image:"/img 11.jpg",
        title: "Phuket",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Nights",
        price: getRandomValue(50, 100),
       },
       {
        id: "12",
        image:"/img 12.jpg",
        title: "Lake Tahoe",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(50, 100),
       },
      
];


export const hotels =[
    {
      id: "1",
      image: "/hotel 1.jpg",
      bed: "Kings Bed",
      capacity: getRandomValue(1, 10),
      rating: getRandomValue(1, 5),
      price: getRandomValue(50,1000),
      title:"Enchanting Lodge",
    },
    {
        id: "2",
        image: "/hotel 2.jpg",
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50,1000),
        title: "Modern Heaven",
      },
      {
        id: "3",
        image: "/hotel 3.jpg",
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50,1000),
        title: "Quaint Sanctuary",
      },
      {
        id: "4",
        image: "/hotel 4.jpg",
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50,1000),
        title: "Cozy Retreat",
      },
];

export const testimonials =[
  {
name:"Emily Johnson",
rating: 5,
description: "Exceptional service! The team went above and beyond to meet my expectations. I am impressed with the attention to detail and prompt communication. Highly Recommended!",
country: "United States",
image:"/testimonial 1.jpg"
  },
  {
    name:"John Anderson",
    rating: 4,
    description: "Great experience overall.The product qulity is good and delivery was on time. The minor hiccup in communication but the team quickly resolved it. Will consider for future purchases!",
    country: "Canada",
    image:"/testimonial 3.jpg"
      },
      {
        name:"Sophia Ramirez",
        rating: 5,
        description: "Outstanding customer service! The team was incredibly helpful and responsive. They addressed all my concerns, making the entire process smooth. Very satisfied with the outcome!",
        country: "Australia",
        image:"/testimonial 2.jpg"
          },
]