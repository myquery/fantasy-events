// app/components/Services.tsx
import Image from 'next/image'


type ServiceItems = {
  title: string,
  image: string,
  description: string
}

const services : ServiceItems[] = [
  {
    title: "Wedding Planning",
    image: "/assets/img/fantasy-event-center-piece.jpeg",
    description: "From the smallest details to the grandest moments, we craft unforgettable wedding experiences tailored to your love story. Let us bring your dream day to life with style, grace, and seamless coordination"
  },
  {
    title: "Corporate Event",
    image: "/assets/img/fantasy-event-decor-memorial.jpeg",
    description: "Professional. Memorable. Impactful. We curate corporate events that reflect your brand’s values—whether it's a conference, product launch, or company gala. Elevate your business presence with seamless execution and sophisticated design."
  },
  {
    title: "Private Occasion",
    image: "/assets/img/fantasy-event-decor-9.jpeg",
    description: "Intimate moments deserve unforgettable settings. From birthdays to anniversaries and everything in between, we design private occasions that feel personal, elegant, and effortlessly special—crafted just for you and your loved ones."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Delivering world-class event management with precision, passion, and a touch of magic—because your moments deserve nothing less
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {service.description}
                </p>
                <button className="mt-4 inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}