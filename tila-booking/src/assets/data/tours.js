import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 10,
    desc: {
      overview: "This tour takes you to Bali, Indonesia.",
      itinerary: "Experience the beautiful beaches, explore the local culture, and indulge in delicious cuisine.",
      cost: {
        included: ["Accommodation", "transportation within Bali"],
        notIncluded: ["Flights to Bali"],
      },
      FAQs: [
        {
          question: "What is included in the tour?",
          answer: "The tour includes accommodation and transportation within Bali.",
        },
        {
          question: "Are flights to Bali included?",
          answer: "No, flights to Bali are not included.",
        },
      ],
      Map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>' 
      },
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
         name: "jhon doe",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: 'SomeWhere',
    price: 96,
    maxGroupSize: 8,
    desc: {
      overview: "This tour takes you to Bali, Indonesia.",
      itinerary: "Experience the beautiful beaches, explore the local culture, and indulge in delicious cuisine.",
      cost: {
        included: ["Accommodation", "transportation within Bali"],
        notIncluded: ["Flights to Bali"],
      },
      FAQs: [
        {
          question: "What is included in the tour?",
          answer: "The tour includes accommodation and transportation within Bali.",
        },
        {
          question: "Are flights to Bali included?",
          answer: "No, flights to Bali are not included.",
        },
      ],
      Map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'
  
     },
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'SomeWhere',
    price: 76,
    maxGroupSize: 8,
    desc: {
      overview: "This tour takes you to Bali, Indonesia.",
      itinerary: "Experience the beautiful beaches, explore the local culture, and indulge in delicious cuisine.",
      cost: {
        included: ["Accommodation", "transportation within Bali"],
        notIncluded:[ "Flights to Bali"],
      },
      FAQs: [
        {
          question: "What is included in the tour?",
          answer: "The tour includes accommodation and transportation within Bali.",
        },
        {
          question: "Are flights to Bali included?",
          answer: "No, flights to Bali are not included.",
        },
      ],
      Map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'

      },
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'SomeWhere',
    price: 85,
    maxGroupSize: 8,
    desc: {
      overview: "This tour takes you to Bali, Indonesia.",
      itinerary: "Experience the beautiful beaches, explore the local culture, and indulge in delicious cuisine.",
      cost: {
        included: ["Accommodation", "transportation within Bali"],
        notIncluded: ["Flights to Bali"],
      },
      FAQs: [
        {
          question: "What is included in the tour?",
          answer: "The tour includes accommodation and transportation within Bali.",
        },
        {
          question: "Are flights to Bali included?",
          answer: "No, flights to Bali are not included.",
        },
      ],
      Map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'
 
     },
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: 'SomeWhere',
    price: 75,
    maxGroupSize: 8,
    desc: {
      overview: "This tour takes you to Bali, Indonesia.",
      itinerary: "Experience the beautiful beaches, explore the local culture, and indulge in delicious cuisine.",
      cost: {
        included: ["Accommodation", "transportation within Bali"],
        notIncluded: ["Flights to Bali"],
      },
      FAQs: [
        {
          question: "What is included in the tour?",
          answer: "The tour includes accommodation and transportation within Bali.",
        },
        {
          question: "Are flights to Bali included?",
          answer: "No, flights to Bali are not included.",
        },
      ],
      Map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'

    },
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: 'SomeWhere',
    price: 88,
    maxGroupSize: 8,
    desc: {
      overview: "This tour takes you to Bali, Indonesia.",
      itinerary: "Experience the beautiful beaches, explore the local culture, and indulge in delicious cuisine.",
      cost: {
        included: ["Accommodation", "transportation within Bali"],
        notIncluded: ["Flights to Bali"],
      },
      FAQs: [
        {
          question: "What is included in the tour?",
          answer: "The tour includes accommodation and transportation within Bali.",
        },
        {
          question: "Are flights to Bali included?",
          answer: "No, flights to Bali are not included.",
        },
      ],
      Map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'
 
    },
    reviews: [
      {
        name: "jhon doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: 'SomeWhere',
    price: 79,
    maxGroupSize: 8,
    desc: {
      overview: "This tour takes you to Bali, Indonesia.",
      itinerary: "Experience the beautiful beaches, explore the local culture, and indulge in delicious cuisine.",
      cost: {
        included: ["Accommodation", "transportation within Bali"],
        notIncluded: ["Flights to Bali"],
      },
      FAQs: [
        {
          question: "What is included in the tour?",
          answer: "The tour includes accommodation and transportation within Bali.",
        },
        {
          question: "Are flights to Bali included?",
          answer: "No, flights to Bali are not included.",
        },
      ],
      Map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'
 
   },
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: {
      overview: "This tour takes you to Bali, Indonesia.",
      itinerary: "Experience the beautiful beaches, explore the local culture, and indulge in delicious cuisine.",
      cost: {
        included: ["Accommodation", "transportation within Bali"],
        notIncluded: ["Flights to Bali"],
      },
      FAQs: [
        {
          question: "What is included in the tour?",
          answer: "The tour includes accommodation and transportation within Bali.",
        },
        {
          question: "Are flights to Bali included?",
          answer: "No, flights to Bali are not included.",
        },
      ],
      Map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'

    },
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: {
      overview: "This tour takes you to Bali, Indonesia.",
      itinerary: "Experience the beautiful beaches, explore the local culture, and indulge in delicious cuisine.",
      cost: {
        included: ["Accommodation", "transportation within Bali"],
        notIncluded: ["Flights to Bali"],
      },
      FAQs: [
        {
          question: "What is included in the tour?",
          answer: "The tour includes accommodation and transportation within Bali.",
        },
        {
          question: "Are flights to Bali included?",
          answer: "No, flights to Bali are not included.",
        },
      ],
      Map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'
    },
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
