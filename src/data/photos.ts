// Real photos from Nepal. Unsplash and Pexels licenses allow free commercial
// use without attribution; credited here out of courtesy. Files are pre-cropped
// to the ratio they are shown at (hero background 3:2, call 4:5, shopfront 3:2, school and restaurant 3:4).
import shopkeeperWide from '../assets/photos/shopkeeper-wide.jpg';
import shopfront from '../assets/photos/shopfront.jpg';
import classroom from '../assets/photos/students-classroom.jpg';
import restaurant from '../assets/photos/restaurant-counter.jpg';
import kathmanduCall from '../assets/photos/kathmandu-call.jpg';

export const photos = {
  shopkeeperWide: {
    src: shopkeeperWide,
    credit: 'Jimmy Liu',
    source: 'https://unsplash.com/photos/agaYL7oTPxc',
    alt: { ne: 'पसलको काउन्टरमा बसेका पसले', en: 'A shopkeeper at the counter of his shop in Nepal' },
  },
  shopfront: {
    src: shopfront,
    credit: 'Jeevan Katel',
    source: 'https://unsplash.com/photos/0x153_N1c2I',
    alt: { ne: 'नेपालको एक सानो पसल, अगाडि कुकुर सुतिरहेको', en: 'A small shop in Nepal with a dog resting outside' },
  },
  classroom: {
    src: classroom,
    credit: 'Sushanta Rokka',
    source: 'https://unsplash.com/photos/XrWlSSW4DNM',
    alt: { ne: 'कक्षाकोठामा विद्यार्थीहरू', en: 'Students in a classroom in Nepal' },
  },
  restaurant: {
    src: restaurant,
    credit: 'Dipesh Manandhar',
    source: 'https://unsplash.com/photos/okFy0lUhqKA',
    alt: { ne: 'मेनु बोर्ड भएको रेस्टुरेन्टको काउन्टर', en: 'A restaurant counter with a menu board' },
  },
  kathmanduCall: {
    src: kathmanduCall,
    credit: 'Gaurav Ranjitkar (Pexels)',
    source: 'https://www.pexels.com/photo/low-angle-shot-of-a-man-crossing-a-road-8876542/',
    alt: { ne: 'काठमाडौंको न्यूरोडमा पसलहरूअगाडि फोनमा कुरा गर्दै हिँडेका मानिस', en: 'A man on a phone call crossing New Road in Kathmandu, in front of shops' },
  },

} as const;
