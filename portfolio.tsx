import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Database,
  Globe,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  User,
  GraduationCap,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
    "Programming Languages": [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
    ],
    "Web Technologies": [
      { name: "React", level: "Intermediate" },
      { name: "Node.js", level: "Beginner" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Next.js", level: "Beginner" },
    ],
    "Tools & Platforms": [
      { name: "Git/GitHub", level: "Intermediate" },
      { name: "Docker", level: "Beginner" },
      { name: "AWS", level: "Beginner" },
      { name: "Linux", level: "Intermediate" },
    ],
    "Engineering Software": [
      { name: "MATLAB", level: "Advanced" },
      { name: "AutoCAD", level: "Intermediate" },
      { name: "SolidWorks", level: "Intermediate" },
      { name: "Arduino IDE", level: "Advanced" },
    ],
  }

  const projects = [
    {
      title: "Smart Home Automation System",
      description: "IoT-based home automation using Arduino and mobile app control with real-time monitoring.",
      technologies: ["Arduino", "Python", "React Native", "Firebase"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "Traffic Flow Optimization",
      description: "Machine learning model to predict and optimize traffic patterns using real-world data.",
      technologies: ["Python", "TensorFlow", "Pandas", "OpenCV"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "Renewable Energy Calculator",
      description: "Web application for calculating solar panel efficiency and cost savings for residential use.",
      technologies: ["React", "Node.js", "Chart.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-800">Alex Chen</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Alex Chen</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">
            Engineering Student | Aspiring Developer | Tech Enthusiast
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-300">
            Third-year Computer Engineering student passionate about creating innovative solutions that bridge the gap
            between hardware and software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link href="#projects" className="flex items-center gap-2">
                View Projects
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Contact Me
                <Mail className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-white" />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm Alex Chen, a passionate third-year Computer Engineering student at State University. My journey in
                  engineering began with a curiosity about how technology can solve real-world problems.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I specialize in embedded systems, web development, and machine learning applications. When I'm not
                  coding, you'll find me tinkering with Arduino projects, contributing to open-source software, or
                  exploring the latest developments in sustainable technology.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span>Computer Engineering, Class of 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-800">
                      {category === "Programming Languages" && <Code className="w-5 h-5 text-blue-600" />}
                      {category === "Web Technologies" && <Globe className="w-5 h-5 text-blue-600" />}
                      {category === "Tools & Platforms" && <Database className="w-5 h-5 text-blue-600" />}
                      {category === "Engineering Software" && <Award className="w-5 h-5 text-blue-600" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className={`${
                            skill.level === "Advanced"
                              ? "bg-teal-100 text-teal-800 border-teal-200"
                              : skill.level === "Intermediate"
                                ? "bg-blue-100 text-blue-800 border-blue-200"
                                : "bg-amber-100 text-amber-800 border-amber-200"
                          }`}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-teal-100">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-slate-800">{project.title}</CardTitle>
                    <CardDescription className="text-slate-600">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl mb-12 text-gray-300">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">alex.chen@email.com</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-teal-400" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-amber-400" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">San Francisco, CA</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-6">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
