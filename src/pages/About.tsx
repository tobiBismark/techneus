import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, ArrowRight } from "lucide-react";
import teamImage from "@/assets/team-hero.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for perfection in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working closely with our clients to understand their unique needs and challenges.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "Embracing cutting-edge technologies to provide forward-thinking solutions.",
    },
  ];

  const team = [
    {
      name: "Abubakar Umaru",
      role: "COO & Co-Founder",
      bio: "20+ years of experience in technology leadership and business strategy.",
      image: teamImage,
    },
    {
      name: "Oluwatobiloba Idowu-Bismark",
      role: "CTO & Co-Founder",
      bio: "Expert in web development and system architecture with a passion for innovation.",
      image: teamImage,
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Safety Services",
      bio: "Certified fire safety expert with extensive experience in compliance and safety systems.",
      image: teamImage,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-luxury text-luxury-white">
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About <span className="text-gradient-gold">Technexus</span>
          </h1>
          <p className="text-xl md:text-2xl text-luxury-gray max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Leading the future of technology solutions with innovation,
            expertise, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-luxury-gray leading-relaxed">
                <p>
                  Founded in 2023, Technexus Solutions Limited began with a
                  simple vision: to bridge the gap between cutting-edge
                  technology and practical business solutions. What started as a
                  small team of passionate developers has grown into a
                  comprehensive technology solutions provider.
                </p>
                <p>
                  Today, we proudly serve clients across various
                  industries, providing premium web development, essential fire
                  & safety services, and advanced VoIP communication solutions.
                  Our commitment to excellence and innovation has earned us
                  recognition as an industry leader.
                </p>
                <p>
                  We believe that technology should empower businesses, not
                  complicate them. That's why every solution we deliver is
                  tailored to meet specific business needs while maintaining the
                  highest standards of quality and reliability.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img
                src={teamImage}
                alt="Our team at work"
                className="rounded-2xl shadow-luxury w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-luxury-gray-light/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="card-luxury">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-6">
                  <Target className="h-8 w-8 text-luxury-black" />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-luxury-navy mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-luxury-gray leading-relaxed">
                  To empower businesses with innovative technology solutions
                  that drive growth, enhance safety, and improve communication.
                  We are committed to delivering exceptional value through our
                  expertise in web development, fire safety, and VoIP
                  technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="card-luxury">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-6">
                  <Eye className="h-8 w-8 text-luxury-black" />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-luxury-navy mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-luxury-gray leading-relaxed">
                  To be the global leader in integrated technology solutions,
                  setting new standards for innovation, quality, and customer
                  satisfaction. We envision a future where our solutions enable
                  businesses to thrive in an increasingly connected world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-xl text-luxury-gray max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="card-luxury group hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-luxury-gold/20 to-luxury-gold/10 mb-6 group-hover:animate-glow">
                    <value.icon className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-luxury-gray leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-luxury-navy text-luxury-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Leadership <span className="text-gradient-gold">Team</span>
            </h2>
            <p className="text-xl text-luxury-gray max-w-2xl mx-auto">
              Meet the visionaries driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="bg-luxury-navy-light border-luxury-gray-light/20 hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-luxury-gold"
                  />
                  <h3 className="font-playfair text-2xl font-bold text-luxury-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-luxury-gray leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
            Ready to Work <span className="text-gradient-gold">Together?</span>
          </h2>
          <p className="text-xl text-luxury-gray mb-8 max-w-2xl mx-auto">
            Let's discuss how Technexus Solutions can help transform your
            business with our premium technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-gold text-lg px-8 py-4">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="btn-outline-gold text-lg px-8 py-4"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
