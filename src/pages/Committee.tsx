import { Users } from "lucide-react";

export default function Committee() {
  const members = [
    {
      name: "Fardin Hasan Siam",
      role: "Founder & CEO",
      gradient: "gradient-primary",
    },
    {
      name: "Nahid Hasan Ratul",
      role: "Co-Founder & CTO",
      gradient: "gradient-secondary",
    },
    {
      name: "Fariha Ahmed Efty",
      role: "System Designer",
      gradient: "gradient-accent",
    },
    {
      name: "Hamim Mahmud",
      role: "Co-Ordinator",
      gradient: "gradient-primary",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-4 rounded-full gradient-primary mb-6 glow">
            <Users className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-gradient-primary">Committee</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the team driving innovation in blockchain-powered governance
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {members.map((member, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`inline-flex p-4 rounded-full ${member.gradient} mb-6 glow`}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
