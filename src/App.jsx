import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, Code, Smartphone, BarChart3, Star, Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

// Projects
function ProjectsSection() {
  const projects = [
    { title: "WalkMeTru AI – Context-Aware Task Guidance Engine", category: "Artificial Intelligence", description: "Enterprise-grade real-time adaptive AI assistant combining NLP, computer vision, OCR, and reinforcement learning.", technologies: ["Python", "TensorFlow", "Transformers", "OCR"], impact: "40–60% productivity increase | UK research deployment" },
    { title: "Flicks Enterprise Automation Suite", category: "Full-Stack Development", description: "Scalable process automation platform eliminating manual workflows across logistics and operations.", technologies: ["React", "TypeScript", "Python", "FastAPI"], impact: "68% cost reduction | ₦18M+ annual savings" },
    { title: "National Advocacy Intelligence Platform", category: "NLP & Analytics", description: "Real-time sentiment engine processing 50,000+ social posts daily with hybrid BERT + ML models.", technologies: ["Python", "Hugging Face", "Streamlit"], impact: "92.4% accuracy | IEEE-level research" },
    { title: "Foodah – Nationwide Food Delivery Ecosystem", category: "Mobile Development", description: "High-performance native Android platform with live tracking and payment gateway.", technologies: ["Kotlin", "Firebase", "Google Maps"], impact: "1,200+ users | ₦45M+ transactions" }
  ];

  const [selected, setSelected] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);

  return (
    <section id="projects" className="py-32 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">Proven <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span></h2>
          <p className="text-xl text-gray-400">Enterprise systems that deliver measurable impact</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelected(cat)} className={`px-8 py-3 rounded-full font-medium transition ${selected === cat ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {filtered.map((p, i) => (
            <div key={i} className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-10 hover:border-cyan-500/70 transition-all hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/10">
              <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full">{p.category}</span>
              <h3 className="text-2xl font-bold mt-6 mb-4">{p.title}</h3>
              <p className="text-gray-300 mb-8">{p.description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {p.technologies.map(t => <span key={t} className="text-xs bg-gray-800 px-4 py-2 rounded-lg">{t}</span>)}
              </div>
              <div className="flex items-center gap-3 text-cyan-400 font-semibold">
                <CheckCircle className="w-6 h-6" /> {p.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function TestimonialsSection() {
  const testimonials = [
    { name: "Dr. Emeka Ogbuju", role: "Federal University Lokoja", content: "Hamd Tech delivers research-grade AI with exceptional depth and real-world applicability." },
    { name: "Chinedu Okeke", role: "CEO, Flicks Solutions", content: "Transformed our entire operation. Professional, reliable, results-driven." },
    { name: "Aisha Bello", role: "Head of Digital, NGO", content: "Gave us strategic insights we never had before. Game-changing technology." }
  ];

  return (
    <section className="py-32 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6">Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Leaders</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-10 hover:border-cyan-500/50 transition">
            <div className="flex gap-1 mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
            <p className="text-gray-200 italic text-lg mb-10">"{t.content}"</p>
            <p className="font-bold">{t.name}</p>
            <p className="text-cyan-400 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// About Section — Simplified for compatibility
function AboutSection() {
  return (
    <section id="about" className="py-32 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6">
          About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Hamd Tech</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto">
          A Nigerian technology powerhouse delivering next-generation AI and enterprise solutions worldwide.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6">
        {/* Text Content */}
        <div className="space-y-8 text-lg text-gray-300">
          <p>
            Hamd Tech specializes in <strong>Artificial Intelligence, Full-Stack Engineering, Mobile Applications, and Advanced Analytics</strong>.
          </p>
          <p>
            We partner with corporations, startups, NGOs, and government bodies to build intelligent systems that drive efficiency and growth.
          </p>
          <p>
            From AI assistants trusted by global research labs to automation platforms saving millions — we deliver technology that performs.
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative rounded-3xl p-12 bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <img
              src="/HamdTechLogo.png"
              alt="Hamd Tech Logo"
              className="w-full max-w-sm lg:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


// Contact Form
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Inquiry%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.service || 'General'}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/2348109026970?text=${text}`, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8 bg-gray-900/60 border border-gray-800 rounded-2xl p-12">
        <div className="grid md:grid-cols-2 gap-8">
          <input required name="name" value={formData.name} onChange={handleChange} placeholder="Full Name / Organization *" className="px-6 py-5 bg-gray-950/50 border border-gray-700 rounded-xl placeholder-gray-500 focus:border-cyan-500 transition" />
          <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Business / Personal Email *" className="px-6 py-5 bg-gray-950/50 border border-gray-700 rounded-xl placeholder-gray-500 focus:border-cyan-500 transition" />
        </div>
        <select name="service" value={formData.service} onChange={handleChange} className="w-full px-6 py-5 bg-gray-950/50 border border-gray-700 rounded-xl focus:border-cyan-500 transition">
          <option value="">Select Service</option>
          <option>AI & Machine Learning</option>
          <option>Full-Stack Platforms</option>
          <option>Mobile Applications</option>
          <option>Data Analytics</option>
          <option>Training</option>
          <option>Others</option>
        </select>
        <textarea required name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="Your Project Requirements *" className="w-full px-6 py-5 bg-gray-950/50 border border-gray-700 rounded-xl placeholder-gray-500 focus:border-cyan-500 transition resize-none"></textarea>
        <button type="submit" className="w-full py-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition flex items-center justify-center gap-3">
          Start Project <ArrowRight className="w-6 h-6" />
        </button>
        {submitted && <div className="p-5 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center">Opening WhatsApp...</div>}
      </form>
    </div>
  );
}

