"use client"

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  // Track cursor position for interactive effects
  const handleMouseMove = (e: MouseEvent) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect()
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'gallery', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    handleScroll() // Initialize
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      window.history.pushState({}, '', `#${id}`)
    }
  }

  // Dynamic gradient based on cursor position
  const getGradientStyle = () => {
    if (!headerRef.current) return {}
    const { width, height } = headerRef.current.getBoundingClientRect()
    const x = (cursorPos.x / width) * 100
    const y = (cursorPos.y / height) * 100
    
    return {
      background: `
        radial-gradient(
          circle at ${x}% ${y}%,
          rgba(255, 255, 255, ${scrolled ? 0.95 : 0.5}),
          rgba(255, 255, 255, ${scrolled ? 0.85 : 0.5})
        )
      `,
      // backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: `1px solid rgba(255, 255, 255, ${scrolled ? 0.2 : 0.1})`
    }
  }

  // Floating orb animation
  const Orb = ({ section }: { section: string }) => (
    <div className={`absolute -bottom-1 left-1/2 h-1 w-1 rounded-full bg-primary transition-all duration-500 transform -translate-x-1/2 ${
      activeSection === section ? 'w-6 opacity-100' : 'opacity-0'
    }`} />
  )

  return (
    <header 
      ref={headerRef}
      id="header"
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      style={getGradientStyle()}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          {/* Logo with morphing effect */}
          <Link 
            href="/" 
            className={`relative z-10 transition-all duration-700 ${
              scrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            <Image
              src="/assets/img/fantasy.jpeg"
              alt="EventPlanner"
              width={170}
              height={80}
              className={`h-auto transition-all duration-700 ${
                scrolled ? 'w-32' : 'w-40'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation - Right-aligned with Orbs */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'about', 'gallery', 'contact'].map((section) => (
              <div key={section} className="relative">
                <Link
                  href={`#${section}`}
                  onClick={(e) => handleScrollTo(e, section)}
                  className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 ${
                    activeSection === section 
                      ? 'text-primary scale-105 font-bold' 
                      : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-primary-200'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
                <Orb section={section} />
              </div>
            ))}

            {/* CTA Button with floating effect */}
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className={`ml-4 flex items-center justify-center z-10 px-6 py-2 rounded-full font-medium transition-all duration-500 ${
                scrolled 
                  ? 'bg-primary text-black shadow-lg hover:shadow-xl' 
                  : 'bg-white/90 text-black-900 shadow-md hover:bg-white'
              } hover:-translate-y-0.5`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button - Animated */}
          <button
            className="md:hidden z-10 relative w-8 h-8 focus:outline-none group"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <div className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45' : '-translate-y-2'
            }`} />
            <div className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <div className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45' : 'translate-y-2'
            }`} />
          </button>
        </div>

        {/* Mobile Menu - Fullscreen Morph */}
        <div 
          className={`md:hidden fixed inset-0 z-0 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
            mobileMenuOpen 
              ? 'pointer-events-auto opacity-100' 
              : 'pointer-events-none opacity-0'
          }`}
          style={{
            background: `radial-gradient(
              circle at ${cursorPos.x}px ${cursorPos.y}px,
              rgba(255,255,255,0.98),
              rgba(255,255,255,0.95)
            )`,
            clipPath: mobileMenuOpen 
              ? 'circle(150% at 100% 0)' 
              : 'circle(0% at 100% 0)'
          }}
        >
          <div className="container h-full mx-auto px-4 flex flex-col justify-center">
            <div className="space-y-8">
              {['hero', 'services', 'about', 'gallery', 'contact'].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => handleScrollTo(e, section)}
                  className={`block text-3xl font-bold transition-all duration-500 ${
                    activeSection === section 
                      ? 'text-primary translate-x-4' 
                      : 'text-gray-800 hover:text-gray-600'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-block px-8 py-3 bg-primary text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}