import { CircuitHeading } from "@/components/circuit-heading"
import { CircuitSection } from "@/components/circuit-section"
import { CircuitButton } from "@/components/circuit-button"
import { CircuitCard } from "@/components/circuit-card"
import { MainNav } from "@/components/main-nav"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
            <Link href="/contact" className="hidden md:block">
              <CircuitButton variant="outline" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                CONTACT
              </CircuitButton>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <CircuitSection variant="grid" className="py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center bg-white/90 p-6 rounded-lg border border-primary/30">
              <CircuitHeading
                level={1}
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl font-mono"
                withAccent
              >
                CONTACT US
              </CircuitHeading>
              <p className="text-lg text-slate-700">
                Get in touch with our team to discuss your electronics and IoT automation needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <CircuitCard className="p-6">
                  <CircuitHeading level={2} className="mb-6 text-2xl">
                    Send Us a Message
                  </CircuitHeading>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" className="border-primary/20 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Subject" className="border-primary/20 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={6}
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <CircuitButton type="submit" variant="primary">
                      Send Message
                    </CircuitButton>
                  </form>
                </CircuitCard>
              </div>

              <div>
                <CircuitCard className="p-6">
                  <CircuitHeading level={2} className="mb-6 text-2xl">
                    Contact Information
                  </CircuitHeading>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 mt-1">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800">Address</h3>
                        <p className="text-slate-700 mt-1">Reva Circle, Bangalore</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 mt-1">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800">Email</h3>
                        <p className="text-slate-700 mt-1">info@thinkfinitylabs.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 mt-1">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800">Phone</h3>
                        <p className="text-slate-700 mt-1">+91 9876543210</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <CircuitHeading level={3} className="mb-4 text-xl">
                      Business Hours
                    </CircuitHeading>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </CircuitCard>
              </div>
            </div>

            <div className="mt-12">
              <CircuitCard className="overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0824083695747!2d77.6309!3d13.1164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17dcd4a7d791%3A0xaad5e781f22a6144!2sREVA%20University!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CircuitCard>
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
