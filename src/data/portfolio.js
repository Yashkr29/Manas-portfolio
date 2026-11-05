// ─────────────────────────────────────────────────────────────
//  Edit this file to update the whole site.
// ─────────────────────────────────────────────────────────────

export const contact = {
  email: 'Manaskr0261@gmail.com',
  // WhatsApp number in international format, digits only (country code + number).
  whatsapp: '917970569251',
  whatsappGreeting: "Hi Manas! I saw your portfolio and I'd like to talk about a design project.",
}

// TODO: replace each href with Manas's real profile URL. Remove any he doesn't use.
export const socials = [
  { icon: 'instagram', name: 'Instagram', href: 'https://instagram.com/' },
  { icon: 'facebook', name: 'Facebook', href: 'https://facebook.com/' },
  { icon: 'behance', name: 'Behance', href: 'https://behance.net/' },
  { icon: 'linkedin', name: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: 'x', name: 'X (Twitter)', href: 'https://x.com/' },
]

export const profile = {
  name: 'Manas Kumar',
  first: 'Manas',
  role: 'Graphic Designer',
  portrait: '/manas.png',
  aboutPortrait: '/manas-about.webp',
  intro:
    "I'm a passionate graphic designer with a knack for crafting visually stunning and engaging designs. I've collaborated with prominent jewellery and wallpaper brands, helping bring their visions to life through innovative design solutions.",
  bio: [
    "I'm a passionate graphic designer with a knack for crafting visually stunning and engaging designs. Over the years, I've had the privilege of collaborating with some prominent jewelry and wallpaper brands, where I helped bring their visions to life through innovative design solutions.",
    'From elegant branding for luxury jewelry to vibrant and captivating patterns for wallpapers, my work reflects creativity, precision, and a deep understanding of aesthetics. I thrive on transforming ideas into visuals that not only look good but also connect with audiences on a deeper level.',
  ],
  signoff: "Let's create something extraordinary together!",
  pillars: [
    {
      title: 'Passionate Designer',
      text: "I love to use my skills to bring stories to life, whether it's through branding, web design, or print materials.",
    },
    {
      title: 'Problem-solver',
      text: 'Great design is not just about aesthetics, but also about solving problems and meeting the needs of the user. I strive for designs that are both beautiful and functional.',
    },
  ],
  industries: ['Jewellery', 'Wallpaper', 'Food & Restaurants', 'Retail & E-commerce', 'Festive Campaigns', 'Sports'],
}

export const categories = ['All', 'Festive', 'Brand & Retail', 'Sports']

export const projects = [
  { id: 'dhanteras', title: 'Happy Dhanteras', client: 'Kalyan Jewellers', category: 'Festive', type: 'Social post', src: '/work/f4.jpg', ratio: 'square' },
  { id: 'durga-puja', title: 'Durga Puja', client: 'Festive campaign', category: 'Festive', type: 'Social post', src: '/work/f6.jpg', ratio: 'square' },
  { id: 'archels-flyer', title: 'Archels Jewellery', client: 'Archels Jewelry', category: 'Brand & Retail', type: 'Promotional flyer', src: '/work/f3.jpg', ratio: 'tall' },
  { id: 'janmashtami', title: 'Happy Janmashtami', client: 'Festive campaign', category: 'Festive', type: 'Social post', src: '/work/f1.jpg', ratio: 'square' },
  { id: 'marquez', title: 'Marc Marquez #93', client: 'Personal project', category: 'Sports', type: 'Sports poster', src: '/work/f8.jpg', ratio: 'square' },
  { id: 'food-menu', title: 'Delicious Food Menu', client: 'Restaurant', category: 'Brand & Retail', type: 'Menu poster', src: '/work/f2.jpg', ratio: 'tall' },
  { id: 'christmas-sale', title: 'Merry Christmas Sale', client: 'My Indian Things', category: 'Festive', type: 'Sale creative', src: '/work/f7.jpg', ratio: 'square' },
]

export const printWork = [
  {
    id: 'flyers',
    title: 'Flyers',
    sample: 'Christmas Fair 2024 — Archels, Muskan Handbags & Libas Boutique',
    text: 'Event flyers that pack dates, venue, vendors and a call to action into one festive, readable page.',
    src: '/work/flyers.jpg',
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    sample: 'Archels Jewels — front & back',
    text: 'A line-art logo, soft watercolour and a QR code to Instagram: a card that feels like the brand.',
    src: '/work/cards.jpg',
  },
  {
    id: 'posters',
    title: 'Posters',
    sample: 'UDR Jewellery Exhibition at Bun Tea Cafe',
    text: 'Exhibition posters with hexagon photo frames, an editorial serif and a clear time-and-place footer.',
    src: '/work/posters.jpg',
  },
]

export const services = [
  {
    title: 'Brand Identity',
    text: 'Unique logos, colour palettes and typography that reflect your values and speak to your audience.',
  },
  {
    title: 'Brochures & Flyers',
    text: 'Impactful brochures and flyers that communicate your message and engage your target audience.',
  },
  {
    title: 'Posters & Signage',
    text: "Visually stunning posters and signage that grab attention and convey your brand's personality.",
  },
  {
    title: 'Packaging Design',
    text: 'Creative, functional packaging that enhances product appeal and stands out on the shelves.',
  },
  {
    title: 'Festive & Social Creatives',
    text: 'Festival greetings, sale campaigns and social posts that keep your brand memorable all year round.',
  },
]

export const whyMe = [
  { title: 'Passionate and Driven', text: 'I approach every project with enthusiasm and a commitment to excellence.' },
  { title: 'Collaborative and Open', text: 'I value open communication and work closely with clients to achieve their vision.' },
  { title: 'Adaptable and Innovative', text: 'I stay up-to-date with the latest trends and technologies to deliver fresh, innovative solutions.' },
]

export const results = [
  {
    title: 'Building Brand Identity',
    text: 'I work with clients to develop unique logos, colour palettes, and typography that reflect their values and target audience.',
  },
  {
    title: 'Creating Memorable Experiences',
    text: 'My goal is to create brands that resonate with customers and leave a lasting impression in a competitive market.',
  },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const whatsappLink = (text = contact.whatsappGreeting) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`

export const mailLink = (subject = 'Design project enquiry', body = '') =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
