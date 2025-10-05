import { Shield, Vote, Leaf, Lock, Eye, Award } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import identityImg from "@/assets/dashboard-identity.jpg";
import votingImg from "@/assets/dashboard-voting.jpg";
import rewardsImg from "@/assets/dashboard-rewards.jpg";

export default function Platform() {
  const features = [
    {
      icon: Shield,
      title: "Self-Sovereign Identity",
      description: "Create and manage your digital identity with complete ownership and control over your credentials",
    },
    {
      icon: Lock,
      title: "Blockchain Security",
      description: "Military-grade encryption with immutable blockchain records ensuring data integrity",
    },
    {
      icon: Eye,
      title: "Transparent Verification",
      description: "Instantly verify credentials with cryptographic proofs and public auditability",
    },
    {
      icon: Vote,
      title: "Secure E-Voting",
      description: "Tamper-proof voting systems with verifiable results and anonymous participation",
    },
    {
      icon: Award,
      title: "Digital Credentials",
      description: "Issue and verify educational, professional, and civic credentials on-chain",
    },
    {
      icon: Leaf,
      title: "Sustainability Rewards",
      description: "Track eco-friendly actions and earn verified carbon credits automatically",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            The <span className="text-gradient-primary">SOVERA</span> Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blockchain-powered ecosystem for secure identity, transparent governance, and sustainable innovation
          </p>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Core Modules
          </h2>

          {/* Module 1: Secure Identity */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex p-3 rounded-lg gradient-primary mb-4 glow">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Secure Identity</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Own and control your digital credentials with our self-sovereign identity system. 
                  Create verifiable credentials, share them selectively, and maintain complete privacy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Decentralized Identifiers (DIDs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">QR code verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Zero-knowledge proofs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Cross-platform compatibility</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src={identityImg}
                  alt="Identity Dashboard"
                  className="rounded-lg shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>

          {/* Module 2: Transparent Governance */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src={votingImg}
                  alt="Voting Dashboard"
                  className="rounded-lg shadow-2xl border border-border"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex p-3 rounded-lg gradient-secondary mb-4 glow">
                  <Vote className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Transparent Governance</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Enable trusted e-voting and civic participation with immutable blockchain records. 
                  Every vote is secure, verifiable, and anonymous.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-muted-foreground">End-to-end encrypted voting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-muted-foreground">Real-time result verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-muted-foreground">Audit trail generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-muted-foreground">Multi-signature approval</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Module 3: Sustainable Innovation */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex p-3 rounded-lg gradient-accent mb-4 glow">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Sustainable Innovation</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Reward eco-actions and generate verified carbon credits on the blockchain. 
                  Track environmental impact and incentivize sustainable behavior.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted-foreground">Carbon credit tokenization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted-foreground">Eco-action tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted-foreground">Reward voucher generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted-foreground">Impact analytics dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src={rewardsImg}
                  alt="Rewards Dashboard"
                  className="rounded-lg shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
