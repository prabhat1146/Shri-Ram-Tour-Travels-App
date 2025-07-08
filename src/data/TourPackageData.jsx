// src/data/TourPackageData.js

const TourPackageDatas = [
  {
    id: "nainital-jimcorbett-mussoorie",
    name: "Nainital - Jim Corbett - Mussoorie Tour Package",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    from: "Delhi",
    to: "Delhi",
    via: [
      "Nainital",
      "Jim Corbett",
      "Mussoorie",
      "Haridwar",
      "Rishikesh",
      "Dehradun",
    ],
    location: "Delhi | Nainital | Jim Corbett | Mussoorie",
    duration: "5 Nights / 6 Days (Approx. 900 km)",
    price: 56000,
    rating: 4.7,
    shortDescription:
      "Book budget-friendly Nainital–Jim Corbett–Mussoorie Tour Package with Lakshya Cabs. Explore hills, wildlife, and nature.",
    description: `
    Explore the captivating sights of Uttarakhand through this 5 Nights 6 Days package. Visit scenic lakes of Nainital, enjoy thrilling safaris in Jim Corbett, and unwind in the serene landscapes of Mussoorie. Includes reliable transportation, comfortable stays, and an unforgettable hill station experience.
  `,
    vehicles: ["Dzire or Similar", "Innova or Similar"],
    itinerary: [
      "Day 01: Pickup from Delhi → Nainital local market, Naini Lake boating, Mall Road walk, Zoo visit",
      "Day 02: Nainital Lake Tour & Sightseeing",
      "Day 03: Drive to Jim Corbett via temples, lakes, and waterfalls",
      "Day 04: Early morning safari → Drive to Mussoorie via Haridwar, Rishikesh",
      "Day 05: Full-day Mussoorie sightseeing - Kempty Falls, Lake Mist, Camel’s Back Road, etc.",
      "Day 06: Mussoorie to Delhi drop",
    ],
    inclusions: [
      "Pick-up and drop from Delhi",
      "Hotel accommodation on twin sharing",
      "Breakfast & Dinner (MAP Plan)",
      "All sightseeing via private AC vehicle (AC may not operate in hills)",
      "Toll, parking, fuel, state taxes, and driver charges",
    ],
    exclusions: [
      "Airfare or Train fare",
      "Lunch and personal expenses",
      "Beverages, minibar, tips, phone, laundry",
      "Entry fees, guide charges, camera fees",
      "Medical/Travel insurance",
      "Excursions to Rohtang Pass/Solang Valley",
      "GST 5%",
      "Anything not mentioned in inclusions",
    ],
    cancellationPolicy: [
      "Cancel 45+ days before: No charge",
      "Cancel 30–45 days: 25% of fare",
      "Cancel 15–30 days: 50% of fare",
      "Cancel 10–15 days: 75% of fare",
      "Cancel <10 days: 100% of fare",
      "All cancellations must be emailed",
    ],
  },
  {
    id: "char-dham-tour",
    name: "Char Dham Tour Package (9 Nights / 10 Days)",
    image: "/assets/packages/Char_Dham_Tour_Package_in_India.png",
    from: "Haridwar",
    to: "Haridwar / Dehradun / Rishikesh",
    via: [
      "Barkot",
      "Yamunotri",
      "Uttarkashi",
      "Gangotri",
      "Guptkashi",
      "Kedarnath",
      "Badrinath",
      "Rudraprayag",
      "Joshimath",
    ],
    location: "Haridwar | Kedarnath | Badrinath | Yamunotri | Gangotri",
    duration: "9 Nights / 10 Days (Approx. 1400 km)",
    price: 95000,
    rating: 4.9,
    shortDescription:
      "Book an affordable Char Dham Yatra tour to Yamunotri, Gangotri, Kedarnath, and Badrinath from Lakshya Cabs.",
    description: `
    This Char Dham Yatra package offers a spiritually fulfilling 9-night, 10-day pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath. Enjoy safe travel, comfortable hotels, and ample time for prayer. The journey starts from Haridwar and includes all essential amenities for a stress-free and divine tour.
  `,
    vehicles: ["Dzire or Similar", "Ertiga or Similar", "Innova Crysta"],
    itinerary: [
      "Day 01: Haridwar → Barkot | Pickup & transfer to Barkot hotel",
      "Day 02: Barkot → Yamunotri via Janakichatti → Barkot | Temple visit & pooja",
      "Day 03: Barkot → Uttarkashi | Visit Shivgufa & Kashi Vishwanath Temple",
      "Day 04: Uttarkashi → Gangotri → Uttarkashi | Gangnani hot spring, Bhagirathi River pooja",
      "Day 05: Uttarkashi → Guptkashi | Visit Mandakini river & Ardh Narishwar Temple",
      "Day 06: Guptkashi → Kedarnath (via Helicopter or Trek from Sonprayag)",
      "Day 07: Kedarnath → Guptkashi | Return and rest",
      "Day 08: Guptkashi → Badrinath via Joshimath | Taptkund bath & Badrivishal Aarti",
      "Day 09: Badrinath → Rudraprayag | Visit Vishnu Prayag, Karn Prayag, Nand Prayag",
      "Day 10: Rudraprayag → Rishikesh/Haridwar/Dehradun | Drop-off at airport or railway station",
    ],
    inclusions: [
      "Pickup and drop-off from starting location",
      "Hotel accommodation on twin sharing basis",
      "Breakfast & Dinner (MAP Plan)",
      "Private AC vehicle for entire trip (AC off on hills)",
      "All road taxes, tolls, state taxes, parking, and driver charges",
    ],
    exclusions: [
      "Flight/Train/Bus fare",
      "Lunch or beverages not included in meals",
      "Personal expenses (laundry, calls, minibar, tips, etc.)",
      "Sightseeing entry fees, guide charges, camera charges",
      "Medical & travel insurance",
      "Expenses due to natural calamities or emergencies",
      "GST 5%",
      "Rohtang/Solang excursions (not applicable but template-ready)",
    ],
    cancellationPolicy: [
      "Cancel 45+ days before: No charge",
      "Cancel 30–45 days before: 25% of fare",
      "Cancel 15–30 days before: 50% of fare",
      "Cancel 10–15 days before: 75% of fare",
      "Cancel <10 days: 100% of fare",
      "All cancellations must be emailed",
    ],
  },
  {
  id: "varanasi-prayagraj-ayodhya",
  name: "Varanasi – Prayagraj – Ayodhya Tour Package",
  image: "/assets/packages/the_Varanasi_–_Praya.png",
  from: "Varanasi",
  to: "Ayodhya",
  via: ["Prayagraj"],
  location: "Varanasi, Uttar Pradesh",
  duration: "3 Nights / 4 Days (520 km included)",
  price: 13900,
  rating: 4.7,
  shortDescription:
    "Spiritual tour covering the sacred cities of Varanasi, Prayagraj, and Ayodhya with seamless travel and temple visits.",
  description:
    "Experience a divine 4-day journey across the holy cities of Varanasi, Prayagraj, and Ayodhya. From Ganga Aarti to Ram Janmabhoomi, this tour ensures spiritual immersion, historical exploration, and comfortable travel with Lakshya Cabs.",
  vehicles: ["Dzire or Similar", "Ertiga or Similar", "Innova Crysta"],
  itinerary: [
    "Day 1: Arrival in Varanasi – Dashashwamedh Ghat Ganga Aarti",
    "Day 2: Varanasi Sightseeing – Kashi Vishwanath, BHU, Birla Mandir, Kaal Bhairav Temple",
    "Day 3: Prayagraj Visit – Triveni Sangam, Anand Bhavan, Hanuman Mandir, Allahabad Fort → Ayodhya – Shri Ram Janmbhoomi, Hanuman Garhi, Dashrath Mahal",
    "Day 4: Return to Varanasi – Visit remaining sites – Departure"
  ],
  inclusions: [
    "Taxi Fare",
    "Driver Allowance",
    "Toll Tax",
    "Parking",
    "All permit fees"
  ],
  exclusions: [
    "Air fare / Train fare / Bus fare",
    "Meals not mentioned in inclusions",
    "Personal expenses, tips, beverages",
    "Guide charges & Entrance Fees",
    "Additional sightseeing beyond itinerary",
    "5% GST",
    "Travel Insurance",
    "Any cost due to natural calamities or political disturbances"
  ],
  cancellationPolicy: [
    "No charge if canceled 45 days prior",
    "25% cancellation between 45 – 30 days",
    "50% cancellation between 30 – 15 days",
    "75% cancellation between 15 – 10 days",
    "100% cancellation less than 10 days before travel"
  ],
  paymentTerms: [
    "25% of total cost at booking confirmation",
    "50% of total cost 15 days before arrival",
    "100% before tour start date",
    "All payments via email confirmation with transaction receipt",
    "No credit facility allowed",
    "Payment terms may vary during high season"
  ]
}

];

export default TourPackageDatas;
