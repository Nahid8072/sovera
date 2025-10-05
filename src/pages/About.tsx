import { CheckCircle2 } from "lucide-react";

export default function About() {
  const timeline = [
    { year: "Phase 1", title: "Secure Identity", description: "Self-sovereign identity infrastructure" },
    { year: "Phase 2", title: "Transparent Governance", description: "E-voting and civic participation systems" },
    { year: "Phase 3", title: "Sustainable Innovation", description: "Carbon credits and eco-rewards platform" },
    { year: "Phase 4", title: "Global Scale", description: "International expansion and partnerships" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gradient-primary">SOVERA</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redefining how citizens, governments, and institutions build trust in the digital age
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              To create blockchain-powered systems that enable secure identity, transparent governance, 
              and sustainable innovation for a better future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Trust</h3>
                <p className="text-muted-foreground">Building verifiable digital trust through blockchain</p>
              </div>
              <div className="text-center p-6">
                <CheckCircle2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Transparency</h3>
                <p className="text-muted-foreground">Enabling open and auditable governance systems</p>
              </div>
              <div className="text-center p-6">
                <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Transformation</h3>
                <p className="text-muted-foreground">Driving sustainable change through innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Trust Matters
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                In an increasingly digital world, trust is the foundation of every interaction between 
                citizens, governments, and institutions. Yet traditional systems often lack transparency, 
                creating barriers to progress and participation.
              </p>
              <p className="mb-4">
                SOVERA leverages blockchain technology to create immutable, verifiable records that 
                enable true digital trust. Our platform ensures that identity credentials are secure, 
                governance processes are transparent, and sustainability efforts are measurable and rewarded.
              </p>
              <p>
                By putting citizens in control of their data and giving governments tools for transparent 
                operations, we're building a foundation for a more equitable and sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            The SOVERA Vision
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-20">
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold glow">
                      {index + 1}
                    </div>
                    <div className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                      <span className="text-sm font-semibold text-primary">{item.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white mb-4 max-w-3xl mx-auto">
            "Technology is nothing without people."
          </blockquote>
          <p className="text-white/80 text-lg">Building systems that serve humanity</p>
        </div>
      </section>
    </div>
  );
}
