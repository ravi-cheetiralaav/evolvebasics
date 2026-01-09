'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  TruckIcon, 
  BuildingOffice2Icon, 
  CogIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  PhotoIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline'
import { TruckIcon as TruckSolid } from '@heroicons/react/24/solid'

const services = [
  {
    icon: TruckIcon,
    title: 'Sand Supply',
    description: 'Quality sand supply to customers with reliable delivery and competitive pricing.',
  },
  {
    icon: CogIcon,
    title: 'Material Supply',
    description: 'Coal, limestone, gypsum, iron ore, and other industrial materials.',
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Transport Facility',
    description: 'Efficient logistics and transport solutions for all your material needs.',
  },
]

const features = [
  'Reliable Purchase Partner',
  'Efficient Transport Solutions',
  'Quality Material Supply',
  'Trusted Business Relationships',
  'Competitive Pricing',
  'Timely Delivery',
]

const testimonials = [
  {
    company: 'Stone Craft Developers Pvt Ltd',
    text: 'Evolve Basics has been our reliable partner for material supply. Their efficiency and quality service is exceptional.',
    rating: 5,
  },
  {
    company: 'Geetha Engineering Constructions',
    text: 'Outstanding transport solutions and timely delivery. Highly recommended for industrial material requirements.',
    rating: 5,
  },
  {
    company: 'Vaibhavi Projects',
    text: 'Professional service and competitive pricing. They understand our business needs perfectly.',
    rating: 5,
  },
]

const partners = [
  'Stone Craft Developers Pvt Ltd',
  'Trendset Projects LLP',
  'BuildQ',
  'Mark Creative & Digital Agency',
  'Siva Ram and Company',
  'Geetha Engineering Constructions Pvt Ltd',
  'Sri Yadadri Constructions',
  'Vaibhavi Projects',
  'Vaibhavi Infra Projects',
  'Navtej Infrastructure Pvt Ltd',
  'Rize Developers',
]

