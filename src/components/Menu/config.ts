import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.mozartfinance.io',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.mozartfinance.io/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Merkelizer',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: '#',
      },
      {
        label: 'Docs',
        href: '#',
      },
      {
        label: 'Blog',
        href: '#',
      },
    ],
  },
  {
    label: 'Audit by IB',
    icon: 'TicketIcon',
    href: 'https://github.com/ImmuneBytes/Smart-Contract-Audit-Reports/blob/main/Mozart%20Finance/Mozart%20Finance%20(PIANO)%20-%20Final%20Audit%20Report.pdf',
  },
]

export default config
