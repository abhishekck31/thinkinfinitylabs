import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Users, Building, Cpu } from "lucide-react"
import { CleanButton } from "@/components/clean-button"
import { CleanCard } from "@/components/clean-card"
import { CleanHeading } from "@/components/clean-heading"
import { CleanSection } from "@/components/clean-section"
import { MainNav } from "@/components/main-nav"

export default function SmartFactoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-slate-950 border-b border-slate-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Case Study
            </div>
            <CleanHeading level={1} className="text-4xl md:text-5xl mb-6">
              Smart Factory Automation
            </CleanHeading>
            <p className="text-xl text-slate-300">
              How we helped a manufacturing company reduce downtime by 30% with our IoT monitoring solution.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <CleanSection>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <CleanHeading level={2} className="text-3xl mb-6" withAccent>
                Project Overview
              </CleanHeading>
              <p className="text-slate-300 mb-4">
                A leading manufacturing company was facing challenges with unexpected equipment failures that led to
                costly downtime and production delays. They needed a solution to monitor their machinery in real-time
                and predict potential failures before they occurred.
              </p>
              <p className="text-slate-400 mb-6">
                We designed and implemented a comprehensive IoT monitoring system that collected data from various
                sensors attached to critical equipment. This data was processed in real-time to provide insights into
                machine health and predict maintenance needs.
              </p>

              <div className="relative h-[400px] bg-slate-900 rounded-lg overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Smart Factory Implementation"
                  fill
                  className="object-cover"
                />
              </div>

              <CleanHeading level={3} className="text-2xl mb-4">
                The Challenge
              </CleanHeading>
              <p className="text-slate-300 mb-6">The client was experiencing:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">Frequent unexpected equipment failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">Production delays due to unplanned downtime</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">Inefficient maintenance schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">Lack of visibility into equipment performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">High maintenance costs due to reactive repairs</span>
                </li>
              </ul>

              <CleanHeading level={3} className="text-2xl mb-4">
                Our Solution
              </CleanHeading>
              <p className="text-slate-300 mb-6">We developed a comprehensive IoT monitoring system that included:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">
                    Custom sensors for temperature, vibration, and power consumption monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">Secure gateway devices for data collection and transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">Cloud-based data storage and processing infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">Machine learning algorithms for predictive maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">Real-time dashboard for monitoring equipment health</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-300">Automated alert system for potential issues</span>
                </li>
              </ul>
            </div>

            <div>
              <CleanCard className="p-6 sticky top-20">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-slate-400">6 months</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Team Size</div>
                      <div className="text-sm text-slate-400">8 specialists</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Industry</div>
                      <div className="text-sm text-slate-400">Manufacturing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cpu className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Technologies</div>
                      <div className="text-sm text-slate-400">
                        IoT, Cloud Computing, Machine Learning, Custom Sensors
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <CleanButton className="w-full">Request Similar Solution</CleanButton>
                </div>
              </CleanCard>
            </div>
          </div>
        </div>
      </CleanSection>

      {/* Results */}
      <CleanSection variant="alt">
        <div className="container">
          <div className="text-center mb-12">
            <CleanHeading level={2} className="text-3xl md:text-4xl mb-4">
              Results & Impact
            </CleanHeading>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our smart factory solution delivered significant improvements across multiple metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Result 1 */}
            <CleanCard className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <h3 className="text-xl font-medium mb-2">Reduction in Downtime</h3>
              <p className="text-slate-400">Predictive maintenance alerts helped prevent unexpected failures.</p>
            </CleanCard>

            {/* Result 2 */}
            <CleanCard className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">25%</div>
              <h3 className="text-xl font-medium mb-2">Maintenance Cost Savings</h3>
              <p className="text-slate-400">Shifting from reactive to predictive maintenance reduced costs.</p>
            </CleanCard>

            {/* Result 3 */}
            <CleanCard className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15%</div>
              <h3 className="text-xl font-medium mb-2">Productivity Increase</h3>
              <p className="text-slate-400">More uptime and optimized operations improved overall productivity.</p>
            </CleanCard>

            {/* Result 4 */}
            <CleanCard className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <h3 className="text-xl font-medium mb-2">Issue Detection Rate</h3>
              <p className="text-slate-400">
                Our system successfully identified potential failures before they occurred.
              </p>
            </CleanCard>
          </div>

          <div className="mt-12">
            <CleanCard className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full bg-slate-800 flex-shrink-0 relative overflow-hidden">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-slate-300 italic mb-4">
                    "The smart factory solution implemented by ThinkfinityLabs has transformed our manufacturing
                    operations. We've seen a significant reduction in downtime and maintenance costs, while improving
                    overall productivity. The real-time monitoring and predictive maintenance capabilities have given us
                    unprecedented visibility into our equipment performance."
                  </p>
                  <div className="font-bold">John Smith</div>
                  <div className="text-sm text-slate-400">Operations Director, Manufacturing Company</div>
                </div>
              </div>
            </CleanCard>
          </div>
        </div>
      </CleanSection>

      {/* Implementation Process */}
      <CleanSection>
        <div className="container">
          <CleanHeading level={2} className="text-3xl mb-8 text-center">
            Implementation Process
          </CleanHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <CleanHeading level={3} className="text-2xl mb-4" withAccent>
                1. Assessment & Planning
              </CleanHeading>
              <p className="text-slate-300 mb-4">
                We began with a comprehensive assessment of the client's manufacturing facility, identifying critical
                equipment and potential failure points. Our team worked closely with the client's operations team to
                understand their specific needs and challenges.
              </p>
              <p className="text-slate-400">This phase included:</p>
              <ul className="space-y-2 mt-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Equipment inventory and criticality assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Failure mode analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Sensor placement planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Network infrastructure assessment</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] bg-slate-900 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Assessment Phase" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 relative h-[300px] bg-slate-900 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Hardware Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <CleanHeading level={3} className="text-2xl mb-4" withAccent>
                2. Hardware Design & Installation
              </CleanHeading>
              <p className="text-slate-300 mb-4">
                Based on our assessment, we designed custom sensor packages for each type of equipment. These sensors
                were carefully installed to monitor key parameters without disrupting normal operations.
              </p>
              <p className="text-slate-400">This phase included:</p>
              <ul className="space-y-2 mt-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Custom sensor design and manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Gateway device configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Secure network implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Non-disruptive installation during planned downtime</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <CleanHeading level={3} className="text-2xl mb-4" withAccent>
                3. Software Development & Integration
              </CleanHeading>
              <p className="text-slate-300 mb-4">
                We developed a comprehensive software solution to collect, process, and analyze the data from the
                sensors. This included a cloud-based platform for data storage and processing, as well as machine
                learning algorithms for predictive maintenance.
              </p>
              <p className="text-slate-400">This phase included:</p>
              <ul className="space-y-2 mt-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Cloud infrastructure setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Data processing pipeline development</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Machine learning model training</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Dashboard and alert system creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span className="text-slate-400">Integration with existing ERP systems</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] bg-slate-900 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Software Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </CleanSection>

      {/* Related Projects */}
      <CleanSection variant="alt">
        <div className="container">
          <div className="text-center mb-12">
            <CleanHeading level={2} className="text-3xl md:text-4xl mb-4">
              Related Projects
            </CleanHeading>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore other IoT and automation projects we've completed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Project 1 */}
            <CleanCard className="overflow-hidden">
              <div className="h-48 bg-slate-800 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agricultural IoT Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Agricultural IoT</h3>
                <p className="text-slate-400 mb-4">
                  Smart farming solution for optimized irrigation and crop management.
                </p>
                <a href="/projects/agricultural-iot" className="text-primary flex items-center gap-1 hover:underline">
                  View project <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </CleanCard>

            {/* Related Project 2 */}
            <CleanCard className="overflow-hidden">
              <div className="h-48 bg-slate-800 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Energy Management Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Energy Management</h3>
                <p className="text-slate-400 mb-4">
                  Smart energy monitoring and optimization for commercial buildings.
                </p>
                <a href="/projects/energy-management" className="text-primary flex items-center gap-1 hover:underline">
                  View project <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </CleanCard>

            {/* Related Project 3 */}
            <CleanCard className="overflow-hidden">
              <div className="h-48 bg-slate-800 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Medical Devices Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Medical Devices</h3>
                <p className="text-slate-400 mb-4">IoT-enabled medical monitoring devices for patient care.</p>
                <a href="/projects/medical-devices" className="text-primary flex items-center gap-1 hover:underline">
                  View project <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </CleanCard>
          </div>
        </div>
      </CleanSection>

      {/* CTA Section */}
      <CleanSection>
        <div className="container">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 md:p-12 border border-slate-700">
            <div className="max-w-3xl mx-auto text-center">
              <CleanHeading level={2} className="text-3xl md:text-4xl mb-4">
                Ready to Transform Your Manufacturing?
              </CleanHeading>
              <p className="text-slate-300 mb-8">
                Contact us today to discuss how our IoT and automation solutions can help improve your manufacturing
                operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CleanButton size="lg">Get in Touch</CleanButton>
                <CleanButton variant="outline" size="lg">
                  Request a Quote
                </CleanButton>
              </div>
            </div>
          </div>
        </div>
      </CleanSection>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-slate-800 mt-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ThinkfinityLabs</h3>
              <p className="text-slate-400 mb-4">Electronics & IoT Automation Solutions for the modern world.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/services/iot-solutions" className="text-slate-400 hover:text-white">
                    IoT Solutions
                  </a>
                </li>
                <li>
                  <a href="/services/industrial-automation" className="text-slate-400 hover:text-white">
                    Industrial Automation
                  </a>
                </li>
                <li>
                  <a href="/services/embedded-systems" className="text-slate-400 hover:text-white">
                    Embedded Systems
                  </a>
                </li>
                <li>
                  <a href="/services/pcb-design" className="text-slate-400 hover:text-white">
                    PCB Design
                  </a>
                </li>
                <li>
                  <a href="/services/hardware-consulting" className="text-slate-400 hover:text-white">
                    Hardware Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-slate-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-slate-400 hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-slate-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="not-italic text-slate-400">
                <p>Reva Circle, Bangalore</p>
                <p className="mt-2">Email: info@thinkfinitylabs.com</p>
                <p className="mt-2">Phone: +91 9876543210</p>
              </address>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} ThinkfinityLabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
