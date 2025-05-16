import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cpu, Wifi, Database, BarChart, Shield } from "lucide-react"
import { CleanButton } from "@/components/clean-button"
import { CleanCard } from "@/components/clean-card"
import { CleanHeading } from "@/components/clean-heading"
import { CleanSection } from "@/components/clean-section"
import { MainNav } from "@/components/main-nav"

export default function IoTSolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-slate-950 border-b border-slate-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <CleanHeading level={1} className="text-4xl md:text-5xl mb-6">
              IoT Solutions
            </CleanHeading>
            <p className="text-xl text-slate-300">
              Custom Internet of Things solutions designed to connect your devices and gather valuable data.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <CleanSection>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <CleanHeading level={2} className="text-3xl mb-6" withAccent>
                Transforming Businesses with IoT
              </CleanHeading>
              <p className="text-slate-300 mb-4">
                Our IoT solutions connect your physical devices to the digital world, enabling real-time monitoring,
                data collection, and automated decision-making.
              </p>
              <p className="text-slate-400 mb-6">
                We design and implement end-to-end IoT systems that help businesses improve efficiency, reduce costs,
                and create new revenue streams through data-driven insights.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Cpu className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-300">Custom hardware design for specific use cases</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Wifi className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-300">Secure connectivity solutions for all environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-300">Scalable cloud infrastructure for data storage and processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <BarChart className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-300">Advanced analytics and visualization dashboards</span>
                </li>
              </ul>
              <CleanButton>Request a Consultation</CleanButton>
            </div>
            <div className="relative h-[400px] bg-slate-900 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="IoT Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </CleanSection>

      {/* Features */}
      <CleanSection variant="alt">
        <div className="container">
          <div className="text-center mb-12">
            <CleanHeading level={2} className="text-3xl md:text-4xl mb-4">
              Key Features
            </CleanHeading>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our IoT solutions are built with the latest technologies to ensure reliability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <CleanCard className="p-6">
              <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Hardware</h3>
              <p className="text-slate-400">
                We design and build custom hardware solutions tailored to your specific requirements, from sensors to
                gateways.
              </p>
            </CleanCard>

            {/* Feature 2 */}
            <CleanCard className="p-6">
              <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Connectivity</h3>
              <p className="text-slate-400">
                We implement secure and reliable connectivity solutions using Wi-Fi, Bluetooth, LoRaWAN, Cellular, and
                more.
              </p>
            </CleanCard>

            {/* Feature 3 */}
            <CleanCard className="p-6">
              <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
              <p className="text-slate-400">
                Our scalable cloud solutions handle data storage, processing, and integration with your existing
                systems.
              </p>
            </CleanCard>

            {/* Feature 4 */}
            <CleanCard className="p-6">
              <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Analytics & Dashboards</h3>
              <p className="text-slate-400">
                Turn your data into actionable insights with our custom analytics and visualization dashboards.
              </p>
            </CleanCard>

            {/* Feature 5 */}
            <CleanCard className="p-6">
              <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p className="text-slate-400">
                We implement robust security measures to protect your devices, data, and communications.
              </p>
            </CleanCard>
          </div>
        </div>
      </CleanSection>

      {/* Process */}
      <CleanSection>
        <div className="container">
          <div className="text-center mb-12">
            <CleanHeading level={2} className="text-3xl md:text-4xl mb-4">
              Our Process
            </CleanHeading>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We follow a structured approach to deliver IoT solutions that meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-0.5 bg-primary/20 -z-10 md:hidden"></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 text-primary font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-primary/30">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-slate-400">
                  We work with you to understand your business needs, challenges, and goals for your IoT solution.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-0.5 bg-primary/20 -z-10 md:hidden"></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 text-primary font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-primary/30">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-slate-400">
                  Our team designs a comprehensive solution architecture, including hardware, connectivity, and software
                  components.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-0.5 bg-primary/20 -z-10 md:hidden"></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 text-primary font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-primary/30">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-slate-400">
                  We build and integrate all components of your IoT solution, from hardware prototypes to cloud
                  infrastructure.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 text-primary font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-primary/30">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Deployment</h3>
                <p className="text-slate-400">
                  We deploy your solution, provide training, and offer ongoing support to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CleanSection>

      {/* Case Studies */}
      <CleanSection variant="alt">
        <div className="container">
          <div className="text-center mb-12">
            <CleanHeading level={2} className="text-3xl md:text-4xl mb-4">
              Case Studies
            </CleanHeading>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See how our IoT solutions have helped businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <CleanCard className="overflow-hidden">
              <div className="h-48 bg-slate-800 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Smart Factory Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Factory Monitoring</h3>
                <p className="text-slate-400 mb-4">
                  Implemented an IoT solution for real-time monitoring of manufacturing equipment, resulting in a 30%
                  reduction in downtime.
                </p>
                <Link href="/projects/smart-factory" className="text-primary flex items-center gap-1 hover:underline">
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CleanCard>

            {/* Case Study 2 */}
            <CleanCard className="overflow-hidden">
              <div className="h-48 bg-slate-800 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agricultural IoT Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Agricultural Monitoring</h3>
                <p className="text-slate-400 mb-4">
                  Developed a smart farming solution that optimized irrigation and reduced water usage by 40% while
                  increasing crop yield.
                </p>
                <Link
                  href="/projects/agricultural-iot"
                  className="text-primary flex items-center gap-1 hover:underline"
                >
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CleanCard>

            {/* Case Study 3 */}
            <CleanCard className="overflow-hidden">
              <div className="h-48 bg-slate-800 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Energy Management Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Energy Management</h3>
                <p className="text-slate-400 mb-4">
                  Created an energy monitoring system for commercial buildings that reduced energy consumption by 25%
                  through automated controls.
                </p>
                <Link
                  href="/projects/energy-management"
                  className="text-primary flex items-center gap-1 hover:underline"
                >
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
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
                Ready to Start Your IoT Journey?
              </CleanHeading>
              <p className="text-slate-300 mb-8">
                Contact us today to discuss your IoT project requirements and see how our solutions can help you achieve
                your business goals.
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
