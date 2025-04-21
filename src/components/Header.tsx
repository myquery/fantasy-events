"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }


  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      const header = document.getElementById('header');
      const headerHeight = header?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL
      window.history.pushState({}, '', `#${id}`);
    }
  };

  return (
    <header 
      id="header"
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/assets/img/fantasy.jpeg"
              alt="EventPlanner"
              width={170}
              height={80}
              className="h-30 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="#hero" 
              className={`hover:text-primary font-medium transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={(e) => handleScrollTo(e, 'hero')}
              scroll={false}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className={`hover:text-primary font-medium transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={(e) => handleScrollTo(e, 'services')}
              scroll={false}
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className={`hover:text-primary font-medium transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={(e) => handleScrollTo(e, 'about')}
              scroll={false}
            >
              About
            </Link>
            <Link 
              href="#gallery" 
              className={`hover:text-primary font-medium transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={(e) => handleScrollTo(e, 'gallery')}
              scroll={false}
            >
              Gallery
            </Link>
            <Link 
              href="#contact" 
              className={`hover:text-primary font-medium transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={(e) => handleScrollTo(e, 'contact')}
              scroll={false}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            <Link 
              href="#hero" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={(e) => handleScrollTo(e, 'hero')}
              scroll={false}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={(e) => handleScrollTo(e, 'services')}
              scroll={false}
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={(e) => handleScrollTo(e, 'about')}
              scroll={false}
            >
              About
            </Link>
            <Link 
              href="#gallery" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={(e) => handleScrollTo(e, 'gallery')}
              scroll={false}
            >
              Gallery
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={(e) => handleScrollTo(e, 'contact')}
              scroll={false}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}