const galleryImages = [
  {
    src: "images/sand-supply.jpeg",
    alt: "Sand Supply Operations",
    title: "Premium Sand Supply",
    description: "High-quality sand delivery to construction sites"
  },
  {
    src: "images/material-transport.jpeg", 
    alt: "Material Transportation",
    title: "Material Transportation",
    description: "Efficient bulk material transport solutions"
  },
  {
    src: "images/logistics-hub.jpeg",
    alt: "Logistics Operations",
    title: "Logistics Hub",
    description: "State-of-the-art logistics and warehousing"
  },
  {
    src: "images/construction-site.jpeg",
    alt: "Construction Support",
    title: "Construction Support",
    description: "On-site material delivery and coordination"
  },
  {
    src: "images/port-operations.jpeg",
    alt: "Port Operations",
    title: "Port Operations",
    description: "Seamless port logistics and cargo handling"
  },
  {
    src: "images/image-main-2.jpeg",
    alt: "Fleet Management",
    title: "Fleet Management",
    description: "Modern fleet with GPS tracking systems"
  },
  {
    src: "images/image-3.jpeg",
    alt: "Quality Control",
    title: "Quality Assurance",
    description: "Rigorous quality control processes"
  },
  {
    src: "images/image-4.jpeg",
    alt: "Delivery Network",
    title: "Project Delivery",
    description: "Successful project completions across India"
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
      }, 4000) // Change slide every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 section-padding bg-gradient-to-br from-red-50 to-red-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="animate-fade-in">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <TruckSolid className="h-16 w-16 text-red-600 animate-bounce-gentle" />
                  <div className="absolute -right-2 top-4 w-8 h-1 bg-gradient-to-r from-red-500 to-transparent rounded animate-speed-lines"></div>
                  <div className="absolute -right-3 top-6 w-6 h-0.5 bg-gradient-to-r from-red-400 to-transparent rounded animate-speed-lines" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute -right-4 top-8 w-4 h-0.5 bg-gradient-to-r from-red-300 to-transparent rounded animate-speed-lines" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Efficient Transport Solutions for{' '}
                <span className="gradient-text">Everyone</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your reliable purchase partner for sand supply, material supply, and comprehensive transport solutions across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services" 
                  className="glass-button inline-flex items-center bg-red-600 hover:bg-red-700 text-white group transition-all duration-300 hover:animate-pulse-red"
                >
                  Our Services
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  href="/contact" 
                  className="glass-button inline-flex items-center bg-white text-red-600 border-red-200 hover:bg-gray-50 group transition-all duration-300"
                >
                  Get Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PowerPoint Gallery - Our Work in Action */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 animate-pulse-red">
              <PhotoIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Work in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive transport and supply operations across India
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Main Slideshow Container */}
            <div className="glass-card overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-[500px] lg:h-[600px]">
                {/* Slide Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={galleryImages[currentSlide].src}
                    alt={galleryImages[currentSlide].alt}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority={currentSlide === 0}
                  />
                  
                  {/* Slide Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                      {galleryImages[currentSlide].title}
                    </h3>
                    <p className="text-lg text-gray-200">
                      {galleryImages[currentSlide].description}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 glass-button p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-white group-hover:text-red-500 transition-colors" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 glass-button p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
                >
                  <ChevronRightIcon className="h-6 w-6 text-white group-hover:text-red-500 transition-colors" />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className="absolute top-4 right-4 glass-button p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
                >
                  {isPlaying ? (
                    <PauseIcon className="h-5 w-5 text-white group-hover:text-red-500 transition-colors" />
                  ) : (
                    <PlayIcon className="h-5 w-5 text-white group-hover:text-red-500 transition-colors" />
                  )}
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center items-center space-x-2 p-6 bg-white/10 backdrop-blur-sm">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-red-500 scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 mt-6">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative aspect-video overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentSlide 
                      ? 'ring-4 ring-red-500 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300 ease-linear"
                style={{ 
                  width: `${((currentSlide + 1) / galleryImages.length) * 100}%` 
                }}
              />
            </div>
          </div>

          {/* View More CTA */}
          <div className="text-center mt-8">
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 group"
            >
              View Our Services
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics and material supply solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  {index === 0 && (
                    <div className="relative">
                      <service.icon className="h-16 w-16 text-red-600 mx-auto group-hover:animate-truck-drive transition-all duration-300" />
                      <div className="absolute -right-1 top-3 w-4 h-0.5 bg-gradient-to-r from-red-400 to-transparent rounded opacity-0 group-hover:opacity-100 group-hover:animate-speed-lines transition-opacity duration-300"></div>
                      <div className="absolute -right-2 top-5 w-3 h-0.5 bg-gradient-to-r from-red-300 to-transparent rounded opacity-0 group-hover:opacity-100 group-hover:animate-speed-lines transition-opacity duration-300" style={{animationDelay: '0.1s'}}></div>
                    </div>
                  )}
                  {index === 1 && (
                    <service.icon className="h-16 w-16 text-red-600 mx-auto group-hover:animate-spin transition-all duration-700" />
                  )}
                  {index === 2 && (
                    <div className="relative">
                      <service.icon className="h-16 w-16 text-red-600 mx-auto group-hover:animate-bounce-gentle transition-all duration-300" />
                      <div className="absolute inset-0 rounded-full border-2 border-red-200 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-100/0 group-hover:from-red-50/30 group-hover:to-red-100/20 rounded-xl transition-all duration-500"></div>
                
                {/* Service-specific animated elements */}
                {index === 0 && (
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                      <div className="w-1 h-1 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-1 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
                
                {index === 2 && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-red-50/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 animate-pulse-red">
              <TruckIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">Evolve Basics?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              <span className="text-red-600 font-semibold">Reliable transport solutions with trust</span> — 
              We are committed to building lasting partnerships through excellence in logistics and material supply.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Key Benefits */}
            <div className="space-y-8">
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Purchase Partner</h3>
                    <p className="text-gray-600">Dependable service delivery with consistent quality standards and on-time performance you can count on.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <CogIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Transport Solutions</h3>
                    <p className="text-gray-600">Streamlined logistics operations ensuring optimal delivery times and cost-effective transport management.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <BuildingOffice2Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Material Supply</h3>
                    <p className="text-gray-600">Premium sand, coal, limestone, and construction materials sourced and delivered to specification.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Benefits */}
            <div className="space-y-8">
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <StarIcon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Business Relationships</h3>
                    <p className="text-gray-600">Building long-term partnerships with transparency, integrity, and customer-first approach in every interaction.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <TruckIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                    <p className="text-gray-600">Fair, transparent pricing structures with no hidden costs, providing exceptional value for your investment.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <CheckCircleIcon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Delivery</h3>
                    <p className="text-gray-600">Advanced logistics planning and real-time tracking ensuring your materials arrive exactly when needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="flex items-center justify-center mb-3">
                  <TruckIcon className="h-10 w-10 text-red-600 group-hover:animate-truck-drive" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center mb-3">
                  <StarIcon className="h-10 w-10 text-red-600 group-hover:animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center mb-3">
                  <BuildingOffice2Icon className="h-10 w-10 text-red-600 group-hover:animate-bounce-gentle" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center mb-3">
                  <CheckCircleIcon className="h-10 w-10 text-red-600 group-hover:animate-pulse-red" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our trusted partners say about us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-semibold text-red-600">
                  {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600">
              Building strong relationships with leading companies
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="group bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg p-4 text-center hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {/* Partner Logo Placeholder */}
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                    <BuildingOffice2Icon className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Partner Name */}
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                    {partner}
                  </h3>
                  
                  {/* Industry Badge */}
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full group-hover:bg-red-100 group-hover:text-red-700 transition-all duration-300">
                      {index < 3 ? 'Development' : index < 6 ? 'Construction' : index < 9 ? 'Infrastructure' : 'Projects'}
                    </span>
                  </div>
                  
                  {/* Hover Animation Elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-600/0 group-hover:from-red-500/5 group-hover:to-red-600/5 rounded-lg transition-all duration-500"></div>
                </div>
              ))}
            </div>
            
            {/* Bottom Stats */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="group">
                  <div className="text-2xl font-bold text-red-600 group-hover:animate-bounce-gentle">11+</div>
                  <div className="text-sm text-gray-600">Trusted Partners</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-red-600 group-hover:animate-bounce-gentle">5+</div>
                  <div className="text-sm text-gray-600">Years Partnership</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-red-600 group-hover:animate-bounce-gentle">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-red-600 group-hover:animate-bounce-gentle">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            
            {/* Partnership CTA */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Ready to join our network of trusted partners?</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 group"
              >
                Become a Partner
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-red-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get in touch today for reliable transport solutions and material supply services.
          </p>
          <Link 
            href="/contact" 
            className="glass-button bg-white text-red-600 hover:bg-gray-100 font-semibold"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}