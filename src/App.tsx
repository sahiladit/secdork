import {
  Shield,
  Search,
  Network,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    title: "Exposure Monitoring",
    description:
      "Continuously discover leaked credentials, breached accounts, and exposed records.",
    icon: Shield,
  },
  {
    title: "OSINT Intelligence",
    description:
      "Map public attack surfaces, identities, domains, and digital footprints.",
    icon: Search,
  },
  {
    title: "Dependency Graph",
    description:
      "Visualize vendor relationships and risk propagation across your ecosystem.",
    icon: Network,
  },
  {
    title: "AI Security Advisor",
    description:
      "Receive prioritized remediation guidance powered by AI.",
    icon: Brain,
  },
];

export default function LandingPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-hidden">
      <AnimatedBackground />

      <Navbar />

      <main>
        <HeroSection />

        <FeatureSection />

        <ProductPreviewSection />


        <PricingSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="sticky top-0 z-50 px-6 pt-4">
      <div className="mx-auto max-w-7xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
        <div className="h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-lg">Secdork</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-zinc-400">
            <a href="#">Features</a>
            <a href="#">Solutions</a>
            <a href="#">Pricing</a>
            <a href="#">Docs</a>
          </div>

          <div className="flex gap-3">
            <button className="text-sm text-zinc-300">
              Sign In
            </button>

            <button className="px-4 py-2 rounded-xl bg-white text-black font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
            Discover
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Your Hidden
            </span>
            Exposure
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-xl text-zinc-400">
            Continuously monitor breaches, vendor risks, digital footprints,
            and attack surface exposure from a single intelligence platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="px-7 py-4 rounded-xl bg-white text-black font-semibold flex items-center gap-2 justify-center">
              Start Free Scan
              <ArrowRight size={18} />
            </button>

            <button className="px-7 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
              Book Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



function FeatureSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold">
          Security Intelligence Suite
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title} id="int_suite"
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <feature.icon className="h-10 w-10 text-cyan-400" />

              <h3 className="mt-5 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPreviewSection() {
  return (
    <section className="px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-16">
          Identify Data Breaches before they happen.
        </h2>

        <div className="space-y-10">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[450px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl flex items-center justify-center"
            >
              <span className="text-zinc-500 text-lg">
                Product Screenshot Placeholder
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function PricingSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-12">
          <h2 className="text-center text-5xl font-bold">
            Simple Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {["Starter", "Growth", "Enterprise"].map((plan) => (
              <div
                key={plan}
                className="rounded-3xl border border-white/10 p-8"
              >
                <h3 className="text-2xl font-semibold">{plan}</h3>

                <div className="text-5xl font-bold mt-6">
                  {plan === "Enterprise" ? "Custom" : "$99"}
                </div>

                <div className="space-y-4 mt-8">
                  {[1, 2, 3, 4].map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 size={18} />
                      Security Monitoring
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 py-28">
      <div className="max-w-5xl mx-auto text-center rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-16">
        <h2 className="text-5xl font-bold">
          See Your Exposure Before Attackers Do
        </h2>

        <p className="text-zinc-400 mt-6">
          Start monitoring breaches, vendors, and attack surfaces in minutes.
        </p>

        <button className="mt-10 px-8 py-4 rounded-xl bg-white text-black font-semibold">
          Start Free Scan
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <div className="text-2xl font-bold">Secdork</div>
          <p className="text-zinc-500 mt-3">
            Cybersecurity intelligence platform.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10 md:mt-0">
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <div className="space-y-2 text-zinc-500">
              <div>Features</div>
              <div>Pricing</div>
              <div>Docs</div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <div className="space-y-2 text-zinc-500">
              <div>About</div>
              <div>Blog</div>
              <div>Careers</div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <div className="space-y-2 text-zinc-500">
              <div>Privacy</div>
              <div>Terms</div>
              <div>Security</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
}