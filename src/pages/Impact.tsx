import { Globe2, Target, TrendingUp } from "lucide-react";

export default function Impact() {
  const sdgs = [
    { number: 9, title: "Industry, Innovation & Infrastructure", color: "bg-orange-500" },
    { number: 10, title: "Reduced Inequalities", color: "bg-pink-500" },
    { number: 16, title: "Peace, Justice & Strong Institutions", color: "bg-blue-600" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Global <span className="text-gradient-primary">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving sustainable change through blockchain technology and transparent governance
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-lg bg-card border border-border">
              <div className="text-5xl font-bold text-gradient-primary mb-2">4.4B</div>
              <p className="text-muted-foreground text-lg">People without digital ID</p>
              <p className="text-sm text-muted-foreground mt-2">Source: World Bank</p>
            </div>
            <div className="text-center p-8 rounded-lg bg-card border border-border">
              <div className="text-5xl font-bold text-gradient-secondary mb-2">350M</div>
              <p className="text-muted-foreground text-lg">Tons of plastic waste yearly</p>
              <p className="text-sm text-muted-foreground mt-2">Opportunity for carbon credits</p>
            </div>
            <div className="text-center p-8 rounded-lg bg-card border border-border">
              <div className="text-5xl font-bold text-gradient-primary mb-2">170M</div>
              <p className="text-muted-foreground text-lg">Population of Bangladesh</p>
              <p className="text-sm text-muted-foreground mt-2">Initial deployment region</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              The Challenge We Address
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Billions lack secure digital identities, limiting access to essential services. 
              Traditional governance systems lack transparency, and environmental efforts go unrewarded. 
              SOVERA creates blockchain solutions that tackle these interconnected challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex p-4 rounded-full gradient-primary mb-6 glow">
                <Globe2 className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                From Bangladesh to Global Scale
              </h2>
              <p className="text-lg text-muted-foreground">
                Starting in Bangladesh, scaling to serve billions worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-lg border border-border bg-background">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <Target className="h-6 w-6 text-primary mr-2" />
                  Phase 1: Bangladesh
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deploy digital identity system for 170M citizens</li>
                  <li>• Implement e-governance infrastructure</li>
                  <li>• Launch sustainability rewards program</li>
                  <li>• Partner with government agencies</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <TrendingUp className="h-6 w-6 text-secondary mr-2" />
                  Phase 2: Global Expansion
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Expand to South Asian markets</li>
                  <li>• International partnerships</li>
                  <li>• Cross-border credential recognition</li>
                  <li>• Scale to serve 4.4B unidentified individuals</li>
                </ul>
              </div>
            </div>

            <div className="p-8 rounded-lg gradient-mesh border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Projected Impact by 2030
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1B+</div>
                  <p className="text-muted-foreground">Digital Identities Created</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">500M+</div>
                  <p className="text-muted-foreground">Secure Votes Cast</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">100M</div>
                  <p className="text-muted-foreground">Tons CO₂ Credits Generated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UN SDGs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Supporting UN Sustainable Development Goals
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              SOVERA directly contributes to achieving the United Nations' 2030 Agenda
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sdgs.map((sdg) => (
                <div
                  key={sdg.number}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all"
                >
                  <div className={`w-16 h-16 ${sdg.color} rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                    {sdg.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">SDG {sdg.number}</h3>
                  <p className="text-muted-foreground">{sdg.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-lg gradient-primary text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
              <p className="text-white/90 mb-6">
                Together, we can create a more transparent, equitable, and sustainable future for all
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://sdgs.un.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Learn About SDGs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
