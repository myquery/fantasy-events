// app/components/About.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="relative py-16 md:py-24 bg-gray-900 text-white overflow-hidden">
            {/* Background pattern or gradient can be added here */}

            <div className="mx-auto max-w-7xl px-0">
                <div className="flex flex-col lg:flex-row">
                    {/* Image Column - Flush to edges */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                            <Image
                                src="/assets/img/fantasy-event-decor-10.jpeg"
                                alt="Our team planning an event"
                                fill
                                className="object-cover"
                                quality={90}
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                    {/* Content Column - With separation */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 py-12 px-6 sm:px-12 lg:pl-16 lg:pr-8 xl:pl-24"
                    >
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                We Plan & Design Events That Spark Emotion and Leave Lasting Impressions.
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed mb-8">
                                From intimate gatherings to grand celebrations, our team turns your vision into reality with creativity, precision, and flair. Every detail is thoughtfully curated to create unforgettable moments that truly reflect your style and story.
                            </p>

                            {/* Optional CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                            >
                                Learn More About Us
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}