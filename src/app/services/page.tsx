import { 
  TruckIcon,
  CubeIcon,
  CogIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  DocumentMagnifyingGlassIcon,
  PlayIcon,
  ClipboardDocumentCheckIcon,
  StarIcon,
  BoltIcon,
  MapPinIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ScaleIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const mainServices = [
  {
    icon: CubeIcon,
    title: 'Professional Sand Supply',
    description: 'High-quality sand supply for construction and industrial projects',
    features: [
      'Premium quality construction sand',
      'River sand and manufactured sand',
      'Bulk delivery services',
      'Quality testing and certification',
      'Competitive pricing',
      'Reliable delivery schedules'
    ],
    industries: ['Construction', 'Infrastructure', 'Concrete Production', 'Road Building']
  },
  {
    icon: CogIcon,
    title: 'Professional Material Supply',
    description: 'Comprehensive supply of industrial materials and raw materials',
    features: [
      'Coal supply for power plants',
      'Limestone for cement industry',
      'Gypsum for construction',
      'Iron ore for steel production',
      'Aggregate materials',
      'Custom material sourcing'
    ],
    industries: ['Steel Industry', 'Cement Plants', 'Power Generation', 'Manufacturing']
  },
  {
    icon: TruckIcon,
    title: 'Professional Transport Solutions',
    description: 'Efficient logistics and transport services for all material types',
    features: [
      'Heavy-duty transport vehicles',
      'GPS tracking and monitoring',
      'Dedicated fleet management',
      'Load optimization',
      'Route planning',
      'Real-time delivery updates'
    ],
    industries: ['Logistics', 'Supply Chain', 'Distribution', 'Import/Export']
  },
]

const additionalServices = [
  {
    icon: ShieldCheckIcon,
    title: 'Quality Assurance',
    description: 'Rigorous quality control and testing for all materials',
    features: ['ISO certified testing', 'Material certification', 'Quality reports'],
    subIcon: BeakerIcon
  },
  {
    icon: ClockIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and emergency services',
    features: ['Emergency hotline', 'Live chat support', 'Technical assistance'],
    subIcon: PhoneIcon
  },
  {
    icon: GlobeAltIcon,
    title: 'Wide Coverage',
    description: 'Extensive delivery network across multiple states in India',
    features: ['Multi-state presence', 'GPS tracking', 'Real-time updates'],
    subIcon: MapPinIcon
  },
  {
    icon: ChartBarIcon,
    title: 'Performance Analytics',
    description: 'Advanced tracking and reporting for delivery optimization',
    features: ['Delivery metrics', 'Performance reports', 'Cost analysis'],
    subIcon: BoltIcon
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Equipment Maintenance',
    description: 'Professional fleet maintenance and vehicle optimization',
    features: ['Preventive maintenance', 'Fleet optimization', 'Safety compliance'],
    subIcon: CogIcon
  },
  {
    icon: ScaleIcon,
    title: 'Load Optimization',
    description: 'Smart load planning for maximum efficiency and cost savings',
    features: ['Weight optimization', 'Route planning', 'Fuel efficiency'],
    subIcon: TruckIcon
  },
]

const processSteps = [
  {
    step: '01',
    icon: ChatBubbleLeftRightIcon,
    title: 'Consultation',
    description: 'Understanding your specific material and transport requirements'
  },
  {
    step: '02',
    icon: DocumentMagnifyingGlassIcon,
    title: 'Planning',
    description: 'Developing customized logistics solutions for your needs'
  },
  {
    step: '03',
    icon: ClipboardDocumentCheckIcon,
    title: 'Quality Check',
    description: 'Ensuring quality standards and material specifications before delivery'
  },
  {
    step: '04',
    icon: PlayIcon,
    title: 'Execution',
    description: 'Efficient delivery with real-time tracking and updates'
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden">
        {/* Floating icons animation */}
        <div className="absolute inset-0 overflow-hidden">
          <CubeIcon className="absolute top-20 left-10 h-8 w-8 text-red-200 animate-bounce opacity-50" style={{animationDelay: '0s'}} />
          <TruckIcon className="absolute top-32 right-20 h-10 w-10 text-red-200 animate-bounce opacity-50" style={{animationDelay: '1s'}} />
          <CogIcon className="absolute bottom-20 left-20 h-6 w-6 text-red-200 animate-bounce opacity-50" style={{animationDelay: '2s'}} />
          <ShieldCheckIcon className="absolute bottom-32 right-10 h-8 w-8 text-red-200 animate-bounce opacity-50" style={{animationDelay: '0.5s'}} />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="mb-6">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="animate-pulse">
                <CubeIcon className="h-16 w-16 text-red-600 animate-bounce" />
              </div>
              <div className="animate-pulse" style={{animationDelay: '0.5s'}}>
                <CogIcon className="h-16 w-16 text-red-600 animate-bounce" />
              </div>
              <div className="animate-pulse" style={{animationDelay: '1s'}}>
                <TruckIcon className="h-16 w-16 text-red-600 animate-bounce" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text animate-pulse">Services</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive transport and material supply solutions designed to meet the diverse 
            needs of industrial businesses, construction companies, and ports across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="glass-button bg-red-600 hover:bg-red-700 text-white inline-flex items-center group"
            >
              <PhoneIcon className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Get Custom Quote
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#process" 
              className="glass-button bg-white/20 text-red-600 border-red-200 hover:bg-white/30 inline-flex items-center group"
            >
              <EyeIcon className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              View Our Process
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reliable and efficient solutions tailored to your business requirements
            </p>
          </div>
          
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6 group">
                    <div className="relative mr-4">
                      <service.icon className="h-12 w-12 text-red-600 animate-bounce-gentle hover:animate-pulse transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <div className="absolute -inset-2 bg-red-100 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">{service.title}</h3>
                  </div>
                  <p className="text-xl text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 group hover:bg-red-50 p-2 rounded-lg transition-all duration-200"
                             style={{animation: `fadeInUp 0.5s ease-out ${featureIndex * 0.1}s both`}}>
                          <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 group-hover:animate-bounce group-hover:text-green-600" />
                          <span className="text-gray-700 group-hover:text-gray-900 group-hover:font-medium transition-all duration-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Industries Served:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, industryIndex) => (
                        <span key={industryIndex} 
                              className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium hover:bg-red-200 hover:scale-105 transition-all duration-200 cursor-pointer group inline-flex items-center"
                              style={{animation: `fadeInUp 0.3s ease-out ${industryIndex * 0.1}s both`}}>
                          <StarIcon className="h-3 w-3 mr-1 group-hover:animate-spin" />
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="glass-card p-8 h-full hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <service.icon className="h-24 w-24 text-red-600 mx-auto mb-6 animate-pulse hover:animate-bounce-gentle transition-all duration-500 hover:scale-110" />
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        {service.title}
                      </h4>
                      <p className="text-gray-600">
                        Trusted by leading companies across India for reliable and efficient service delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Value-added services that set us apart from the competition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} 
                   className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
                   style={{animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`}}>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Main icon with animation */}
                <div className="relative mb-6">
                  <service.icon className="h-16 w-16 text-red-600 mx-auto group-hover:animate-bounce-gentle transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <service.subIcon className="h-6 w-6 text-red-400 absolute -top-2 -right-2 group-hover:animate-ping" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features list */}
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach ensuring efficient delivery and customer satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center group"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="glass-card p-6 mb-6 hover:shadow-2xl transition-all duration-500 hover:scale-110 group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon container with enhanced animations */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-6 w-6 mx-auto mb-1 group-hover:animate-pulse" />
                      <div className="text-sm font-bold group-hover:animate-bounce">{step.step}</div>
                    </div>
                    
                    {/* Animated ring effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-red-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
                  </div>
                  
                  {/* Content with stagger animations */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 transform group-hover:text-red-700 transition-all duration-300 group-hover:scale-105">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 transform group-hover:text-gray-800 transition-all duration-300">
                    {step.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
                
                {/* Connecting line animation (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gray-300 transform translate-x-4">
                    <div className="w-0 h-full bg-red-500 group-hover:w-full transition-all duration-1000 delay-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-red-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your transport and material supply requirements. 
            Our team is ready to provide customized solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="glass-button bg-white text-red-600 hover:bg-gray-100 font-semibold"
            >
              Request Quote
            </Link>
            <Link 
              href="/about" 
              className="glass-button bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}