import { 
  TruckIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  GlobeAltIcon,
  UsersIcon 
} from '@heroicons/react/24/outline'

const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Reliability',
    description: 'Dependable service delivery with consistent quality and performance standards.',
  },
  {
    icon: UserGroupIcon,
    title: 'Trust',
    description: 'Building lasting relationships through transparency and honest business practices.',
  },
  {
    icon: ClockIcon,
    title: 'Efficiency',
    description: 'Streamlined operations ensuring timely delivery and optimal resource utilization.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Coverage',
    description: 'Wide network coverage serving industrial and commercial clients across India.',
  },
]

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '10+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-red-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Evolve Basics</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are your reliable purchase partner, specializing in efficient transport solutions, 
                sand supply, and material logistics. With a commitment to excellence, we serve 
                industrial businesses, ports, and construction companies across India.
              </p>
              <div className="flex items-center space-x-4">
                <TruckIcon className="h-12 w-12 text-red-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">Reliable transport solutions with trust</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded with a vision to revolutionize the transport and material supply industry, 
                Evolve Basics has grown from a local service provider to a trusted partner for 
                major industrial and construction companies.
              </p>
              <p className="text-gray-600">
                Our commitment to reliability, efficiency, and customer satisfaction has earned us 
                partnerships with leading companies and established us as a preferred choice for 
                transport and logistics solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that drive our commitment to excellence and customer satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-200">
                <value.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Evolve Basics provides comprehensive logistics and material supply solutions 
                designed to meet the diverse needs of our clients across various industries.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <TruckIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sand Supply</h4>
                    <p className="text-gray-600">
                      High-quality sand supply with reliable delivery to construction sites and industrial facilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <UsersIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Material Supply</h4>
                    <p className="text-gray-600">
                      Comprehensive supply of coal, limestone, gypsum, iron ore, and other industrial materials.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <GlobeAltIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transport Solutions</h4>
                    <p className="text-gray-600">
                      Efficient logistics and transport services ensuring timely delivery across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Industry Expertise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Industrial Manufacturing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Construction & Infrastructure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Port & Maritime Operations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Mining & Extraction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Infrastructure Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Leadership placeholder */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Leadership & Vision
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Our experienced leadership team brings decades of industry expertise, driving 
              innovation and maintaining the highest standards of service delivery.
            </p>
            <div className="glass-card p-8">
              <p className="text-lg text-gray-700 italic">
                &quot;At Evolve Basics, we believe in building relationships that last. 
                Our commitment to reliability and trust has been the foundation of our success 
                and continues to guide our growth in the transport and logistics industry.&quot;
              </p>
              <p className="text-red-600 font-semibold mt-4">
                - Evolve Basics Leadership Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}