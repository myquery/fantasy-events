'use client'

import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'





const heroSlides = [
  {
    id: 1,
    title: "Dream Weddings",
    subtitle: "Creating unforgettable moments for your special day",
    image: "/assets/hero/fantasy-event-decor-6.jpeg",
    cta: "Plan Your Wedding"
  },
  {
    id: 2,
    title: "Unforgetable wedding Receptions",
    subtitle: "Professional events that make an impact",
    image: "/assets/hero/lavineda-hall-event-26-04-25.png",
    cta: "Organize Your Event"
  },
  {
    id: 3,
    title: "Birthday Celebrations",
    subtitle: "Turning milestones into magical memories",
    image: "/assets/hero/fantasy-event-birthday-shoot.jpeg",
    cta: "Celebrate With Us"
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const handleNext = () => {
    controls.start('exit')
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      controls.start('enter')
    }, 500)
  }

  const handlePrev = () => {
    controls.start('exit')
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      controls.start('enter')
    }, 500)
  }

  const variants = {
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  }

  return (
    <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
      <AnimatePresence mode='wait'>
        <motion.div
          key={heroSlides[currentSlide].id}
          initial="exit"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white max-w-2xl mb-8"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-colors duration-300"
            >
              {heroSlides[currentSlide].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              controls.start('exit')
              setTimeout(() => {
                setCurrentSlide(index)
                controls.start('enter')
              }, 500)
            }}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
        
    </section>
  )
}