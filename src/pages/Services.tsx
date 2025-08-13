import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Shield, 
  Phone, 
  Code, 
  Smartphone, 
  Database, 
  Flame, 
  AlertTriangle, 
  FileCheck, 
  Headphones, 
  PhoneCall, 
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const webServices = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Bespoke websites and web applications tailored to your business needs.",
      features: ["React & Next.js", "Full-stack Development", "API Integration", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first designs that work perfectly across all devices and screen sizes.",
      features: ["Mobile Optimization", "Cross-browser Compatibility", "Progressive Web Apps", "User Experience Design"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      description: "Robust backend systems and database solutions for scalable applications.",
      features: ["Cloud Infrastructure", "Database Design", "Security Implementation", "Scalable Architecture"]
    }
  ];

  const safetyServices = [
    {
      icon: Flame,
      title: "Fire Safety Systems",
      description: "Complete fire detection, suppression, and alarm system installation and maintenance.",
      features: ["Fire Alarm Systems", "Sprinkler Systems", "Emergency Lighting", "Fire Extinguishers"]
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Comprehensive fire risk assessments and safety audits for your premises.",
      features: ["Risk Analysis", "Compliance Reports", "Safety Planning", "Regular Inspections"]
    },
    {
      icon: FileCheck,
      title: "Compliance & Training",
      description: "Ensure full compliance with fire safety regulations and staff training programs.",
      features: ["Regulatory Compliance", "Staff Training", "Documentation", "Certification Support"]
    }
  ];

  const voipServices = [
    {
      icon: PhoneCall,
      title: "Call Center Solutions",
      description: "Complete call center setup with advanced routing and management features.",
      features: ["Call Routing", "Queue Management", "Analytics & Reporting", "CRM Integration"]
    },
    {
      icon: Headphones,
      title: "IP PBX Systems",
      description: "Modern IP-based phone systems for seamless business communication.",
      features: ["VoIP Technology", "Unified Communications", "Video Conferencing", "Mobile Integration"]
    },
    {
      icon: Settings,
      title: "Communication Infrastructure",
      description: "End-to-end communication solutions including setup, configuration, and support.",
      features: ["Network Setup", "Security Configuration", "24/7 Support", "Maintenance Services"]
    }
  ];

  const ServiceSection = ({ 
    title, 
    subtitle, 
    services, 
    bgColor = "bg-background" 
  }: { 
    title: string; 
    subtitle: string; 
    services: any[]; 
    bgColor?: string;
  }) => (
    <section className={`section-padding ${bgColor}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
            {title}
          </h2>
          <p className="text-xl text-luxury-gray max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="card-luxury group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-luxury-gold/20 to-luxury-gold/10 mb-6 group-hover:animate-glow">
                  <service.icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-luxury-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-luxury-gray">
                      <CheckCircle className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full btn-outline-gold group-hover:btn-gold transition-all duration-300">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-luxury text-luxury-white">
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Premium <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-luxury-gray max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Comprehensive technology solutions designed to elevate your business to new heights of success.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="card-luxury text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold mb-6 group-hover:animate-glow">
                  <Globe className="h-10 w-10 text-luxury-black" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">Web Development</h3>
                <p className="text-luxury-gray">Custom websites and applications built with modern technologies</p>
              </CardContent>
            </Card>

            <Card className="card-luxury text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold mb-6 group-hover:animate-glow">
                  <Shield className="h-10 w-10 text-luxury-black" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">Fire & Safety</h3>
                <p className="text-luxury-gray">Comprehensive fire safety solutions and compliance services</p>
              </CardContent>
            </Card>

            <Card className="card-luxury text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold mb-6 group-hover:animate-glow">
                  <Phone className="h-10 w-10 text-luxury-black" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">VoIP Solutions</h3>
                <p className="text-luxury-gray">Advanced communication systems for modern businesses</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <ServiceSection
        title="Web Development Solutions"
        subtitle="Modern, scalable web applications that drive business growth"
        services={webServices}
        bgColor="bg-luxury-gray-light/30"
      />

      {/* Fire & Safety Services */}
      <ServiceSection
        title="Fire & Safety Services"
        subtitle="Complete fire safety solutions to protect your business and ensure compliance"
        services={safetyServices}
        bgColor="bg-background"
      />

      {/* VoIP Services */}
      <ServiceSection
        title="VoIP Communication Solutions"
        subtitle="Advanced communication systems that enhance productivity and collaboration"
        services={voipServices}
        bgColor="bg-luxury-gray-light/30"
      />

      {/* Process Section */}
      <section className="section-padding bg-luxury-navy text-luxury-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient-gold">Process</span>
            </h2>
            <p className="text-xl text-luxury-gray max-w-2xl mx-auto">
              A proven methodology that ensures project success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your needs and objectives" },
              { step: "02", title: "Planning", description: "Developing a comprehensive project strategy" },
              { step: "03", title: "Implementation", description: "Executing the solution with precision" },
              { step: "04", title: "Support", description: "Ongoing maintenance and optimization" }
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold text-luxury-black font-bold text-xl mb-4">
                  {phase.step}
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-luxury-gray">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
            Ready to Get <span className="text-gradient-gold">Started?</span>
          </h2>
          <p className="text-xl text-luxury-gray mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-gold text-lg px-8 py-4">
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/store">
              <Button variant="outline" className="btn-outline-gold text-lg px-8 py-4">
                View SaaS Store
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;