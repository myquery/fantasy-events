// app/components/Gallery.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'



// Define type for gallery items
type GalleryItem = {
  id: number
  src: string
  alt: string
  description: string
  size: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/assets/img/gallery/fantasy-event-decor-11.jpeg',
    alt: 'Traditional Decor',
    description: 'Elegant traditional wedding setup',
    size: 'md:col-span-3 md:row-span-4' // Tall rectangle (3x4)
  },
  {
    id: 2,
    src: '/assets/img/gallery/fantasy-event-decor-8.jpeg',
    alt: 'Grand Setup',
    description: 'Luxurious reception decor',
    size: 'md:col-span-6 md:row-span-4' // Large square (6x4)
  },
  {
    id: 3,
    src: '/assets/img/gallery/fantasy-event-decor-traditional.jpeg',
    alt: 'Bridal Entrance',
    description: 'Stunning bridal entrance',
    size: 'md:col-span-3 md:row-span-2' // Regular rectangle (3x2)
  },
  {
    id: 4,
    src: '/assets/img/gallery/fantasy-event-photoshoot.jpeg',
    alt: 'Couple Shoot',
    description: 'Romantic couple moments',
    size: 'md:col-span-3 md:row-span-2' // Regular rectangle (3x2)
  },
  {
    id: 5,
    src: '/assets/img/gallery/fantasy-event-decor-7.jpeg',
    alt: 'Vendor Setup',
    description: 'Professional arrangements',
    size: 'md:col-span-6 md:row-span-2' // Wide rectangle (6x2)
  },
  {
    id: 6,
    src: '/assets/img/gallery/fantasy-event-decor-4.jpeg',
    alt: 'Guest Moments',
    description: 'Memorable experiences',
    size: 'md:col-span-3 md:row-span-2' // Regular rectangle (3x2)
  },
  {
    id: 7,
    src: '/assets/img/gallery/fantasy-event-photoshoot-1.jpeg',
    alt: 'Guest Moments',
    description: 'Memorable experiences',
    size: 'md:col-span-3 md:row-span-2' // Regular rectangle (3x2)
  },
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Calculate aspect ratios based on col-span/row-span
  const getAspectRatio = (size: string) => {
    const [cols, rows] = size.includes('md:col-span-') ? 
      [parseInt(size.split('md:col-span-')[1].split(' ')[0]), 
       parseInt(size.split('md:row-span-')[1].split(' ')[0])] : 
      [1, 1]
    return `aspect-[${cols}/${rows}]`
  }

  return (
    <section id="gallery" className="w-full">
      {/* Section Header */}
      <div className="text-center py-12 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600"
        >
          Some photos from Our Events
        </motion.p>
      </div>

      {/* 12-Column Grid Container */}
      <div className="w-full overflow-hidden px-0">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-0"> {/* 12-column grid */}
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${item.size} ${getAspectRatio(item.size)} relative`}
              style={{
                aspectRatio: getAspectRatioValue(item.size)
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => { setCurrentIndex(index); setLightboxOpen(true); }}
            >
              <GalleryItem item={item} />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryItems.map(item => ({
          src: item.src,
          alt: item.alt,
          description: item.description
        }))}
        index={currentIndex}
      />
    </section>
  )
}


function GalleryItem({ item }: { item: GalleryItem }) {
  return (
    <div className="relative w-full h-full overflow-hidden cursor-pointer group">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 z-10" />
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        priority={item.id <= 3} // Prioritize loading first few images
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <p className="text-sm md:text-base">{item.description}</p>
      </div>
    </div>
  )
}


// Helper function to calculate aspect ratio
function getAspectRatioValue(size: string): string {
  const [cols, rows] = size.includes('md:col-span-') ? 
    [parseInt(size.split('md:col-span-')[1].split(' ')[0]), 
     parseInt(size.split('md:row-span-')[1].split(' ')[0])] : 
    [1, 1]
  return `${cols}/${rows}`
}