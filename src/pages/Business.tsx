import { Building2, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Business() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Business & <span className="text-gradient-primary">Integration</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamless integration solutions for governments, enterprises, and citizens
          </p>
        </div>
      </section>

      {/* For Governments */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex p-4 rounded-full gradient-primary mb-6 glow">
                <Building2 className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                For Governments
              </h2>
              <p className="text-lg text-muted-foreground">
                Modernize public services with secure, transparent, and efficient digital infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">Secure Verification</h3>
                <p className="text-muted-foreground">
                  Streamline citizen identity verification with blockchain-backed credentials. 
                  Reduce fraud and improve service delivery efficiency.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">Digital E-Services</h3>
                <p className="text-muted-foreground">
                  Enable citizens to access government services online with secure, verifiable digital identities.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">Transparent Governance</h3>
                <p className="text-muted-foreground">
                  Implement secure e-voting and decision-making systems with full audit trails and transparency.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">Data Sovereignty</h3>
                <p className="text-muted-foreground">
                  Maintain complete control over citizen data with decentralized storage and blockchain security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Enterprises */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex p-4 rounded-full gradient-secondary mb-6 glow">
                <Globe className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                For Enterprises
              </h2>
              <p className="text-lg text-muted-foreground">
                Integrate powerful identity verification and compliance solutions into your applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-background hover:border-secondary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">Identity Verification API</h3>
                <p className="text-muted-foreground">
                  Integrate our REST API for instant identity verification with blockchain-backed credentials.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background hover:border-secondary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">KYC Compliance</h3>
                <p className="text-muted-foreground">
                  Streamline Know Your Customer processes with verifiable digital identities and automated checks.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background hover:border-secondary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">Credential Issuance</h3>
                <p className="text-muted-foreground">
                  Issue and verify professional credentials, certifications, and licenses on the blockchain.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background hover:border-secondary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">White-Label Solutions</h3>
                <p className="text-muted-foreground">
                  Deploy our platform with your branding for custom identity and governance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Citizens */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex p-4 rounded-full gradient-accent mb-6 glow">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                For Citizens
              </h2>
              <p className="text-lg text-muted-foreground">
                One digital wallet for all your government services and credentials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg border border-border bg-card">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Secure Storage</h3>
                <p className="text-muted-foreground">
                  Store all your credentials securely in one place with end-to-end encryption
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border border-border bg-card">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Easy Access</h3>
                <p className="text-muted-foreground">
                  Access all public services with a single digital identity across platforms
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border border-border bg-card">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Full Control</h3>
                <p className="text-muted-foreground">
                  Own your data and decide who can access your credentials and when
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Architecture */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Seamless Integration Architecture
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              SOVERA connects blockchain infrastructure with existing systems through modular APIs and SDKs
            </p>

            <div className="relative py-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="px-8 py-6 rounded-lg gradient-primary text-white font-semibold glow">
                  Blockchain Layer
                </div>
                <ArrowRight className="h-8 w-8 text-primary transform md:rotate-0 rotate-90" />
                <div className="px-8 py-6 rounded-lg gradient-secondary text-white font-semibold glow">
                  SOVERA Platform
                </div>
                <ArrowRight className="h-8 w-8 text-secondary transform md:rotate-0 rotate-90" />
                <div className="px-8 py-6 rounded-lg gradient-accent text-white font-semibold glow">
                  Your Systems
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              Our platform bridges blockchain technology with traditional systems, ensuring compatibility 
              while maintaining security and transparency.
            </p>

            <Link to="/contact">
              <Button variant="gradient-primary" size="lg">
                Request Integration Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
