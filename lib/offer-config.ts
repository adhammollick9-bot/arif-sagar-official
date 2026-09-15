export const offer = {
  masterclass: { price: '₹4,999', checkoutUrl: null as string | null },
  products: [
    { id: 'vocal-preset-pack', name: 'Vocal Preset Pack', subtitle: 'For Naat & Soft Vocals', originalPrice: '₹2,599', price: '₹1,999', savings: '₹600', image: '/images/vocal-preset-pack.webp', checkoutUrl: null as string | null, benefits: ['Studio One .preset format', 'Clean EQ + gentle compression', 'Spiritual reverb chain', 'No third-party plugins required'] },
    { id: 'midi-chord-bundle', name: 'MIDI Chord Bundle', subtitle: 'Drag & Drop Ready', originalPrice: '₹5,499', price: '₹2,899', savings: '₹2,600', image: '/images/midi-chord-bundle.webp', checkoutUrl: null as string | null, benefits: ['Major & minor chords', 'Root position + inversions', 'Naat, soft vocal & ambient progressions', 'Works with any DAW'] },
  ],
} as const
