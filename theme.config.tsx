import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { CreditCard } from 'lucide-react'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <CreditCard style={{ height: '1.25rem', width: '1.25rem' }} />
      <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>OpenCard</span>
    </div>
  ),
  logoLink: 'https://opencard.ai',
  primaryHue: 0,
  primarySaturation: 0,
  project: {
    link: 'https://github.com/OpenCardAI/OpenCard',
  },
  docsRepositoryBase: 'https://github.com/OpenCardAI/OpenCard',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
