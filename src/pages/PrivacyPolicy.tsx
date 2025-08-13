import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-4">
              Privacy <span className="text-gradient-gold">Policy</span>
            </h1>
            <p className="text-xl text-luxury-gray">
              Your privacy is important to us. Last updated: December 2024
            </p>
          </div>

          <Card className="card-luxury">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Information We Collect
                </h2>
                <p className="text-luxury-gray leading-relaxed mb-4">
                  At Technexus Solutions Limited, we collect information to provide better services to our users. 
                  This includes:
                </p>
                <ul className="space-y-2 text-luxury-gray">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                    <span>Personal information you provide when contacting us or creating an account</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                    <span>Usage data and analytics to improve our services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                    <span>Technical information about your device and browser</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-luxury-gray leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-luxury-gray">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                    <span>Provide, maintain, and improve our services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                    <span>Communicate with you about our services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                    <span>Ensure security and prevent fraud</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Data Protection
                </h2>
                <p className="text-luxury-gray leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. Your data is stored securely 
                  and is only accessible to authorized personnel.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Third-Party Services
                </h2>
                <p className="text-luxury-gray leading-relaxed">
                  We may use third-party services to help us provide and improve our services. 
                  These services have their own privacy policies, and we encourage you to read them.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl font-bold text-luxury-navy mb-4">
                  Contact Us
                </h2>
                <p className="text-luxury-gray leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@technexussolutions.com or through our contact form.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;