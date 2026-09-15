import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Islamic Naat Sound Design Masterclass | SMN Studio', description: 'Learn the complete Naat sound design workflow with Arif Sagar — from raw vocal to polished, professional production.', keywords: ['Naat sound design', 'Naat mixing', 'Studio One', 'Arif Sagar', 'SMN Studio'] }
export const viewport: Viewport = { themeColor: '#07111c', width: 'device-width', initialScale: 1, userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
