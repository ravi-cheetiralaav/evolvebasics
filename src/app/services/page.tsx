import { 
  TruckIcon,
  CubeIcon,
  CogIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const mainServices = [
  {
    icon: CubeIcon,
    title: 'Sand Supply',
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
    title: 'Material Supply',
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
    title: 'Transport Solutions',
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
    description: 'Rigorous quality control and testing for all materials'
  },
  {
    icon: ClockIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and emergency services'
  },
  {
    icon: GlobeAltIcon,
    title: 'Wide Coverage',
    description: 'Extensive delivery network across multiple states in India'
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Understanding your specific material and transport requirements'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Developing customized logistics solutions for your needs'
  },
  {
    step: '03',
    title: 'Execution',
    description: 'Efficient delivery with real-time tracking and updates'
  },
  {
    step: '04',
    title: 'Quality Check',
    description: 'Ensuring quality standards and customer satisfaction'
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-red-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive transport and material supply solutions designed to meet the diverse 
            needs of industrial businesses, construction companies, and ports across India.
          </p>
          <Link 
            href="/contact" 
            className="glass-button bg-red-600 hover:bg-red-700 text-white inline-flex items-center"
          >
            Get Custom Quote
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
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
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-red-600 mr-4" />
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-xl text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Industries Served:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, industryIndex) => (
                        <span key={industryIndex} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="glass-card p-8 h-full">
                    <div className="text-center">
                      <service.icon className="h-24 w-24 text-red-600 mx-auto mb-6" />
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Professional {service.title}
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-200">
                <service.icon className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
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
              <div key={index} className="text-center">
                <div className="glass-card p-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
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