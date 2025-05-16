import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, Globe, Heart, Lightbulb, Shield, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
                <Clock className="mr-2 h-4 w-4" />
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
        <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
          <div className="container relative z-10">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Thinkfinitylabs</h1>
              <p className="mx-auto mb-8 max-w-[600px] text-xl text-muted-foreground">
                We're a team of passionate engineers and innovators dedicated to building cutting-edge technology
                solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Our Mission & Vision</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 rounded-full bg-primary/10 p-2">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To help clients realize their product development aspirations by providing innovative,
                        high-quality, and sustainable technology solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 rounded-full bg-primary/10 p-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To become the leading IoT automation company in India, known for our commitment to innovation,
                        quality, and client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg border bg-background shadow-xl">
                <Image
                  src="/about-mission.svg"
                  alt="Our Mission and Vision"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do at Thinkfinitylabs.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    We are committed to delivering high-quality solutions that exceed client expectations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We embrace modern technology and the latest designs to create innovative solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Timeliness</h3>
                  <p className="text-sm text-muted-foreground">
                    We are dedicated to completing projects on time, respecting our clients' schedules.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Sustainability</h3>
                  <p className="text-sm text-muted-foreground">
                    We prioritize sustainable practices in our technology development and operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Leadership Team</h2>
              <p className="text-lg text-muted-foreground">
                Meet the experts behind Thinkfinitylabs' innovative solutions.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/team-member-1.svg"
                    alt="Amit Sharma"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold">Amit Sharma</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">
                    With over 15 years of experience in electronics and automation, Amit leads our vision and strategy.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/team-member-2.svg"
                    alt="Priya Patel"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold">Priya Patel</h3>
                  <p className="mb-4 text-sm text-muted-foreground">CTO</p>
                  <p className="text-sm text-muted-foreground">
                    Priya oversees our technical operations and ensures we stay at the forefront of technology
                    innovation.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/team-member-3.svg"
                    alt="Rahul Verma"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold">Rahul Verma</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Head of Engineering</p>
                  <p className="text-sm text-muted-foreground">
                    Rahul leads our engineering team, bringing extensive experience in embedded systems and IoT.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History & Achievements */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
              <p className="text-lg text-muted-foreground">Explore our history and key achievements over the years.</p>
            </div>
            <Tabs defaultValue="history" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList>
                  <TabsTrigger value="history">Our History</TabsTrigger>
                  <TabsTrigger value="achievements">Key Achievements</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="history" className="mt-0">
                <div className="mx-auto max-w-[800px] space-y-8">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-primary p-2 text-primary-foreground">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="mt-2 h-full w-0.5 bg-border"></div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">2013: Foundation</h3>
                      <p className="text-muted-foreground">
                        Thinkfinitylabs was founded with a vision to provide innovative electronics and automation
                        solutions to businesses.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-primary p-2 text-primary-foreground">
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="mt-2 h-full w-0.5 bg-border"></div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">2015: Team Expansion</h3>
                      <p className="text-muted-foreground">
                        We expanded our team and capabilities to include embedded systems and software development.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-primary p-2 text-primary-foreground">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div className="mt-2 h-full w-0.5 bg-border"></div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">2018: Global Expansion</h3>
                      <p className="text-muted-foreground">
                        We opened our first international office and began serving clients globally.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-primary p-2 text-primary-foreground">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">2023: Industry Recognition</h3>
                      <p className="text-muted-foreground">
                        Thinkfinitylabs was recognized as one of the leading IoT automation companies in India.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="achievements" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">Innovation Award 2020</h3>
                      <p className="text-sm text-muted-foreground">
                        Recognized for our innovative approach to industrial automation solutions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">100+ Successful Projects</h3>
                      <p className="text-sm text-muted-foreground">
                        Completed over 100 successful projects across various industries and technologies.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">Global Presence</h3>
                      <p className="text-sm text-muted-foreground">
                        Established offices in 4 countries, serving clients across the globe.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">ISO 9001 Certification</h3>
                      <p className="text-sm text-muted-foreground">
                        Achieved ISO 9001 certification for our quality management systems.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">Sustainability Initiative</h3>
                      <p className="text-sm text-muted-foreground">
                        Launched our sustainability initiative to reduce environmental impact in technology development.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">5 Patents Filed</h3>
                      <p className="text-sm text-muted-foreground">
                        Filed 5 patents for our innovative technology solutions in IoT and automation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-white blur-3xl"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Work With Us?</h2>
              <p className="mb-8 text-xl">
                Let's discuss how we can help you achieve your technology goals with our expertise.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Our Team
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
