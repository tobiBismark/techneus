import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Terms of <span className="text-gradient-gold">Service</span>
            </h1>
            <p className="text-xl text-luxury-gray">
              Please read these terms carefully. Last updated: December 2024
            </p>
          </div>

          <Card className="card-luxury">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-luxury-gray leading-relaxed">
                  By accessing and using Technexus Solutions Limited's services, you accept and agree to be 
                  bound by the terms and provision of this agreement. If you do not agree to abide by these 
                  terms, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Use License
                </h2>
                <p className="text-luxury-gray leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of our materials for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-2 text-luxury-gray">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                    <span>Modify or copy the materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                    <span>Use the materials for any commercial purpose</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                    <span>Attempt to reverse engineer any software</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Service Description
                </h2>
                <p className="text-luxury-gray leading-relaxed">
                  Technexus Solutions Limited provides web development, fire & safety services, VoIP solutions, 
                  and SaaS products. We reserve the right to modify or discontinue services at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Privacy Policy
                </h2>
                <p className="text-luxury-gray leading-relaxed">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
                  protect your information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-luxury-gray leading-relaxed">
                  In no event shall Technexus Solutions Limited or its suppliers be liable for any damages 
                  arising out of the use or inability to use our services, even if we have been notified 
                  orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Contact Information
                </h2>
                <p className="text-luxury-gray leading-relaxed">
                  Questions about the Terms of Service should be sent to us at legal@technexussolutions.com
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;