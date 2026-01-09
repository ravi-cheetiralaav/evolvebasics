'use client'

import { useState } from 'react'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  TruckIcon,
  UserIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: ['+91 88869 44456', 'Available 24/7'],
    description: 'Call us for immediate assistance'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['info@evolvebasics.in', 'sales@evolvebasics.in'],
    description: 'Send us your requirements'
  },
  {
    icon: MapPinIcon,
    title: 'Location',
    details: ['Your Business Address', 'City, State, PIN'],
    description: 'Visit our office'
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Emergency: 24/7 Available'],
    description: 'We are here when you need us'
  },
]

const serviceTypes = [
  'Sand Supply',
  'Material Supply - Coal',
  'Material Supply - Limestone',
  'Material Supply - Gypsum',
  'Material Supply - Iron Ore',
  'Transport Services',
  'Logistics Solutions',
  'Other'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission - replace with actual form handling
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        message: '',
        urgency: 'normal'
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-red-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for reliable transport solutions and material supply services. 
            We are here to help you with all your logistics needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-200">
                <info.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your message! We will get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="+91 88869 44456"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white/80 backdrop-blur-sm resize-none"
                    placeholder="Please describe your requirements, including quantity, delivery location, and timeline..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-button bg-red-600 hover:bg-red-700 text-white font-semibold py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <TruckIcon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Quick Response Guarantee
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We understand the urgency of your business needs. Our team is committed to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Response within 2 hours during business hours</li>
                  <li>• Emergency support available 24/7</li>
                  <li>• Detailed quotes within 24 hours</li>
                  <li>• Flexible scheduling for urgent requirements</li>
                </ul>
              </div>
              
              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <UserIcon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    What to Include in Your Message
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Type and quantity of materials needed</li>
                  <li>• Delivery location and timeline</li>
                  <li>• Special handling requirements</li>
                  <li>• Budget considerations</li>
                  <li>• Ongoing partnership opportunities</li>
                </ul>
              </div>
              
              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <BuildingOfficeIcon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Visit Our Office
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Schedule a meeting with our team to discuss your requirements in detail.
                </p>
                <div className="text-gray-700">
                  <p className="font-medium">Business Address:</p>
                  <p>Your Complete Business Address</p>
                  <p>City, State, PIN Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
