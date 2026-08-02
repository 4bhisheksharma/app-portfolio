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
  },
  {
    id: 'hisab-khata',
    number: '04',
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
    number: '05',
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
