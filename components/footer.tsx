import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { MotherboardButton } from "@/components/motherboard-button"
import { MotherboardLed } from "@/components/motherboard-led"
import { MotherboardChip } from "@/components/motherboard-chip"
import { MotherboardConnector } from "@/components/motherboard-connector"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-slate-950/80">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/50 flex items-center justify-center bg-slate-900">
                <div className="absolute inset-0 circuit-paths opacity-30"></div>
                <span className="text-primary font-bold text-lg">TF</span>
              </div>
              <span className="text-xl font-bold text-gradient font-mono">THINKFINITY</span>
            </Link>
            <p className="text-sm text-white">
              Building innovative technology solutions for businesses across the globe. Specializing in electronics and
              IoT automation.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <MotherboardButton variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </MotherboardButton>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <MotherboardButton variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </MotherboardButton>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <MotherboardButton variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </MotherboardButton>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <MotherboardButton variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </MotherboardButton>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider circuit-line font-mono text-white">
              SERVICES
            </h3>
            <ul className="grid gap-2 animated-circuit-list">
              <li className="flex items-center">
                <MotherboardLed color="green" size="sm" className="mr-2" />
                <Link href="/services/industrial-automation" className="text-sm text-white hover:text-primary">
                  Industrial Automation
                </Link>
              </li>
              <li className="flex items-center">
                <MotherboardLed color="green" size="sm" className="mr-2" />
                <Link href="/services/power-electronics" className="text-sm text-white hover:text-primary">
                  Power Electronics
                </Link>
              </li>
              <li className="flex items-center">
                <MotherboardLed color="green" size="sm" className="mr-2" />
                <Link href="/services/data-loggers" className="text-sm text-white hover:text-primary">
                  Data Loggers & PLC
                </Link>
              </li>
              <li className="flex items-center">
                <MotherboardLed color="green" size="sm" className="mr-2" />
                <Link href="/services/embedded-solutions" className="text-sm text-white hover:text-primary">
                  Embedded Solutions
                </Link>
              </li>
              <li className="flex items-center">
                <MotherboardLed color="green" size="sm" className="mr-2" />
                <Link href="/services/android-development" className="text-sm text-white hover:text-primary">
                  Android Development
                </Link>
              </li>
              <li className="flex items-center">
                <MotherboardLed color="green" size="sm" className="mr-2" />
                <Link href="/services/pcb-development" className="text-sm text-white hover:text-primary">
                  PCB Development
                </Link>
              </li>
              <li className="flex items-center">
                <MotherboardLed color="green" size="sm" className="mr-2" />
                <Link href="/services/robotics" className="text-sm text-white hover:text-primary">
                  Robotics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider circuit-line font-mono text-white">
              CONTACT
            </h3>
            <div className="grid gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MotherboardLed color="red" size="sm" />
                  <span className="text-sm font-medium text-white">Headquarters</span>
                </div>
                <p className="text-sm text-white ml-4">
                  Reva Circle, Kattigenahalli
                  <br />
                  Bengaluru, Karnataka 560064
                  <br />
                  India
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MotherboardLed color="yellow" size="sm" />
                  <span className="text-sm font-medium text-white">Connect With Us</span>
                </div>
                <div className="ml-4 grid gap-2">
                  <Link
                    href="tel:+919876543210"
                    className="text-sm text-white hover:text-primary flex items-center gap-2"
                  >
                    <MotherboardConnector type="audio" orientation="horizontal" className="w-4 h-4" />
                    +91 98765 43210
                  </Link>
                  <Link
                    href="mailto:info@thinkfinitylabs.com"
                    className="text-sm text-white hover:text-primary flex items-center gap-2"
                  >
                    <MotherboardConnector type="ethernet" orientation="horizontal" className="w-4 h-4" />
                    info@thinkfinitylabs.com
                  </Link>
                </div>
              </div>

              <div className="mt-4">
                <MotherboardChip variant="controller" size="sm" label="THINKFINITY" className="mb-2" />
                <p className="text-xs text-white">
                  © {new Date().getFullYear()} Thinkfinitylabs.
                  <br />
                  All circuits reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
