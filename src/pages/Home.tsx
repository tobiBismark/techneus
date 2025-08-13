import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Phone, Star, Users, Award, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { PremiumCard } from "@/components/ui/premium-card";
import { SEOHead } from "@/components/seo/SEOHead";
import { StructuredData } from "@/components/seo/StructuredData";
import heroImage from "@/assets/hero-bg.jpg";
import teamImage from "@/assets/team-hero.jpg";

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Premium websites and web applications built with cutting-edge technologies.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Fire & Safety Services",
      description: "Comprehensive fire safety solutions and compliance services for businesses.",
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "VoIP Solutions",
      description: "Advanced call center and IP PBX systems for seamless communication.",
      color: "text-green-500"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Satisfied Clients" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Zap, number: "1000+", label: "Projects Completed" },
    { icon: Star, number: "4.9", label: "Client Rating" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Technexus delivered exceptional results. Their professionalism and expertise exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager, SafeTech",
      content: "The fire safety systems they installed are top-notch. Outstanding service and support.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "IT Director, CallCenter Pro",
      content: "Their VoIP solution transformed our communication infrastructure. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Premium Technology Solutions Nigeria - Web Development, Fire Safety & VoIP"
        description="Transform your business with Technexus Solutions Limited. Leading Nigerian tech company offering premium web development, fire & safety services, and VoIP solutions. Contact us today!"
        keywords="Nigeria technology company, web development Lagos, fire safety services Nigeria, VoIP solutions Nigeria, business automation, SaaS solutions, Technexus Solutions"
      />
      <StructuredData />
      <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-luxury-navy/70 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 text-center text-luxury-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Premium Technology
            <span className="text-gradient-gold block mt-2">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-luxury-gray mb-8 animate-fade-in-up animation-delay-200">
            Elevating businesses with exceptional web development, fire & safety services, 
            and cutting-edge VoIP solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link to="/services">
              <Button className="btn-gold text-lg px-8 py-4">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/store">
              <Button className="btn-outline-gold text-lg px-8 py-4">
                Visit SaaS Store
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Our <span className="text-gradient-gold">Premium Services</span>
            </h2>
            <p className="text-xl text-luxury-gray max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <PremiumCard key={service.title} className="group text-center" glow>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-luxury-gold/20 to-luxury-gold/10 mb-6 animate-float`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-luxury-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services">
                  <Button variant="outline" className="group-hover:btn-gold transition-all duration-300 hover-shimmer">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-luxury-navy text-luxury-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/20 mb-4 animate-float" 
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <stat.icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <AnimatedCounter 
                  value={stat.number}
                  className="font-playfair text-4xl font-bold text-luxury-gold mb-2"
                />
                <p className="text-luxury-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
                Excellence in Every 
                <span className="text-gradient-gold block">Solution</span>
              </h2>
              <p className="text-lg text-luxury-gray mb-6 leading-relaxed">
                At Technexus Solutions Limited, we combine years of expertise with cutting-edge 
                technology to deliver premium solutions that drive business success. Our commitment 
                to excellence and innovation sets us apart in the industry.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-luxury-gray">Industry-leading expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-luxury-gray">24/7 dedicated support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-luxury-gray">Cutting-edge technology solutions</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="btn-gold">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={teamImage} 
                alt="Our professional team" 
                className="rounded-2xl shadow-luxury w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-luxury-gray-light/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              What Our <span className="text-gradient-gold">Clients Say</span>
            </h2>
            <p className="text-xl text-luxury-gray max-w-2xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <PremiumCard key={testimonial.name} className="animate-fade-in-up" 
                          style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-luxury-gold text-luxury-gold animate-float" 
                          style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-luxury-gray italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-luxury-navy">{testimonial.name}</h4>
                  <p className="text-sm text-luxury-gray">{testimonial.role}</p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-luxury text-luxury-white">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-luxury-gray mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Technexus Solutions for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-gold text-lg px-8 py-4">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/store">
              <Button variant="outline" className="btn-outline-gold text-lg px-8 py-4">
                Browse Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;