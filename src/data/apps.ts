import type { App } from '../types/app'

export const apps: App[] = [
  {
    id: 'hisab-khata',
    number: '01',
    tag: 'FINANCE',
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
    number: '02',
    tag: 'LEDGER',
    category: 'Shop Management',
    name: 'Digital Khata',
    description:
      'Flutter-powered mobile application for shop owners in Nepal to manage customer dues and purchase histories.',
    accent: 'orange',
    icon: 'ledger',
    status: 'coming_soon',
  },
  {
    id: 'invisible-vpn',
    number: '03',
    tag: 'SECURE',
    category: 'Privacy',
    name: 'Invisible VPN *',
    description:
      'Invisible VPN - a secure way to surf online with privacy-first connectivity and a clean mobile experience. *Client Project',
    accent: 'violet',
    icon: 'shield',
    status: 'coming_soon',
  },
  {
    id: 'more-to-come',
    number: '04',
    tag: 'MORE',
    category: 'More to Come',
    name: 'More to Come',
    description:
      'More to come...',
    accent: 'rose',
    icon: 'wallet',
    status: 'coming_soon',
  },
]
