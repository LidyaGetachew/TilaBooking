import hotelImg1 from "../images/hotelImg1.jpg";
import hotelImg2 from "../images/hotelImg2.jpg";
import hotelImg3 from "../images/hotelImg3.jpg";
const hotels = [{
    id: "01",
    title: "Cherry Blossoms Hotel",
    city: "Tokyo",
    Country:"Japan",
    distance: 500,
    address: "123 Sakura Street, Minato-ku, Tokyo, Japan",
    minPrice: 88,
    description: {
      overview: "This hotel is located in Japan and offers a comfortable stay.",
      amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant"],
      FAQs: [
        {
          question: "What amenities are available at the hotel?",
          answer: "The hotel provides free Wi-Fi, a swimming pool, and a restaurant.",
        },
        {
          question: "Is breakfast included in the price?",
          answer: "Yes, breakfast is included in the price of the hotel room.",
        },
      ],
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
    },
    reviews: [
      {
        name: "John Doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    rating:5,
    photo: hotelImg1,
  },
    {
      id: "02",
      title: "Sunset Beach Resort",
      city: "Miami",
      country:"USA",
      distance: 200,
      address: "123 Ocean Drive, Miami, FL, USA",
      minPrice: 120,
      description: {
        overview: "Enjoy a beachfront stay at our luxurious resort in Miami.",
        amenities: ["Ocean View Rooms", "Private Beach Access", "Spa & Wellness Center"],
        FAQs: [
          {
            question: "What amenities are available at the hotel?",
            answer: "The hotel provides ocean view rooms, private beach access, and a spa & wellness center.",
          },
          {
            question: "Is breakfast included in the price?",
            answer: "Yes, breakfast is included in the price of the hotel room.",
          },
        ],
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d-80.123456789!3d25.987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjUiTiA4MMKwMTInMzMuNyJX!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      reviews: [
        {
          name: "John Doe",
          rating: 4.4,
        },
        {
          name: "Jane Smith",
          rating: 4.8,
        },
      ],
      avgRating: 4.6,
      rating:4,

      photo: hotelImg2,
    },
    {
      id: "03",
      title: "Mountain View Lodge",
      country:"USA",
      city: "Aspen",
      distance: 100,
      address: "456 Mountain Road, Aspen, CO, USA",
      minPrice: 180,
      description: {
        overview: "Experience the beauty of the mountains at our cozy lodge in Aspen.",
        amenities: ["Scenic Views", "Fireplace in Rooms", "Hiking Trails"],
        FAQs: [
          {
            question: "What amenities are available at the lodge?",
            answer: "The lodge provides scenic views, rooms with fireplaces, and access to hiking trails.",
          },
          {
            question: "Is breakfast included in the price?",
            answer: "Yes, breakfast is included in the price of the lodge room.",
          },
        ],
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d-106.123456789!3d39.987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE1JzUzLjAiTiAxMDjCsDAwJzU0LjAiVw!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      reviews: [
        {
          name: "Michael Johnson",
          rating: 4.6,
        },
        {
          name: "Emily Davis",
          rating: 4.2,
        },
      ],
      avgRating: 4.4,
      rating:3,
      photo: hotelImg3,
    },
    {
        id: "04",
        title: "Sheraton Addis",
        city: "Addis Ababa",
        country:"Ethiopia",
        distance: 5,
        address: "Taitu Street, Addis Ababa, Ethiopia",
        minPrice: 250,
        description: {
          overview: "Experience luxury and comfort at Sheraton Addis in the heart of Addis Ababa.",
          amenities: ["Swimming Pool", "Spa", "Fitness Center"],
          FAQs: [
            {
              question: "What amenities are available at the hotel?",
              answer: "The hotel provides a swimming pool, spa, and fitness center.",
            },
            {
              question: "Is breakfast included in the price?",
              answer: "Yes, breakfast is included in the price of the hotel room.",
            },
          ],
          map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.842972982926!2d38.75776031475733!3d9.00933469367584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e7e1e6d2d5%3A0x9a7a8a0e7e7a7a7a!2sSheraton%20Addis%2C%20a%20Luxury%20Collection%20Hotel%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1660111111111!5m2!1sen!2set" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        reviews: [
          {
            name: "John Doe",
            rating: 4.8,
          },
          {
            name: "Jane Smith",
            rating: 4.6,
          },
        ],
        avgRating: 4.7,
        photo: hotelImg1,
      },
      {
        id: "05",
        title: "Hilton Addis Ababa",
        city: "Addis Ababa",
        country:"Ethiopia",
        distance: 3,
        address: "Menelik II Avenue, Addis Ababa, Ethiopia",
        minPrice: 200,
        description: {
          overview: "Enjoy a comfortable stay at Hilton Addis Ababa, conveniently located in the heart of the city.",
          amenities: ["Restaurant", "Bar", "Business Center"],
          FAQs: [
            {
              question: "What amenities are available at the hotel?",
              answer: "The hotel provides a restaurant, bar, and business center.",
            },
            {
              question: "Is breakfast included in the price?",
              answer: "Yes, breakfast is included in the price of the hotel room.",
            },
          ],
          map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.842972982926!2d38.75776031475733!3d9.00933469367584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e7e1e6d2d5%3A0x9a7a8a0e7e7a7a7a!2sHilton%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1660111111111!5m2!1sen!2set" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        reviews: [
          {
            name: "Michael Johnson",
            rating: 4.5,
          },
          {
            name: "Emily Davis",
            rating: 4.3,
          },
        ],
        avgRating: 4.4,
        photo: hotelImg2,
      },
  ];
  

  export default hotels