// Updated Footer with Logo
function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="flex items-center gap-4">
          <img 
            src="/HamdTechLogo.png" 
            alt="Hamd Tech Logo" 
            className="h-12 w-auto"
          />
          <div>
            <h3 className="text-2xl font-bold text-white">Hamd Tech</h3>
            <p className="text-gray-400 text-sm">Enterprise AI • Full-Stack • Data Intelligence<br />Nigerian innovation. Global execution.</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Solutions</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#services" className="hover:text-cyan-400 transition">AI & ML</a></li>
            <li><a href="#services" className="hover:text-cyan-400 transition">Full-Stack</a></li>
            <li><a href="#services" className="hover:text-cyan-400 transition">Mobile</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Company</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3"><Mail className="w-5 h-5" /> hamdtechsolutions@gmail.com</li>
            <li className="flex items-center gap-3"><Phone className="w-5 h-5" /> +234 810 902 6970</li>
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5" /> Abuja • Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8 mt-16">
        © 2025 Hamd Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
}

// Main App — LOGO PERFECTLY PLACED
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <Brain className="w-10 h-10" />, title: "Artificial Intelligence & ML", desc: "Context-aware systems, NLP, predictive analytics, reinforcement learning." },
    { icon: <Code className="w-10 h-10" />, title: "Full-Stack Engineering", desc: "Scalable platforms with React, Next.js, Node.js, Python, cloud-native." },
    { icon: <Smartphone className="w-10 h-10" />, title: "Enterprise Mobile Apps", desc: "Native Android & cross-platform apps with real-time features." },
    { icon: <BarChart3 className="w-10 h-10" />, title: "Data Intelligence", desc: "Advanced analytics, sentiment engines, business intelligence." }
  ];

  return (
    <>
      {/* Navigation — LOGO REPLACES TEXT */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO ON THE LEFT */}
          <a href="#home" className="flex items-center">
            <img 
              src="/HamdTechLogo.png" 
              alt="Hamd Tech Logo" 
              className="h-10 w-auto md:h-12 lg:h-14 object-contain transition-all hover:scale-105"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-lg">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden z-50">
            {menuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-950/99 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-2xl lg:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Services</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Projects</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative text-center max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-center">
              Next-Generation
              <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Intelligence Systems
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            We build intelligent, scalable systems for businesses and institutions across Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition flex items-center justify-center gap-3">
              Start a Project <ArrowRight className="w-6 h-6" />
            </a>
            <a href="#projects" className="px-12 py-6 border-2 border-cyan-500 rounded-full font-bold text-xl hover:bg-cyan-500/10 transition">
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Core <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">
          {services.map((s, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 group-hover:from-cyan-500/20 transition">
                {s.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectsSection />
      <TestimonialsSection />
      <AboutSection />

      <section id="contact" className="py-32 bg-gray-950">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-400">Let’s discuss your next initiative.</p>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}