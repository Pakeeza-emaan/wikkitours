import {
  Compass,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type Destination = {
  name: string;
  country: string;
  image: string;
  tag: string;
  price: string;
  days: number;
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Tour = {
  id: string;
  title: string;
  location: string;
  image: string;
  gallery: string[];
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  highlights: string[];
  tag?: string;
  overview: string;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  bestSeason: string;
  difficulty: string;
  groupSize: string;
};

export type Testimonial = {
  name: string;
  trip: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TeamMember = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  span?: boolean;
};

export const destinations: Destination[] = [
  {
    name: 'Hunza Valley',
    country: 'Gilgit-Baltistan',
    image:
      'https://images.pexels.com/photos/19442083/pexels-photo-19442083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Valley Escape',
    price: 'PKR 45,000',
    days: 6,
  },
  {
    name: 'Skardu',
    country: 'Gilgit-Baltistan',
    image:
      'https://images.pexels.com/photos/19442097/pexels-photo-19442097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Lakes & Peaks',
    price: 'PKR 55,000',
    days: 7,
  },
  {
    name: 'Swat Valley',
    country: 'Khyber Pakhtunkhwa',
    image:
      'https://images.pexels.com/photos/12885115/pexels-photo-12885115.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Green Meadows',
    price: 'PKR 32,000',
    days: 4,
  },
  {
    name: 'Fairy Meadows',
    country: 'Gilgit-Baltistan',
    image:
      'https://images.pexels.com/photos/29401243/pexels-photo-29401243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Nanga Parbat',
    price: 'PKR 48,000',
    days: 5,
  },
  {
    name: 'Neelum Valley',
    country: 'Azad Kashmir',
    image:
      'https://images.pexels.com/photos/27453961/pexels-photo-27453961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Hidden Gem',
    price: 'PKR 38,000',
    days: 5,
  },
  {
    name: 'Naran & Kaghan',
    country: 'Khyber Pakhtunkhwa',
    image:
      'https://images.pexels.com/photos/13087894/pexels-photo-13087894.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Alpine Lakes',
    price: 'PKR 35,000',
    days: 4,
  },
];

export const tours: Tour[] = [
  {
    id: 'hunza-khunjerab',
    title: 'Hunza & Khunjerab Expedition',
    location: 'Hunza Valley, Gilgit-Baltistan',
    image:
      'https://images.pexels.com/photos/15916726/pexels-photo-15916726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/35302565/pexels-photo-35302565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8835247/pexels-photo-8835247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29890322/pexels-photo-29890322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/15573399/pexels-photo-15573399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    price: 'PKR 45,000',
    duration: '6 days · 5 nights',
    rating: 4.9,
    reviews: 214,
    highlights: ['Attabad Lake boating', 'Eagle&apos;s Nest sunset', 'Khunjerab Pass'],
    tag: 'Bestseller',
    overview:
      'Journey through the heart of Hunza Valley — from the turquoise waters of Attabad Lake to the soaring Passu Cones and the highest paved border crossing in the world at Khunjerab. This is the trip that made Wikki famous.',
    itinerary: [
      {
        day: 1,
        title: 'Islamabad to Naran',
        description:
          'Depart Islamabad at dawn and drive the scenic Kaghan Valley route toward Naran, stopping at waterfalls and riverside tea stalls along the way.',
      },
      {
        day: 2,
        title: 'Over Babusar Pass to Karimabad',
        description:
          'Cross the spectacular Babusar Pass (4,173m) into Gilgit-Baltistan. Arrive in Karimabad and watch the sunset paint Rakaposhi gold from Eagle&apos;s Nest viewpoint.',
      },
      {
        day: 3,
        title: 'Attabad Lake & Passu Cones',
        description:
          'Boat across the jewel-toned Attabad Lake, then drive north to gaze up at the iconic Passu Cones. Lunch at a local Hunza home with apricot cake and chapshuro.',
      },
      {
        day: 4,
        title: 'Khunjerab Pass',
        description:
          'Drive the Karakoram Highway to the Pakistan-China border at Khunjerab Pass (4,693m) — the highest paved international crossing on Earth. Return to Sost for the night.',
      },
      {
        day: 5,
        title: 'Altit & Baltit Forts',
        description:
          'Explore 900-year-old Altit Fort and the royal gardens, then tour Baltit Fort perched above Karimabad. Free evening to wander the bazaar.',
      },
      {
        day: 6,
        title: 'Return to Islamabad',
        description:
          'Fly or drive back to Islamabad (flight subject to weather). Trip ends with a farewell dinner and transfer to the airport.',
      },
    ],
    included: [
      'All transport in 4x4 jeeps & coaster',
      '5 nights hotel & guesthouse stays',
      'Daily breakfast & 4 dinners',
      'Expert local guide',
      'All entry tickets & permits',
      'Attabad Lake boat ride',
    ],
    excluded: ['Flights to/from Islamabad', 'Travel insurance', 'Personal expenses', 'Lunches'],
    bestSeason: 'May – October',
    difficulty: 'Easy – Moderate',
    groupSize: '2 – 16',
  },
  {
    id: 'skardu-lakes-forts',
    title: 'Skardu Lakes & Forts Tour',
    location: 'Skardu, Gilgit-Baltistan',
    image:
      'https://images.pexels.com/photos/35302567/pexels-photo-35302567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/19442076/pexels-photo-19442076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35302567/pexels-photo-35302567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27948633/pexels-photo-27948633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    price: 'PKR 55,000',
    duration: '7 days · 6 nights',
    rating: 4.8,
    reviews: 187,
    highlights: ['Shangrila Resort', 'Shigar Fort', 'Deosai Plains'],
    overview:
      'Skardu is where the Karakoram reveals its most dramatic face. Sleep beside the rose-colored Shangrila Lake, walk the ancient halls of Shigar Fort, and stand on the roof of the world at Deosai National Park.',
    itinerary: [
      {
        day: 1,
        title: 'Fly to Skardu',
        description:
          'Morning flight from Islamabad over the Karakoram range (weather permitting). Check in at Shangrila Resort and relax by Lower Kachura Lake.',
      },
      {
        day: 2,
        title: 'Shangrila & Upper Kachura Lake',
        description:
          'Explore the Shangrila resort grounds, then take a short hike to Upper Kachura Lake — a hidden turquoise pool framed by poplar trees.',
      },
      {
        day: 3,
        title: 'Shigar Fort & Valley',
        description:
          'Drive to the 17th-century Shigar Fort, now a heritage hotel. Tour the fort museum and the surrounding fruit orchards of Shigar Valley.',
      },
      {
        day: 4,
        title: 'Journey to Deosai Plains',
        description:
          'Enter Deosai National Park — the second-highest alpine plateau on Earth. Spot marmots, wildflowers, and perhaps the Himalayan brown bear. Camp under a sky thick with stars.',
      },
      {
        day: 5,
        title: 'Sheosar Lake & Return',
        description:
          'Walk to the mirror-still Sheosar Lake at 4,140m, then drive back down to Skardu for a hot shower and a hearty dinner.',
      },
      {
        day: 6,
        title: 'Kharpocho Fort & Skardu Town',
        description:
          'Hike up to the ruins of Kharpocho Fort for a panoramic view of the Indus River confluence. Free afternoon in Skardu bazaar.',
      },
      {
        day: 7,
        title: 'Fly back to Islamabad',
        description:
          'Morning flight back to Islamabad. Farewell brunch and airport drop-off. (Road transfer available if flights are cancelled.)',
      },
    ],
    included: [
      'Flights Islamabad–Skardu–Islamlamabad',
      '6 nights hotel & resort stays',
      'Daily breakfast & 5 dinners',
      'Expert local guide',
      'Deosai National Park permit',
      'All ground transport',
    ],
    excluded: ['Travel insurance', 'Lunches', 'Personal expenses', 'Optional activities'],
    bestSeason: 'June – September',
    difficulty: 'Easy',
    groupSize: '2 – 12',
  },
  {
    id: 'swat-kalam-getaway',
    title: 'Swat & Kalam Getaway',
    location: 'Swat Valley, Khyber Pakhtunkhwa',
    image:
      'https://images.pexels.com/photos/38794094/pexels-photo-38794094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/12885115/pexels-photo-12885115.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38794094/pexels-photo-38794094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38278953/pexels-photo-38278953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/210593/pexels-photo-210593.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    price: 'PKR 32,000',
    duration: '4 days · 3 nights',
    rating: 4.9,
    reviews: 142,
    highlights: ['Kandol Lake trek', 'Malam Jabba', 'River rafting'],
    tag: 'New',
    overview:
      'Swat is the Switzerland of Pakistan — emerald valleys, rushing rivers, and alpine lakes just a few hours from Islamabad. This compact getaway is perfect for families and first-time mountain travellers.',
    itinerary: [
      {
        day: 1,
        title: 'Islamabad to Mingora',
        description:
          'Drive from Islamabad through the Malakand Pass into Swat Valley. Stop at the ancient Buddhist stupas of Butkara. Arrive in Mingora by evening.',
      },
      {
        day: 2,
        title: 'Malam Jabba',
        description:
          'Drive up to Malam Jabba — Pakistan&apos;s premier hill station. Ride the chairlift, take in the Hindu Kush views, and enjoy a forest walk.',
      },
      {
        day: 3,
        title: 'Kalam & Kandol Lake',
        description:
          'Continue north to Kalam, then take a jeep to the trailhead for Kandol Lake. A short scenic trek brings you to the lake. Return to Kalam for the night.',
      },
      {
        day: 4,
        title: 'Return to Islamabad',
        description:
          'Optional morning river rafting on the Swat River, then drive back to Islamabad. Arrive by early evening.',
      },
    ],
    included: [
      'All transport in air-conditioned vehicle',
      '3 nights hotel stays',
      'Daily breakfast & 2 dinners',
      'Local guide',
      'Malam Jabba chairlift ticket',
      'Kandol Lake jeep & trek',
    ],
    excluded: ['Travel insurance', 'Lunches', 'Personal expenses', 'Optional rafting'],
    bestSeason: 'April – October',
    difficulty: 'Easy',
    groupSize: '2 – 20',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Aisha & Daniel',
    trip: 'Hunza & Khunjerab Expedition',
    avatar:
      'https://images.pexels.com/photos/33820671/pexels-photo-33820671.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote:
      'Wikki planned every detail so we could simply show up and fall in love. The sunset at Eagle&apos;s Nest was the most magical evening of our lives.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    trip: 'Skardu Lakes & Forts Tour',
    avatar:
      'https://images.pexels.com/photos/17030108/pexels-photo-17030108.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote:
      'I have travelled with many agencies — none felt this personal. From Shangrila to the Deosai Plains, every moment felt hand-picked just for us.',
    rating: 5,
  },
  {
    name: 'The Okafor Family',
    trip: 'Swat & Kalam Getaway',
    avatar:
      'https://images.pexels.com/photos/33820660/pexels-photo-33820660.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote:
      'Travelling with kids is stressful, but Wikki made it effortless. The kids still talk about the Kandol Lake trek every single week.',
    rating: 5,
  },
];

export const features: Feature[] = [
  {
    icon: Compass,
    title: 'Handcrafted Itineraries',
    description:
      'Every journey through the north is designed from scratch around your pace, interests, and budget — never copy-paste templates.',
  },
  {
    icon: ShieldCheck,
    title: 'Worry-Free Travel',
    description:
      '24/7 on-trip support, vetted local partners, and full insurance options so you are never on your own in the mountains.',
  },
  {
    icon: Sparkles,
    title: 'Exclusive Access',
    description:
      'Off-the-beaten-path villages, private guides, and hidden valleys most travellers never get to see.',
  },
  {
    icon: Users,
    title: 'Local Expert Guides',
    description:
      'Travel with passionate locals who turn a place into a story you will tell for years.',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/8835247/pexels-photo-8835247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Passu Cones rising above the Karakoram Highway',
    span: true,
  },
  {
    src: 'https://images.pexels.com/photos/35302565/pexels-photo-35302565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Turquoise waters of Attabad Lake in Hunza',
  },
  {
    src: 'https://images.pexels.com/photos/29890322/pexels-photo-29890322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Snowy peaks at Khunjerab Pass on the China-Pakistan border',
  },
  {
    src: 'https://images.pexels.com/photos/19442076/pexels-photo-19442076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Autumn reflections at Lower Kachura Lake, Skardu',
  },
  {
    src: 'https://images.pexels.com/photos/27948633/pexels-photo-27948633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Lush green fields under dramatic clouds in Skardu',
    span: true,
  },
  {
    src: 'https://images.pexels.com/photos/13087894/pexels-photo-13087894.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Reflective alpine lake in Kaghan Valley',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'When is the best time to visit the northern areas?',
    answer:
      'May to October is the prime season — roads are open, valleys are green, and the weather is pleasant. For Skardu and Deosai, June to September is ideal as the passes are fully clear. Spring (March–April) is beautiful in Swat for blossoms, while autumn (October) paints Hunza in gold and crimson.',
  },
  {
    question: 'How fit do I need to be?',
    answer:
      'Most of our tours are rated Easy to Moderate and are suitable for anyone in normal health. The Kandol Lake and Fairy Meadows treks involve 1–2 hours of walking on uneven ground. We can adjust the pace or arrange horses/jeeps for anyone who prefers not to walk.',
  },
  {
    question: 'What is included in the tour price?',
    answer:
      'Every package includes all ground transport, accommodation, daily breakfast, most dinners, an expert local guide, and all entry permits and tickets. Flights to/from Islamabad and travel insurance are not included — we can help arrange both.',
  },
  {
    question: 'How do we get to the northern areas?',
    answer:
      'Most trips start from Islamabad. You can fly to Gilgit or Skardu (weather permitting, about 1 hour) or drive the Karakoram Highway (12–18 hours with stops). We arrange whichever option suits your schedule and budget.',
  },
  {
    question: 'What should I pack?',
    answer:
      'Layers are key — even in summer, nights in the mountains can drop near freezing. Bring a warm jacket, sturdy walking shoes, sunscreen, sunglasses, a hat, and a refillable water bottle. We send a full packing list tailored to your specific trip after booking.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Free cancellation up to 14 days before departure for a full refund. Within 14 days, we retain 50% to cover non-refundable hotel and transport bookings. We strongly recommend travel insurance to cover last-minute medical emergencies.',
  },
];

export const team: TeamMember[] = [
  {
    name: 'Wikki Khan',
    role: 'Founder & Lead Guide',
    avatar:
      'https://images.pexels.com/photos/12374181/pexels-photo-12374181.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    bio: 'Born in Gilgit, Wikki has guided across the Karakoram for 15 years. He knows every shortcut, every teahouse, and every story the mountains hold.',
  },
  {
    name: 'Sana Raza',
    role: 'Trip Designer',
    avatar:
      'https://images.pexels.com/photos/15074990/pexels-photo-15074990.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    bio: 'Sana crafts every itinerary by hand, balancing adventure with comfort so your trip feels effortless from the first email to the last sunset.',
  },
  {
    name: 'Imran Ali',
    role: 'Senior Mountain Guide',
    avatar:
      'https://images.pexels.com/photos/12734613/pexels-photo-12734613.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    bio: 'A certified mountaineer who has summited five 6,000m peaks, Imran keeps every group safe, inspired, and well-fed on the trail.',
  },
];
