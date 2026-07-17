import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Database, Lock, Zap, Users, Building2, GraduationCap, 
  Stethoscope, Store, CheckCircle, ArrowRight, Menu, X, ChevronDown,
  Server, Cloud, HardDrive, Clock, Globe, Smartphone, Laptop,
  FileText, Receipt, BarChart3, Bell, Search, Settings, Heart,
  BookOpen, Calendar, ClipboardList, TrendingUp, Award, Phone,
  Mail, MapPin, ExternalLink, Star, MessageSquare, Code,
  Fingerprint, Eye, KeyRound, RefreshCw, Layers, Cpu, Wifi
} from 'lucide-react';

// ============================================
// VERTEX CLOUD SOLUTIONS - LANDING PAGE
// Complete Single-Page Application
// ============================================

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', org: '', type: 'school' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'features', 'solutions', 'security', 'compliance', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setShowDemoModal(false);
      setFormSubmitted(false);
      setFormData({ name: '', email: '', org: '', type: 'school' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-vertex-500 to-vertex-700 rounded-xl flex items-center justify-center shadow-lg shadow-vertex-500/30">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  VERTEX
                </span>
                <span className={`text-[10px] font-semibold tracking-[0.2em] -mt-1 transition-colors ${scrolled ? 'text-vertex-600' : 'text-vertex-300'}`}>
                  CLOUD SOLUTIONS
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'features', label: 'Features' },
                { id: 'solutions', label: 'Solutions' },
                { id: 'security', label: 'Security' },
                { id: 'compliance', label: 'Compliance' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium transition-all hover:scale-105 ${
                    activeSection === item.id
                      ? scrolled ? 'text-vertex-600' : 'text-vertex-300'
                      : scrolled ? 'text-slate-600 hover:text-vertex-600' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setShowDemoModal(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-vertex-500 to-vertex-600 text-white text-sm font-semibold rounded-lg shadow-lg shadow-vertex-500/30 hover:shadow-vertex-500/50 hover:scale-105 transition-all"
              >
                Get Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {['home', 'features', 'solutions', 'security', 'compliance'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block w-full text-left px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-vertex-50 hover:text-vertex-600 capitalize"
                >
                  {id}
                </button>
              ))}
              <button
                onClick={() => { setShowDemoModal(true); setIsMenuOpen(false); }}
                className="w-full px-4 py-3 bg-vertex-600 text-white font-semibold rounded-lg mt-2"
              >
                Get Free Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-vertex-950 to-slate-900" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-vertex-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vertex-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-vertex-500/10 border border-vertex-500/20 rounded-full mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-vertex-400 rounded-full animate-pulse" />
                <span className="text-vertex-300 text-sm font-medium">Trusted by 500+ Organizations</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Secure Data
                <span className="block bg-gradient-to-r from-vertex-400 to-vertex-200 bg-clip-text text-transparent">
                  Management
                </span>
                Platform
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                One unified platform for <span className="text-vertex-300 font-semibold">Schools</span>, 
                <span className="text-vertex-300 font-semibold"> Colleges</span>, 
                <span className="text-vertex-300 font-semibold"> Hospitals</span>, and 
                <span className="text-vertex-300 font-semibold"> Small Shops</span>. 
                Store, manage, and secure all your critical data with military-grade encryption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-vertex-500 to-vertex-600 text-white font-semibold rounded-xl shadow-lg shadow-vertex-500/30 hover:shadow-vertex-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo('features')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
                >
                  Explore Features
                </button>
              </div>

              <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-vertex-400 to-vertex-600 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm">4.9/5 from 200+ reviews</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-vertex-500/20 to-vertex-700/20 rounded-3xl border border-vertex-500/20 backdrop-blur-sm" />

                {/* Floating Cards */}
                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Data Encrypted</p>
                      <p className="text-slate-400 text-xs">AES-256 Standard</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-vertex-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-vertex-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">2,500+ Users</p>
                      <p className="text-slate-400 text-xs">Active Now</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">99.9% Uptime</p>
                      <p className="text-slate-400 text-xs">Cloud Infrastructure</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Real-time Sync</p>
                      <p className="text-slate-400 text-xs">Across All Devices</p>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-gradient-to-br from-vertex-500 to-vertex-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-vertex-500/40">
                    <Cloud className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Building2, value: '500+', label: 'Organizations' },
              { icon: Users, value: '50K+', label: 'Active Users' },
              { icon: Database, value: '10M+', label: 'Records Managed' },
              { icon: Shield, value: '100%', label: 'Compliance Rate' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vertex-50 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-vertex-600" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-vertex-100 text-vertex-700 text-sm font-semibold rounded-full mb-4">
              Platform Features
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to
              <span className="text-vertex-600"> Manage Data</span>
            </h2>
            <p className="text-lg text-slate-600">
              Built with enterprise-grade architecture. From small shops to large hospitals, 
              our platform scales with your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Database,
                title: 'Advanced Relational DB',
                desc: 'PostgreSQL-powered 3NF relational structures with composite indexes for sub-millisecond query responses.',
                color: 'blue'
              },
              {
                icon: Lock,
                title: 'Row-Level Security',
                desc: 'PostgreSQL RLS + Casbin RBAC ensures users only access data they are authorized to view or modify.',
                color: 'emerald'
              },
              {
                icon: Zap,
                title: 'Real-time Sync',
                desc: 'Offline-first PWA with service workers. Data syncs automatically when connectivity is restored.',
                color: 'amber'
              },
              {
                icon: Server,
                title: 'Cloud-Native Architecture',
                desc: 'Distributed microservices built with NestJS and FastAPI for maximum scalability and resilience.',
                color: 'vertex'
              },
              {
                icon: FileText,
                title: 'Atomic Invoicing',
                desc: 'ACID-compliant transactions ensure billing, inventory, and ledger updates succeed or fail together.',
                color: 'rose'
              },
              {
                icon: BarChart3,
                title: 'Audit Trails',
                desc: 'Immutable logging captures every SELECT, UPDATE, DELETE with timestamp, actor ID, and IP address.',
                color: 'purple'
              },
              {
                icon: Bell,
                title: 'Smart Alerts',
                desc: 'Automated cron jobs monitor inventory and send SMS/WhatsApp alerts for low stock or expiring items.',
                color: 'orange'
              },
              {
                icon: Smartphone,
                title: 'Mobile Responsive',
                desc: 'Fully responsive design works seamlessly on desktops, tablets, and smartphones for on-the-go access.',
                color: 'cyan'
              },
              {
                icon: Globe,
                title: 'Multi-Language Support',
                desc: 'Built-in localization for Hindi, English, and regional languages with GST/HSN billing compliance.',
                color: 'indigo'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 hover:border-vertex-300 hover:shadow-xl hover:shadow-vertex-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color === 'vertex' ? 'vertex' : feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-vertex-100 text-vertex-700 text-sm font-semibold rounded-full mb-4">
              Industry Solutions
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Tailored for Your
              <span className="text-vertex-600"> Industry</span>
            </h2>
            <p className="text-lg text-slate-600">
              Specialized modules designed for the unique data management needs of each sector.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Schools & Colleges */}
            <div className="group relative bg-gradient-to-br from-vertex-50 to-white rounded-3xl p-8 lg:p-10 border border-vertex-100 hover:border-vertex-300 hover:shadow-2xl hover:shadow-vertex-500/10 transition-all duration-500">
              <div className="absolute top-6 right-6 w-16 h-16 bg-vertex-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-vertex-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Schools & Colleges</h3>
              <p className="text-slate-600 mb-6">Complete student lifecycle management from admission to alumni.</p>

              <div className="space-y-4">
                {[
                  { icon: Users, text: 'Student Enrollment & Profiles' },
                  { icon: BookOpen, text: 'Academic Records & Transcripts' },
                  { icon: Calendar, text: 'Attendance & Timetable Management' },
                  { icon: Receipt, text: 'Fee Collection & Receipts' },
                  { icon: BarChart3, text: 'Performance Analytics & Reports' },
                  { icon: MessageSquare, text: 'Parent-Teacher Communication' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-vertex-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-vertex-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-vertex-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Starting from</span>
                  <span className="text-2xl font-bold text-vertex-600">₹2,999<span className="text-sm text-slate-500 font-normal">/month</span></span>
                </div>
              </div>
            </div>

            {/* Hospitals */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 lg:p-10 border border-emerald-100 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
              <div className="absolute top-6 right-6 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8 text-emerald-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Hospitals & Clinics</h3>
              <p className="text-slate-600 mb-6">HL7 FHIR R4 compliant HIMS for modern healthcare facilities.</p>

              <div className="space-y-4">
                {[
                  { icon: Heart, text: 'Patient EMR & Health Records' },
                  { icon: ClipboardList, text: 'OPD/IPD Management' },
                  { icon: FileText, text: 'Prescription & Lab Reports' },
                  { icon: Receipt, text: 'GST Billing & Insurance Claims' },
                  { icon: TrendingUp, text: 'Inventory & Pharmacy Stock' },
                  { icon: Shield, text: 'ABDM Integration Ready' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Starting from</span>
                  <span className="text-2xl font-bold text-emerald-600">₹4,999<span className="text-sm text-slate-500 font-normal">/month</span></span>
                </div>
              </div>
            </div>

            {/* Small Shops */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 lg:p-10 border border-amber-100 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 lg:col-span-2">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Store className="w-8 h-8 text-amber-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Small Shops & Retail</h3>
                  <p className="text-slate-600 mb-6">Simple yet powerful inventory and billing solution for small businesses.</p>

                  <div className="space-y-4">
                    {[
                      { icon: Database, text: 'Product Catalog & Inventory' },
                      { icon: Receipt, text: 'Quick Billing & Invoicing' },
                      { icon: BarChart3, text: 'Sales Analytics & Reports' },
                      { icon: Users, text: 'Customer Database & Loyalty' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-amber-600" />
                        </div>
                        <span className="text-slate-700 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-slate-500">GST Invoice</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">PAID</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Subtotal</span>
                        <span className="font-semibold text-slate-900">₹1,000.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">CGST (9%)</span>
                        <span className="font-semibold text-slate-900">₹90.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">SGST (9%)</span>
                        <span className="font-semibold text-slate-900">₹90.00</span>
                      </div>
                      <div className="border-t border-slate-200 pt-3 flex justify-between">
                        <span className="font-bold text-slate-900">Total</span>
                        <span className="font-bold text-amber-600">₹1,180.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-slate-500">Starting from</span>
                    <span className="text-2xl font-bold text-amber-600">₹999<span className="text-sm text-slate-500 font-normal">/month</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vertex-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-vertex-500/10 border border-vertex-500/20 text-vertex-300 text-sm font-semibold rounded-full mb-4">
              Enterprise Security
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Your Data is
              <span className="text-vertex-400"> Fortress-Protected</span>
            </h2>
            <p className="text-lg text-slate-400">
              Zero-trust architecture with dual-layer encryption, comprehensive audit trails, and OWASP Top 10 mitigation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: 'AES-256 Encryption',
                desc: 'Data at rest encrypted with symmetric AES-256. TLS 1.3 for data in transit.',
                stat: 'Military Grade'
              },
              {
                icon: Fingerprint,
                title: 'RBAC Access Control',
                desc: 'Role-based access with PostgreSQL RLS. Medical staff cannot touch billing data.',
                stat: 'Granular Control'
              },
              {
                icon: Eye,
                title: 'Audit Trails',
                desc: 'Immutable logging of every action. Timestamp, Actor ID, IP, and delta captured.',
                stat: '100% Traceable'
              },
              {
                icon: Clock,
                title: 'Session Timeout',
                desc: 'Auto-logout after 3 minutes of inactivity. JWT tokens purged instantly.',
                stat: '3 Min Timeout'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-vertex-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-vertex-500/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-vertex-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                <div className="inline-flex items-center px-3 py-1 bg-vertex-500/10 rounded-full">
                  <span className="text-vertex-300 text-xs font-semibold">{item.stat}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Security Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {['ISO 27001', 'HIPAA Ready', 'GDPR Compliant', 'OWASP Top 10', 'ABDM Integrated', 'GST Compliant'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <CheckCircle className="w-4 h-4 text-vertex-400" />
                <span className="text-slate-300 text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-vertex-100 text-vertex-700 text-sm font-semibold rounded-full mb-4">
                Regulatory Compliance
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                Built for Indian
                <span className="text-vertex-600"> Regulations</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Fully compliant with Indian healthcare and taxation standards. ABDM sandbox ready, 
                GST/HSN billing logic, and WASA audit preparedness.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: 'ABDM Integration',
                    desc: 'Milestone 1, 2, 3 ready. ABHA creation via Aadhaar OTP, clinical document linking, and consent management.'
                  },
                  {
                    icon: Receipt,
                    title: 'GST & HSN Billing',
                    desc: 'High-precision tax engine with BigInt support. Automatic CGST/SGST split with HSN classification.'
                  },
                  {
                    icon: FileText,
                    title: 'Thermal Print Ready',
                    desc: 'ESC/POS compatible formatting for 80mm thermal printers. Perfect for hospital counters and retail POS.'
                  },
                  {
                    icon: Search,
                    title: 'WASA Audit Ready',
                    desc: 'OWASP ZAP and Burp Suite tested. Zero-finding Web Application Security Assessment reports.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-vertex-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-vertex-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Compliance Dashboard</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-700 text-sm font-semibold">All Systems Green</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Data Encryption', status: 'Active', score: 100 },
                    { label: 'ABDM Integration', status: 'Connected', score: 100 },
                    { label: 'GST Compliance', status: 'Verified', score: 100 },
                    { label: 'Audit Trail', status: 'Logging', score: 100 },
                    { label: 'Session Security', status: 'Enforced', score: 98 },
                    { label: 'Backup Status', status: 'Synced', score: 100 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-slate-700">{item.label}</span>
                          <span className="text-xs font-semibold text-vertex-600">{item.status}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-vertex-400 to-vertex-600 rounded-full transition-all duration-1000"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-bold text-slate-900 w-10 text-right">{item.score}%</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Last Security Scan</span>
                    <span className="text-slate-900 font-semibold">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-slate-500">Next Audit</span>
                    <span className="text-slate-900 font-semibold">15 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-vertex-600 to-vertex-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vertex-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Data?
          </h2>
          <p className="text-xl text-vertex-100 mb-10 max-w-2xl mx-auto">
            Join 500+ organizations already using Vertex Cloud Solutions. 
            Start your 14-day free trial today — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowDemoModal(true)}
              className="group px-8 py-4 bg-white text-vertex-700 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Get Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('features')}
              className="px-8 py-4 bg-vertex-500/30 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-vertex-500/50 hover:scale-105 transition-all"
            >
              Learn More
            </button>
          </div>

          <p className="mt-6 text-vertex-200 text-sm">
            Free setup • No credit card required • 24/7 support
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="inline-block px-4 py-1.5 bg-vertex-100 text-vertex-700 text-sm font-semibold rounded-full mb-4">
                Contact Us
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                Let's Start Your
                <span className="text-vertex-600"> Digital Journey</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Have questions? Our team is ready to help you choose the right solution 
                for your organization.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                  { icon: Mail, label: 'Email', value: 'hello@vertexcloud.in' },
                  { icon: MapPin, label: 'Office', value: 'Bengaluru, Karnataka, India' },
                  { icon: Clock, label: 'Support Hours', value: '24/7 - 365 Days' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-vertex-50 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-vertex-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="text-slate-900 font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vertex-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vertex-500 focus:border-transparent transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Organization Type</label>
                  <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vertex-500 focus:border-transparent transition-all">
                    <option>School / College</option>
                    <option>Hospital / Clinic</option>
                    <option>Retail Shop / Business</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vertex-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button 
                  type="button"
                  className="w-full py-4 bg-gradient-to-r from-vertex-500 to-vertex-600 text-white font-semibold rounded-xl shadow-lg shadow-vertex-500/30 hover:shadow-vertex-500/50 hover:scale-[1.02] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-vertex-500 to-vertex-700 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold">VERTEX</span>
              </div>
              <p className="text-sm leading-relaxed">
                Secure cloud data management for schools, hospitals, and businesses across India.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollTo('solutions')} className="hover:text-vertex-400 transition-colors">Schools & Colleges</button></li>
                <li><button onClick={() => scrollTo('solutions')} className="hover:text-vertex-400 transition-colors">Hospitals & Clinics</button></li>
                <li><button onClick={() => scrollTo('solutions')} className="hover:text-vertex-400 transition-colors">Small Shops</button></li>
                <li><button onClick={() => scrollTo('features')} className="hover:text-vertex-400 transition-colors">All Features</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollTo('home')} className="hover:text-vertex-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollTo('security')} className="hover:text-vertex-400 transition-colors">Security</button></li>
                <li><button onClick={() => scrollTo('compliance')} className="hover:text-vertex-400 transition-colors">Compliance</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-vertex-400 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:text-vertex-400 transition-colors cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-vertex-400 transition-colors cursor-pointer">Terms of Service</span></li>
                <li><span className="hover:text-vertex-400 transition-colors cursor-pointer">Data Processing</span></li>
                <li><span className="hover:text-vertex-400 transition-colors cursor-pointer">Cookie Policy</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm"> 2026 Vertex Cloud Solutions. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-sm">in India</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowDemoModal(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-slide-up">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <X className="w-4 h-4 text-slate-600" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600">We'll contact you within 24 hours with your demo access.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Free Demo</h3>
                <p className="text-slate-600 mb-6">Fill in your details and we'll set up your personalized demo.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vertex-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vertex-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Organization</label>
                    <input 
                      type="text" 
                      required
                      value={formData.org}
                      onChange={(e) => setFormData({...formData, org: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vertex-500 focus:border-transparent transition-all"
                      placeholder="Your Organization Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Organization Type</label>
                    <select 
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vertex-500 focus:border-transparent transition-all"
                    >
                      <option value="school">School / College</option>
                      <option value="hospital">Hospital / Clinic</option>
                      <option value="shop">Retail Shop / Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-vertex-500 to-vertex-600 text-white font-semibold rounded-xl shadow-lg shadow-vertex-500/30 hover:shadow-vertex-500/50 hover:scale-[1.02] transition-all"
                  >
                    Request Demo Access
                  </button>
                </form>
                <p className="text-center text-xs text-slate-500 mt-4">
                  No credit card required. 14-day free trial.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
