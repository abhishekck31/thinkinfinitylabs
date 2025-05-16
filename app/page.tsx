import Link from "next/link"
import { ArrowRight, Cpu, Zap, Server, Wifi, Shield, ChevronRight, Phone } from "lucide-react"
import { CircuitButton } from "@/components/circuit-button"
import { CircuitCard } from "@/components/circuit-card"
import { CircuitHeading } from "@/components/circuit-heading"
import { CircuitSection } from "@/components/circuit-section"
import { MainNav } from "@/components/main-nav"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
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
            <Link href="/contact">
              <CircuitButton variant="primary" size="sm">
                INITIALIZE
                <ArrowRight className="ml-2 h-4 w-4" />
              </CircuitButton>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <CircuitSection variant="grid" className="py-20 md:py-32">
          <div className="container grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="flex flex-col gap-4 bg-white/90 p-6 rounded-lg border border-primary/30 circuit-pattern">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-mono text-slate-800">
                BUILD YOUR DREAM <span className="text-primary">PRODUCT</span> WITH US
              </h1>
              <p className="max-w-[600px] text-xl text-slate-700">
                We specialize in electronics and IoT automation to help businesses transform their ideas into reality.
              </p>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                <Link href="/services">
                  <CircuitButton variant="primary" size="lg">
                    EXPLORE SERVICES
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </CircuitButton>
                </Link>
                <Link href="/projects">
                  <CircuitButton variant="outline" size="lg">
                    VIEW PROJECTS
                  </CircuitButton>
                </Link>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg border border-primary/30 bg-white p-4 shadow-xl circuit-board">
              {/* Circuit board visualization */}
              <div className="absolute inset-0 circuit-paths"></div>

              {/* CPU */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white border-2 border-primary/70 p-3 rounded-md text-center">
                  <div className="text-xs text-primary font-bold">THINKFINITY CPU</div>
                </div>
              </div>

              {/* RAM */}
              <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-white border-2 border-primary/70 p-2 rounded-md text-center">
                  <div className="text-xs text-primary font-bold">RAM</div>
                </div>
              </div>

              {/* Capacitors */}
              <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-4 h-8 bg-white border border-primary/70 rounded-full"></div>
              </div>
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-4 h-8 bg-white border border-primary/70 rounded-full"></div>
              </div>

              {/* Resistors */}
              <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
                <div className="w-12 h-4 bg-white border border-primary/70 rounded-sm flex items-center justify-around px-1">
                  <div className="w-1 h-full bg-primary/20"></div>
                  <div className="w-1 h-full bg-primary/40"></div>
                  <div className="w-1 h-full bg-primary/60"></div>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2 translate-y-1/2">
                <div className="h-12 w-4 bg-white border border-primary/70 rounded-sm flex flex-col items-center justify-around py-1">
                  <div className="h-1 w-full bg-primary/20"></div>
                  <div className="h-1 w-full bg-primary/40"></div>
                  <div className="h-1 w-full bg-primary/60"></div>
                </div>
              </div>

              {/* Connectors */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-4">
                  <div className="bg-white border border-primary/70 p-1 rounded-sm text-center">
                    <div className="text-xs text-primary font-bold">USB</div>
                  </div>
                  <div className="bg-white border border-primary/70 p-1 rounded-sm text-center">
                    <div className="text-xs text-primary font-bold">HDMI</div>
                  </div>
                  <div className="bg-white border border-primary/70 p-1 rounded-sm text-center">
                    <div className="text-xs text-primary font-bold">LAN</div>
                  </div>
                </div>
              </div>

              {/* LEDs */}
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-primary/80"></div>
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-blue-500/80"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-yellow-500/80"></div>
            </div>
          </div>
        </CircuitSection>

        {/* Services Section */}
        <CircuitSection variant="dots">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center bg-white/90 p-6 rounded-lg border border-primary/30">
              <CircuitHeading
                level={2}
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl font-mono"
                withAccent
              >
                OUR EXPERTISE
              </CircuitHeading>
              <p className="text-lg text-slate-700">
                We offer a comprehensive range of services to help you build and scale your technology solutions.
              </p>
            </div>
            <Tabs defaultValue="automation" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-[800px] grid-cols-2 border border-primary/30 bg-white/50 p-1 md:grid-cols-4">
                  <TabsTrigger value="automation">AUTOMATION</TabsTrigger>
                  <TabsTrigger value="electronics">ELECTRONICS</TabsTrigger>
                  <TabsTrigger value="embedded">EMBEDDED</TabsTrigger>
                  <TabsTrigger value="software">SOFTWARE</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="automation" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Server className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">INDUSTRIAL AUTOMATION</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Streamline your manufacturing processes with our cutting-edge industrial automation solutions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/industrial-automation">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Server className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">DATA LOGGERS & PLC</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Capture and analyze critical data with our advanced data logging and PLC solutions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/data-loggers">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Server className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">IOT SOLUTIONS</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Connect your devices and systems with our comprehensive IoT implementation services.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/iot-solutions">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                </div>
              </TabsContent>
              <TabsContent value="electronics" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Zap className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">POWER ELECTRONICS</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Design and develop efficient power systems for your electronic products.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/power-electronics">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Zap className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">PCB DEVELOPMENT</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Create reliable and optimized printed circuit boards for your electronic devices.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/pcb-development">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Zap className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">DEBUG EQUIPMENT</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Identify and resolve issues in your electronic systems with our specialized debug tools.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/debug-equipment">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                </div>
              </TabsContent>
              <TabsContent value="embedded" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Cpu className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">EMBEDDED SYSTEMS</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Develop reliable embedded solutions for your specialized hardware requirements.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/embedded-systems">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Cpu className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">FIRMWARE DEVELOPMENT</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Create optimized firmware to power your embedded devices and systems.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/firmware-development">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Cpu className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">ROBOTICS</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Build advanced robotics solutions for automation and specialized applications.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/robotics">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                </div>
              </TabsContent>
              <TabsContent value="software" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Wifi className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">ANDROID APPLICATIONS</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Develop custom Android applications to control and monitor your systems.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/android-development">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Wifi className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">WEB APPLICATIONS</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Create powerful web interfaces for your IoT and automation systems.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/web-applications">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                  <CircuitCard variant="bordered">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Wifi className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-mono text-slate-800">CUSTOM SOFTWARE</CardTitle>
                      <CardDescription className="text-base text-slate-700">
                        Build tailored software solutions to meet your specific business requirements.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="circuit-paths"></CardContent>
                    <CardFooter>
                      <Link href="/services/custom-software">
                        <CircuitButton variant="outline" size="sm">
                          LEARN MORE
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CircuitButton>
                      </Link>
                    </CardFooter>
                  </CircuitCard>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-12 text-center">
              <Link href="/services">
                <CircuitButton variant="primary" size="lg">
                  VIEW ALL SERVICES
                  <ChevronRight className="ml-2 h-4 w-4" />
                </CircuitButton>
              </Link>
            </div>
          </div>
        </CircuitSection>

        {/* Stats Section */}
        <CircuitSection variant="lines">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center bg-white/90 p-6 rounded-lg border border-primary/30">
              <CircuitHeading
                level={2}
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl font-mono"
                withAccent
              >
                SYSTEM METRICS
              </CircuitHeading>
              <p className="text-lg text-slate-700">
                We've helped numerous businesses achieve their technology goals with measurable results.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <CircuitCard>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary font-mono">150+</div>
                  <p className="text-sm text-slate-700">COMPLETED PROJECTS</p>
                  <div className="mt-2 flex justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                </CardContent>
              </CircuitCard>
              <CircuitCard>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary font-mono">98%</div>
                  <p className="text-sm text-slate-700">CLIENT SATISFACTION</p>
                  <div className="mt-2 flex justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                </CardContent>
              </CircuitCard>
              <CircuitCard>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary font-mono">10+</div>
                  <p className="text-sm text-slate-700">YEARS EXPERIENCE</p>
                  <div className="mt-2 flex justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                </CardContent>
              </CircuitCard>
              <CircuitCard>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Wifi className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary font-mono">1</div>
                  <p className="text-sm text-slate-700">GLOBAL OFFICE</p>
                  <div className="mt-2 flex justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                </CardContent>
              </CircuitCard>
            </div>
          </div>
        </CircuitSection>

        {/* Featured Projects */}
        <CircuitSection variant="grid">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center bg-white/90 p-6 rounded-lg border border-primary/30">
              <CircuitHeading
                level={2}
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl font-mono"
                withAccent
              >
                FEATURED PROJECTS
              </CircuitHeading>
              <p className="text-lg text-slate-700">
                Explore some of our recent work and see how we've helped our clients achieve their goals.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CircuitCard className="overflow-hidden">
                <div className="aspect-video overflow-hidden relative bg-white flex items-center justify-center circuit-board">
                  <div className="text-center p-4">
                    <div className="bg-white border-2 border-primary/70 p-3 rounded-md text-center mb-4">
                      <div className="text-xs text-primary font-bold">FACTORY CPU</div>
                    </div>
                    <p className="mt-4 text-primary font-mono">Smart Factory Automation</p>
                  </div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-primary"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-slate-800">SMART FACTORY AUTOMATION</CardTitle>
                  <CardDescription className="text-slate-700">Industrial Automation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Implemented a comprehensive factory automation system that increased production efficiency by 35%.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/projects/smart-factory">
                    <CircuitButton variant="outline" size="sm">
                      VIEW CASE STUDY
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </CircuitButton>
                  </Link>
                </CardFooter>
              </CircuitCard>
              <CircuitCard className="overflow-hidden">
                <div className="aspect-video overflow-hidden relative bg-white flex items-center justify-center circuit-board">
                  <div className="text-center p-4">
                    <div className="bg-white border-2 border-primary/70 p-3 rounded-md text-center mb-4">
                      <div className="text-xs text-primary font-bold">HOME CTRL</div>
                    </div>
                    <p className="mt-4 text-primary font-mono">Smart Home System</p>
                  </div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-primary"></div>
                  <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-primary"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-yellow-500"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-slate-800">SMART HOME SYSTEM</CardTitle>
                  <CardDescription className="text-slate-700">IoT & Home Automation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Developed an integrated smart home system with energy monitoring that reduced consumption by 25%.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/projects/smart-home">
                    <CircuitButton variant="outline" size="sm">
                      VIEW CASE STUDY
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </CircuitButton>
                  </Link>
                </CardFooter>
              </CircuitCard>
              <CircuitCard className="overflow-hidden">
                <div className="aspect-video overflow-hidden relative bg-white flex items-center justify-center circuit-board">
                  <div className="text-center p-4">
                    <div className="bg-white border-2 border-primary/70 p-3 rounded-md text-center mb-4">
                      <div className="text-xs text-primary font-bold">FOOD PROC</div>
                    </div>
                    <p className="mt-4 text-primary font-mono">Food Processing Automation</p>
                  </div>
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-slate-800">FOOD PROCESSING AUTOMATION</CardTitle>
                  <CardDescription className="text-slate-700">Industrial & Food Machinery</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Created a custom automation solution for a food processing plant that improved throughput by 40%.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/projects/food-processing">
                    <CircuitButton variant="outline" size="sm">
                      VIEW CASE STUDY
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </CircuitButton>
                  </Link>
                </CardFooter>
              </CircuitCard>
            </div>
            <div className="mt-12 text-center">
              <Link href="/projects">
                <CircuitButton variant="primary" size="lg">
                  VIEW ALL PROJECTS
                  <ChevronRight className="ml-2 h-4 w-4" />
                </CircuitButton>
              </Link>
            </div>
          </div>
        </CircuitSection>

        {/* Testimonials */}
        <CircuitSection variant="dots">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center bg-white/90 p-6 rounded-lg border border-primary/30">
              <CircuitHeading
                level={2}
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl font-mono"
                withAccent
              >
                CLIENT FEEDBACK
              </CircuitHeading>
              <p className="text-lg text-slate-700">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CircuitCard className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl text-primary font-mono">"</div>
                  <blockquote className="mb-6 text-slate-700">
                    Thinkfinitylabs transformed our manufacturing process with their industrial automation solutions.
                    We've seen a significant increase in efficiency and reduction in errors.
                  </blockquote>
                </CardContent>
                <CardFooter className="border-t border-primary/20 p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold font-mono">RK</span>
                    </div>
                    <div>
                      <div className="font-medium font-mono text-slate-800">RAJESH KUMAR</div>
                      <div className="text-sm text-slate-600">Operations Director, Precision Manufacturing Ltd.</div>
                    </div>
                  </div>
                </CardFooter>
              </CircuitCard>
              <CircuitCard className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl text-primary font-mono">"</div>
                  <blockquote className="mb-6 text-slate-700">
                    The team at Thinkfinitylabs delivered our IoT project on time and within budget. Their technical
                    expertise and attention to detail were impressive.
                  </blockquote>
                </CardContent>
                <CardFooter className="border-t border-primary/20 p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold font-mono">AS</span>
                    </div>
                    <div>
                      <div className="font-medium font-mono text-slate-800">ANANYA SHARMA</div>
                      <div className="text-sm text-slate-600">CTO, SmartTech Solutions</div>
                    </div>
                  </div>
                </CardFooter>
              </CircuitCard>
              <CircuitCard className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl text-primary font-mono">"</div>
                  <blockquote className="mb-6 text-slate-700">
                    Working with Thinkfinitylabs on our embedded systems project was a great experience. They understood
                    our requirements perfectly and delivered a solution that exceeded our expectations.
                  </blockquote>
                </CardContent>
                <CardFooter className="border-t border-primary/20 p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold font-mono">MC</span>
                    </div>
                    <div>
                      <div className="font-medium font-mono text-slate-800">MICHAEL CHEN</div>
                      <div className="text-sm text-slate-600">Product Manager, NextGen Devices</div>
                    </div>
                  </div>
                </CardFooter>
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
                  INITIALIZE CONNECTION
                </CircuitHeading>
                <p className="mb-8 text-xl text-slate-700">
                  Let's discuss how we can help you turn your ideas into reality with our expertise in electronics and
                  IoT automation.
                </p>
                <Link href="/contact">
                  <CircuitButton variant="primary" size="lg">
                    CONTACT US
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </CircuitButton>
                </Link>
              </div>
            </div>
          </div>
        </CircuitSection>

        {/* Map Section */}
        <CircuitSection variant="lines">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center bg-white/90 p-6 rounded-lg border border-primary/30">
              <CircuitHeading
                level={2}
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl font-mono"
                withAccent
              >
                OUR LOCATION
              </CircuitHeading>
              <p className="text-lg text-slate-700">
                Visit our office in Bangalore to discuss your project requirements in person.
              </p>
            </div>
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
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">Bangalore Office</h3>
                    <address className="not-italic text-slate-700">
                      <p>Reva Circle, Bangalore</p>
                      <p className="mt-2">Email: info@thinkfinitylabs.com</p>
                      <p className="mt-2">Phone: +91 9876543210</p>
                    </address>
                  </div>
                </div>
              </CardContent>
            </CircuitCard>
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
