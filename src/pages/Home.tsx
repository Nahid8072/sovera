import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Vote, Leaf } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Blockchain network visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          <div className="absolute inset-0 gradient-mesh opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Building blockchain-powered trust
              <br />
              <span className="text-gradient-primary">for a transparent world</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              SOVERA is a next-gen GovTech SaaS empowering governments, citizens, and institutions through secure identity and open governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/platform">
                <Button variant="hero" size="xl" className="group">
                  Explore Platform
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                Request to Join Beta
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Three Pillars of <span className="text-gradient-primary">Digital Trust</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering a new era of transparent governance and sustainable innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex p-4 rounded-full gradient-primary mb-6 glow group-hover:glow-lg transition-all duration-300">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Secure Identity</h3>
              <p className="text-muted-foreground">
                Own and control your digital credentials with blockchain-powered self-sovereign identity
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-4 rounded-full gradient-secondary mb-6 glow group-hover:glow-lg transition-all duration-300">
                <Vote className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparent Governance</h3>
              <p className="text-muted-foreground">
                Enable trusted e-voting and civic participation with immutable records
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-4 rounded-full gradient-accent mb-6 glow group-hover:glow-lg transition-all duration-300">
                <Leaf className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Sustainable Innovation</h3>
              <p className="text-muted-foreground">
                Reward eco-actions and generate verified carbon credits on the blockchain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Digital Trust?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join governments and institutions building the future of transparent governance
          </p>
          <Link to="/contact">
            <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-0">
              Partner with SOVERA
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
