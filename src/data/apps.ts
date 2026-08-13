import type { App } from '../types/app'

export const apps: App[] = [
  {
    id: 'invisible-vpn',
    number: '01',
    tag: 'Privacy',
    category: 'VPN',
    name: 'Invisible VPN',
    description:
      'Secure way to surf online. One-tap WireGuard VPN, server health indicators, speed tests, and privacy-first browsing on mobile and Chrome.',
    accent: 'violet',
    icon: 'shield',
    status: 'live',
    iconImage: '/apps/invisible-vpn.png',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.digitalpathshala.invisiblevpn',
    chromeStoreUrl:
      'https://chromewebstore.google.com/detail/invisible-vpn-secure-way/iifoamnnpnmiknnknoanmeghomfencjg',
    iosComingSoon: true,
  },
  {
    id: 'pulse',
    number: '02',
    tag: 'Voice',
    category: 'Time Capsule',
    name: 'P.U.L.S.E',
    description:
      'A local-first voice time-capsule app. Record messages, lock them until a future date, and listen when they unlock.',
    accent: 'rose',
    icon: 'pulse',
    status: 'closed_testing',
    iconImage: '/apps/pulse.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.abhishek.app.pulse',
    closedTesting: true,
  },
  {
    id: 'urban-homes',
    number: '03',
    tag: 'Real Estate',
    category: 'Property',
    name: 'Urban Homes',
    description:
      'Elevate your standards. Browse and discover urban properties with a clean, practical experience built for everyday home seekers.',
    accent: 'amber',
    icon: 'home',
    status: 'live',
    iconImage: '/apps/urban-homes.png',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.digitalpathshala.urbanhomes',
    appStoreUrl: 'https://apps.apple.com/us/app/urban-homes-np/id6796251918',
  },
  {
    id: 'sanskar-vastu-compass',
    number: '04',
    tag: 'Vastu',
    category: 'Compass',
    name: 'Sanskar Vastu Compass',
    description:
      'A professional direction and planning companion for architects, Vastu consultants, students, and anyone who works with orientation, alignment, and site layout in real-world conditions.',
    accent: 'rose',
    icon: 'compass',
    status: 'live',
    iconImage: '/apps/sanskar-vastu-compass.png',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.bobthedeveloper.mobileApp',
    websiteUrl: 'https://sanskaracademy.net/',
  },
  {
    id: 'hisab-khata',
    number: '05',
    tag: 'Finance',
    category: 'Business',
    name: 'Hisab Khata',
    description:
      'A modern digital credit and transaction management system designed for small businesses in Nepal.',
    accent: 'emerald',
    icon: 'finance',
    status: 'coming_soon',
  },
  {
    id: 'digital-khata',
    number: '06',
    tag: 'Ledger',
    category: 'Shop Management',
    name: 'Digital Khata',
    description:
      'Flutter-powered mobile application for shop owners in Nepal to manage customer dues and purchase histories.',
    accent: 'orange',
    icon: 'ledger',
    status: 'coming_soon',
  },
]
