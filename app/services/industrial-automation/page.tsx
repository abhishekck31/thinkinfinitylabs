import { CircuitHeading } from "@/components/circuit-heading"
import { CircuitSection } from "@/components/circuit-section"
import { CircuitButton } from "@/components/circuit-button"
import { CircuitCard } from "@/components/circuit-card"
import { MainNav } from "@/components/main-nav"
import { Server, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function IndustrialAutomationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/50 flex items-center justify-center bg-white">
              <div className="absolute inset-0 circuit-paths opacity-30"></div>
              <span className="text-primary font-bold text-lg">TF</span>
            </div>
            <span className="text-xl font-bold text-primary font-mono">THINKFINITY</span>
          </Link>
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <CircuitButton variant="primary" size="sm">
                CONTACT US
                <ArrowRight className="ml-2 h-4 w-4" />
              </CircuitButton>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <CircuitSection variant="grid" className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white/90 p-6 rounded-lg border border-primary/30 circuit-pattern">
                <h1 className="text-4xl font-bold mb-4 text-slate-800">Industrial Automation Solutions</h1>
                <p className="text-lg text-slate-700 mb-6">
                  Streamline your manufacturing processes with our cutting-edge industrial automation solutions.
                  Increase efficiency, reduce errors, and optimize production.
                </p>
                <CircuitButton variant="primary" size="lg">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </CircuitButton>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-primary/30 bg-white p-4 shadow-xl circuit-board">
                <div className="absolute inset-0 circuit-paths"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white border-2 border-primary/70 p-4 rounded-md text-center">
                    <Server className="h-12 w-12 text-primary mx-auto mb-2" />
                    <div className="text-sm text-primary font-bold">INDUSTRIAL AUTOMATION</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-4">
                    <div className="bg-white border border-primary/70 p-1 rounded-sm text-center">
                      <div className="text-xs text-primary font-bold">PLC</div>
                    </div>
                    <div className="bg-white border border-primary/70 p-1 rounded-sm text-center">
                      <div className="text-xs text-primary font-bold">SCADA</div>
                    </div>
                    <div className="bg-white border border-primary/70 p-1 rounded-sm text-center">
                      <div className="text-xs text-primary font-bold">HMI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CircuitSection>

        {/* Features Section */}
        <CircuitSection variant="dots">
          <div className="container">
            <div className="text-center mb-12">
              <CircuitHeading level={2} className="text-3xl font-bold mb-4" withAccent>
                Our Industrial Automation Services
              </CircuitHeading>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                We provide comprehensive industrial automation solutions tailored to your specific manufacturing needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CircuitCard className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">PLC Programming</h3>
                <p className="text-slate-700 mb-4">
                  Custom PLC programming and implementation for precise control of your manufacturing processes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Allen Bradley, Siemens, Mitsubishi</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Ladder Logic, Function Block, Structured Text</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Process optimization and troubleshooting</span>
                  </li>
                </ul>
              </CircuitCard>

              <CircuitCard className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">SCADA Systems</h3>
                <p className="text-slate-700 mb-4">
                  Comprehensive SCADA solutions for real-time monitoring and control of your industrial processes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Data acquisition and visualization</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Alarm management and reporting</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Historical data analysis</span>
                  </li>
                </ul>
              </CircuitCard>

              <CircuitCard className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">HMI Development</h3>
                <p className="text-slate-700 mb-4">
                  Intuitive HMI interfaces that provide operators with clear visibility and control of your systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>User-friendly interface design</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Touch screen and mobile compatibility</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Custom graphics and animations</span>
                  </li>
                </ul>
              </CircuitCard>

              <CircuitCard className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Industrial IoT</h3>
                <p className="text-slate-700 mb-4">
                  Connect your industrial equipment to the cloud for advanced analytics and remote monitoring.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Sensor integration and data collection</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Cloud connectivity and storage</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Predictive maintenance solutions</span>
                  </li>
                </ul>
              </CircuitCard>

              <CircuitCard className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Robotics Integration</h3>
                <p className="text-slate-700 mb-4">
                  Seamless integration of robotic systems into your manufacturing processes for increased efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Robot programming and configuration</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Vision systems and quality control</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Safety system implementation</span>
                  </li>
                </ul>
              </CircuitCard>

              <CircuitCard className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Process Optimization</h3>
                <p className="text-slate-700 mb-4">
                  Analyze and optimize your manufacturing processes to improve efficiency and reduce costs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Process analysis and bottleneck identification</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Energy efficiency improvements</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Waste reduction strategies</span>
                  </li>
                </ul>
              </CircuitCard>
            </div>
          </div>
        </CircuitSection>

        {/* CTA Section */}
        <CircuitSection variant="grid">
          <div className="container">
            <div className="bg-white p-8 md:p-12 border border-primary/30 rounded-lg circuit-pattern">
              <div className="max-w-3xl mx-auto text-center">
                <CircuitHeading level={2} className="text-3xl md:text-4xl mb-4 font-mono" withAccent>
                  Ready to Automate Your Industry?
                </CircuitHeading>
                <p className="mb-8 text-xl text-slate-700">
                  Contact us today to discuss your industrial automation requirements and see how we can help optimize
                  your manufacturing processes.
                </p>
                <Link href="/contact">
                  <CircuitButton variant="primary" size="lg">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </CircuitButton>
                </Link>
              </div>
            </div>
          </div>
        </CircuitSection>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-primary/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">ThinkfinityLabs</h3>
              <p className="text-slate-700 mb-4">Electronics & IoT Automation Solutions for the modern world.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-800">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/iot-solutions" className="text-slate-700 hover:text-primary">
                    IoT Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/industrial-automation" className="text-slate-700 hover:text-primary">
                    Industrial Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/embedded-systems" className="text-slate-700 hover:text-primary">
                    Embedded Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/pcb-development" className="text-slate-700 hover:text-primary">
                    PCB Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/firmware-development" className="text-slate-700 hover:text-primary">
                    Firmware Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-800">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-700 hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-slate-700 hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-700 hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-800">Contact</h4>
              <address className="not-italic text-slate-700">
                <p>Reva Circle, Bangalore</p>
                <p className="mt-2">Email: info@thinkfinitylabs.com</p>
                <p className="mt-2">Phone: +91 9876543210</p>
              </address>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary/20 text-center text-slate-600">
            <p>&copy; {new Date().getFullYear()} ThinkfinityLabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
