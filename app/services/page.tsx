import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Database,
  Globe,
  Layers,
  Lightbulb,
  MessageSquare,
  Server,
  Settings,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col circuit-grid-bg">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Thinkfinitylabs Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold">Thinkfinitylabs</span>
          </Link>
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button variant="outline" size="sm">
                <Lightbulb className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-green-50 py-20 md:py-28 circuit-hero-bg">
          <div className="container relative z-10">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Services</h1>
              <p className="mx-auto mb-8 max-w-[600px] text-xl text-gray-600">
                Comprehensive technology solutions to help you build and scale your products.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Expertise</h2>
              <p className="text-lg text-gray-600">We offer a wide range of services to meet your technology needs.</p>
            </div>
            <Tabs defaultValue="automation" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-[800px] grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="automation">Automation</TabsTrigger>
                  <TabsTrigger value="electronics">Electronics</TabsTrigger>
                  <TabsTrigger value="embedded">Embedded</TabsTrigger>
                  <TabsTrigger value="software">Software</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="automation" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Server className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Industrial Automation</CardTitle>
                      <CardDescription>Streamline your manufacturing processes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Our industrial automation solutions help businesses optimize their manufacturing processes,
                        reduce errors, and increase productivity. We design and implement custom automation systems
                        tailored to your specific needs.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/industrial-automation">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Database className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Data Loggers & PLC</CardTitle>
                      <CardDescription>Capture and analyze critical data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Our data logging and PLC solutions enable you to collect, store, and analyze important
                        operational data. This helps you make informed decisions and optimize your processes based on
                        real-time information.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/data-loggers">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Globe className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>IoT Solutions</CardTitle>
                      <CardDescription>Connect your devices and systems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Our IoT solutions help you connect your devices and systems, enabling seamless communication and
                        data exchange. We design and implement comprehensive IoT architectures that drive efficiency and
                        innovation.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/iot-solutions">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="electronics" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Zap className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Power Electronics</CardTitle>
                      <CardDescription>Efficient power systems design</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Our power electronics services include the design and development of efficient power systems for
                        your electronic products. We ensure optimal performance, reliability, and energy efficiency in
                        all our designs.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/power-electronics">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Layers className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>PCB Development</CardTitle>
                      <CardDescription>Reliable circuit board design</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We specialize in the design and development of printed circuit boards (PCBs) for various
                        applications. Our PCB designs are optimized for performance, reliability, and manufacturability.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/pcb-development">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Shield className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Debug Equipment</CardTitle>
                      <CardDescription>Identify and resolve issues</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Our debug equipment and software help you identify and resolve issues in your electronic
                        systems. We provide specialized tools and expertise to ensure your products function flawlessly.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/debug-equipment">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="embedded" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Cpu className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Embedded Systems</CardTitle>
                      <CardDescription>Specialized hardware solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We develop reliable embedded systems for specialized hardware requirements. Our solutions are
                        designed to be robust, efficient, and tailored to your specific application needs.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/embedded-systems">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Settings className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Firmware Development</CardTitle>
                      <CardDescription>Optimized device software</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Our firmware development services create optimized software to power your embedded devices and
                        systems. We ensure reliable operation and efficient resource utilization.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/firmware-development">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Layers className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Robotics</CardTitle>
                      <CardDescription>Advanced automation solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We build advanced robotics solutions for automation and specialized applications. Our robotics
                        expertise spans various industries and use cases, from manufacturing to specialized tasks.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/robotics">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="software" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Smartphone className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Android Applications</CardTitle>
                      <CardDescription>Custom mobile solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We develop custom Android applications to control and monitor your systems. Our mobile solutions
                        provide intuitive interfaces and powerful functionality for your users.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/android-development">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Globe className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Web Applications</CardTitle>
                      <CardDescription>Powerful web interfaces</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We create powerful web interfaces for your IoT and automation systems. Our web applications
                        provide accessible control and monitoring capabilities from any device.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/web-applications">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <MessageSquare className="h-10 w-10 text-green-500 mb-4" />
                      <CardTitle>Custom Software</CardTitle>
                      <CardDescription>Tailored business solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We build tailored software solutions to meet your specific business requirements. Our custom
                        software is designed to address your unique challenges and opportunities.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/services/custom-software">
                        <Button variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-green-50 py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
              <p className="text-lg text-gray-600">
                We follow a structured approach to ensure successful project delivery.
              </p>
            </div>
            <div className="mx-auto max-w-[900px]">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative border-l border-green-500 pl-6 md:border-l-0 md:border-r md:pl-0 md:pr-6 md:text-right">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-green-500 md:left-auto md:right-[-8px]"></div>
                  <h3 className="mb-2 text-xl font-semibold">1. Discovery & Requirements</h3>
                  <p className="text-gray-600">
                    We begin by understanding your needs, challenges, and objectives through detailed consultations.
                  </p>
                </div>
                <div className="md:mt-24"></div>
                <div className="md:mt-24"></div>
                <div className="relative border-l border-green-500 pl-6 md:border-l-0 md:border-r md:pl-0 md:pr-6 md:text-right">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-green-500 md:left-auto md:right-[-8px]"></div>
                  <h3 className="mb-2 text-xl font-semibold">2. Design & Planning</h3>
                  <p className="text-gray-600">
                    We create detailed designs and project plans, establishing clear milestones and deliverables.
                  </p>
                </div>
                <div className="relative border-l border-green-500 pl-6 md:pl-6">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-green-500"></div>
                  <h3 className="mb-2 text-xl font-semibold">3. Development & Implementation</h3>
                  <p className="text-gray-600">
                    Our team develops and implements the solution according to the approved designs and specifications.
                  </p>
                </div>
                <div className="md:mt-24"></div>
                <div className="md:mt-24"></div>
                <div className="relative border-l border-green-500 pl-6 md:pl-6">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-green-500"></div>
                  <h3 className="mb-2 text-xl font-semibold">4. Testing & Quality Assurance</h3>
                  <p className="text-gray-600">
                    We rigorously test all aspects of the solution to ensure it meets our high-quality standards.
                  </p>
                </div>
                <div className="relative border-l border-green-500 pl-6 md:border-l-0 md:border-r md:pl-0 md:pr-6 md:text-right">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-green-500 md:left-auto md:right-[-8px]"></div>
                  <h3 className="mb-2 text-xl font-semibold">5. Deployment & Training</h3>
                  <p className="text-gray-600">
                    We deploy the solution and provide comprehensive training to ensure smooth adoption.
                  </p>
                </div>
                <div className="md:mt-24"></div>
                <div className="md:mt-24"></div>
                <div className="relative border-l border-green-500 pl-6 md:border-l-0 md:border-r md:pl-0 md:pr-6 md:text-right">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-green-500 md:left-auto md:right-[-8px]"></div>
                  <h3 className="mb-2 text-xl font-semibold">6. Support & Maintenance</h3>
                  <p className="text-gray-600">
                    We provide ongoing support and maintenance to ensure your solution continues to perform optimally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Industries We Serve</h2>
              <p className="text-lg text-gray-600">
                Our solutions are tailored to meet the unique needs of various industries.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-green-50 p-3 w-fit">
                    <Server className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle>Manufacturing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    We help manufacturing businesses optimize their processes, reduce costs, and improve quality through
                    automation and IoT solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-green-50 p-3 w-fit">
                    <Database className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle>Food Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    Our solutions for the food industry focus on automation, quality control, and compliance with
                    regulatory standards.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-green-50 p-3 w-fit">
                    <Globe className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle>Home Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    We create smart home solutions that enhance comfort, security, and energy efficiency for residential
                    applications.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-green-50 p-3 w-fit">
                    <Cpu className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle>Healthcare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    Our healthcare solutions focus on patient monitoring, equipment automation, and data management for
                    improved care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-green-50 p-3 w-fit">
                    <Zap className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle>Energy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    We develop solutions for energy monitoring, management, and optimization to improve efficiency and
                    reduce costs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-green-50 p-3 w-fit">
                    <Settings className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle>Agriculture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    Our agricultural solutions include automation, monitoring, and data analysis for improved crop
                    yields and resource management.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-green-500 py-20 text-white">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-white blur-3xl"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
              <p className="mb-8 text-xl">
                Contact us today to discuss your project requirements and how we can help you achieve your goals.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
