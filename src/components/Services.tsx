// // app/components/Services.tsx
import Image from 'next/image'
import Link from 'next/link'

type ServiceItems = {
  title: string,
  image: string,
  description: string
}

const services: ServiceItems[] = [
  {
    title: "Wedding Planning",
    image: "/assets/img/fantasy-event-center-piece.jpeg",
    description: "From the smallest details to the grandest moments, we craft unforgettable wedding experiences tailored to your love story. Let us bring your dream day to life with style, grace, and seamless coordination"
  },
  {
    title: "Corporate Event",
    image: "/assets/img/fantasy-event-decor-memorial.jpeg",
    description: "Professional. Memorable. Impactful. We curate corporate events that reflect your brand's values—whether it's a conference, product launch, or company gala. Elevate your business presence with seamless execution and sophisticated design."
  },
  {
    title: "Private Occasion",
    image: "/assets/img/fantasy-event-decor-9.jpeg",
    description: "Intimate moments deserve unforgettable settings. From birthdays to anniversaries and everything in between, we design private occasions that feel personal, elegant, and effortlessly special—crafted just for you and your loved ones."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Crafting Unforgettable <span className="text-primary-600">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering world-class event management with precision, passion, and a touch of magic—because your moments deserve nothing less
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2} // Prioritize above-the-fold images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <span className="text-primary-600 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <button 
                  className="w-full md:w-auto px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] flex items-center justify-center"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Get Started
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              {/* Hover effect accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to create something extraordinary?
          </h3>
          <Link 
           href="https://wa.me/2348164433875?text=What%20is%20your%20rates?"
            target="_blank"
          className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg">
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}