import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Thinkfinitylabs Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold">Thinkfinitylabs</span>
          </Link>
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                <Filter className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20 md:py-28">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="h-full w-full bg-[url('/circuit-grid.png')] bg-repeat"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Our Projects
              </h1>
              <p className="mx-auto mb-8 max-w-[600px] text-xl text-gray-600">
                Explore our portfolio of successful projects across various industries and technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Filter */}
        <section className="py-20 bg-white">
          <div className="container">
            <Tabs defaultValue="all" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="bg-green-50">
                  <TabsTrigger value="all" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                    All Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="industrial"
                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                  >
                    Industrial
                  </TabsTrigger>
                  <TabsTrigger value="home" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                    Home Automation
                  </TabsTrigger>
                  <TabsTrigger value="food" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                    Food Machinery
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-1.svg"
                        alt="Smart Factory Automation"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Smart Factory Automation</CardTitle>
                      <CardDescription className="text-green-600">Industrial Automation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Implemented a comprehensive factory automation system that increased production efficiency by
                        35%.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/smart-factory">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-2.svg"
                        alt="Smart Home System"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Smart Home System</CardTitle>
                      <CardDescription className="text-green-600">IoT & Home Automation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Developed an integrated smart home system with energy monitoring that reduced consumption by
                        25%.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/smart-home">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-3.svg"
                        alt="Food Processing Automation"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Food Processing Automation</CardTitle>
                      <CardDescription className="text-green-600">Industrial & Food Machinery</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Created a custom automation solution for a food processing plant that improved throughput by
                        40%.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/food-processing">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-4.svg"
                        alt="Energy Monitoring System"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Energy Monitoring System</CardTitle>
                      <CardDescription className="text-green-600">IoT & Power Electronics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Designed and implemented an energy monitoring system that helped a manufacturing facility reduce
                        energy costs by 20%.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/energy-monitoring">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-5.svg"
                        alt="Warehouse Robotics"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Warehouse Robotics</CardTitle>
                      <CardDescription className="text-green-600">Robotics & Automation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Developed a robotic system for warehouse inventory management that improved accuracy by 99.8%
                        and reduced labor costs.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/warehouse-robotics">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-6.svg"
                        alt="Agricultural Monitoring"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Agricultural Monitoring</CardTitle>
                      <CardDescription className="text-green-600">IoT & Embedded Systems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Created an IoT-based agricultural monitoring system that optimized irrigation and increased crop
                        yields by 30%.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/agricultural-monitoring">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="industrial" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-1.svg"
                        alt="Smart Factory Automation"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Smart Factory Automation</CardTitle>
                      <CardDescription className="text-green-600">Industrial Automation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Implemented a comprehensive factory automation system that increased production efficiency by
                        35%.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/smart-factory">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-4.svg"
                        alt="Energy Monitoring System"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Energy Monitoring System</CardTitle>
                      <CardDescription className="text-green-600">IoT & Power Electronics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Designed and implemented an energy monitoring system that helped a manufacturing facility reduce
                        energy costs by 20%.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/energy-monitoring">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-5.svg"
                        alt="Warehouse Robotics"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Warehouse Robotics</CardTitle>
                      <CardDescription className="text-green-600">Robotics & Automation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Developed a robotic system for warehouse inventory management that improved accuracy by 99.8%
                        and reduced labor costs.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/warehouse-robotics">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="home" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-2.svg"
                        alt="Smart Home System"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Smart Home System</CardTitle>
                      <CardDescription className="text-green-600">IoT & Home Automation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Developed an integrated smart home system with energy monitoring that reduced consumption by
                        25%.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/smart-home">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="food" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden border-green-100 bg-white">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/project-3.svg"
                        alt="Food Processing Automation"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">Food Processing Automation</CardTitle>
                      <CardDescription className="text-green-600">Industrial & Food Machinery</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Created a custom automation solution for a food processing plant that improved throughput by
                        40%.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/projects/food-processing">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Case Study
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

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-green-600 py-20 text-white">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="h-full w-full bg-[url('/circuit-grid.png')] bg-repeat"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Have a Project in Mind?</h2>
              <p className="mb-8 text-xl">
                Let's discuss how we can help you achieve your goals with our expertise in electronics and IoT
                automation.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  Start Your Project
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
