'use client';

import React, { useState } from 'react';

export default function RashmiMishraLuxuryLookbook() {
  const bridalWorks = [
    {
      id: '01',
      title: 'The Royal Vermilion',
      category: 'Traditional Bridal',
      desc: 'Intricate zardozi pairing with velvet-matte skin and sculpted terracotta undertones.',
      image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: '02',
      title: 'Subtle Glass Luminescence',
      category: 'Engagement Dewy Glam',
      desc: 'Seamless skin-first hydration, soft smoked champagne gaze, and architectural contouring.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: '03',
      title: 'Regal Peshwai Heritage',
      category: 'Maharashtrian Bridal',
      desc: 'Classic Chandrakor alignment, warm gold micro-pigment highlights, and heirloom grace.',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: '04',
      title: 'The Midnight Reception',
      category: 'Reception Haute Glam',
      desc: 'Modern sculpted cheekbones, winged noir precision, and understated cashmere nude lips.',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  const courses = [
    {
      code: 'DIPLOMA—01',
      title: 'Masterclass in Professional Bridal & High-Fashion Artistry',
      duration: '30 Days Comprehensive',
      curriculum: 'Color theory, airbrush skin techniques, micro-contouring, 12 regional bridal styles, HD camera lighting.',
    },
    {
      code: 'DIPLOMA—02',
      title: 'Advanced Nail Architecture & Gel Sculpting Diploma',
      duration: '15 Days Intensive',
      curriculum: 'Russian manicure prep, polygel overlays, 3D floral sculpting, chrome ombre, salon business monetization.',
    },
    {
      code: 'CERT—03',
      title: 'Editorial Hairstyling & Contemporary Draping',
      duration: '10 Days Workshop',
      curriculum: 'Textured bridal buns, Hollywood waves, traditional dupatta setting, saree silhouette structuring.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] font-sans selection:bg-[#1C1917] selection:text-[#FBF9F5] antialiased">
      {/* Top Ticker Bar */}
      <div className="border-b border-stone-200/80 bg-[#F4EFEA] px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] text-stone-500 flex justify-between items-center">
        <span>Rashmi Mishra Studio & Academy — Mumbai [Kurla]</span>
        <span className="hidden sm:inline">Winter Bridal Bookings & Nov 2026 Batch Admissions Open</span>
        <a 
          href="https://wa.me/919993817756?text=Hi%20Rashmi%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-[#1C1917] hover:underline"
        >
          Direct Inquiries [WhatsApp] →
        </a>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-tight uppercase font-medium">
              Rashmi Mishra
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 -mt-0.5">
              Haute Bridal & Academy — Mumbai
            </span>
          </div>

          <nav className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-stone-600">
            <a href="#lookbook" className="hover:text-[#1C1917] transition-colors">Lookbook</a>
            <a href="#academy" className="hover:text-[#1C1917] transition-colors">The Academy</a>
            <a href="#contact" className="hover:text-[#1C1917] transition-colors">Inquire</a>
          </nav>

          <a
            href="https://wa.me/919993817756?text=Hello%20Rashmi%2C%20I%20would%20like%20to%20check%20bridal%20date%20availability"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium border border-[#1C1917] bg-[#1C1917] text-[#FBF9F5] hover:bg-transparent hover:text-[#1C1917] transition-all rounded-none"
          >
            Book Date
          </a>
        </div>
      </header>

      {/* Hero Section — Editorial Magazine Layout */}
      <section className="border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block border border-stone-300 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-stone-600 bg-[#F4EFEA]">
              Haute Artistry & Academy • Est. 2019
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-[#1C1917]">
              Timeless bridal grandeur, refined by quiet skin mastery.
            </h1>

            <p className="text-base text-stone-600 font-normal leading-relaxed max-w-xl">
              Led by international certified artist Rashmi Mishra, our Kurla studio curates unrepeatable bridal transformations that honor authentic Indian heritage with weightless, camera-ready complexion architecture.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="#lookbook"
                className="px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium bg-[#1C1917] text-[#FBF9F5] text-center hover:bg-stone-800 transition-colors rounded-none"
              >
                Explore Curated Works (04)
              </a>
              <a
                href="#academy"
                className="px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium border border-stone-300 text-stone-800 text-center hover:bg-[#F4EFEA] transition-colors rounded-none"
              >
                Academy Admissions 2026 ↓
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-stone-200/80 max-w-lg">
              <div>
                <span className="font-serif text-3xl font-light block">10.1K</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Community</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-light block">400+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Brides Styled</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-light block">05 Yrs</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Mastery</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-stone-300 p-3 bg-white">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=85"
                  alt="Rashmi Mishra Bridal Signature"
                  className="w-full h-full object-cover grayscale-[10%]"
                />
              </div>
              <div className="pt-4 flex justify-between items-baseline text-[10px] uppercase tracking-[0.2em] text-stone-500">
                <span>Plate I — Signature Red Bridal</span>
                <span>Mumbai, Kurla</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Lookbook Section */}
      <section id="lookbook" className="py-24 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 block mb-2">Curated Portfolio</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight">The Bridal Archive</h2>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500 max-w-xs leading-relaxed">
              Every bride is an unrepeatable canvas. Sculpted with weightless micro-pigments and heritage precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {bridalWorks.map((work) => (
              <div key={work.id} className="group flex flex-col space-y-4">
                <div className="border border-stone-300 p-3 bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">{work.category}</span>
                    <h3 className="font-serif text-2xl font-light">{work.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-stone-400">№ {work.id}</span>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {work.desc}
                </p>

                <div>
                  <a
                    href={`https://wa.me/919993817756?text=Hi%20Rashmi%2C%20I%20loved%20the%20${encodeURIComponent(work.title)}%20look.%20Can%20you%20share%20bridal%20package%20details%3F`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-[11px] uppercase tracking-[0.2em] font-medium text-[#1C1917] border-b border-[#1C1917] pb-1 hover:opacity-60 transition-opacity"
                  >
                    Check Date Availability →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Academy Section */}
      <section id="academy" className="py-24 bg-[#F4EFEA] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 block">Professional Education</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight">
              The Artistry Academy
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Cultivating the next generation of independent makeup artists and nail technicians from our state-of-the-art studio in Kurla, Mumbai. Rigorous hands-on curriculum, real bridal shoots, and salon placement assistance.
            </p>
          </div>

          <div className="space-y-6">
            {courses.map((course, idx) => (
              <div 
                key={idx}
                className="border border-stone-300 bg-[#FBF9F5] p-8 md:p-10 transition-all hover:border-stone-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-3 space-y-2">
                    <span className="font-mono text-xs text-stone-400 tracking-wider block">{course.code}</span>
                    <span className="inline-block bg-stone-200/70 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-stone-700">
                      {course.duration}
                    </span>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <h3 className="font-serif text-2xl font-light tracking-tight">{course.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      <strong>Curriculum Highlights:</strong> {course.curriculum}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex lg:justify-end">
                    <a
                      href={`https://wa.me/919993817756?text=Hi%20Rashmi%20ma%27am%2C%20I%20am%20interested%20in%20joining%20the%20${encodeURIComponent(course.title)}.%20Please%20share%20the%20syllabus%20and%20fee%20structure.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full lg:w-auto px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium border border-[#1C1917] bg-[#1C1917] text-[#FBF9F5] text-center hover:bg-transparent hover:text-[#1C1917] transition-all rounded-none"
                    >
                      Inquire Batch & Fees
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-stone-300 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-4">
            <span>📍 Studio Training Facility: Kurla West, Mumbai – 400070</span>
            <span>Batch Capacity Capped at 8 Students for Personalized Attention</span>
          </div>
        </div>
      </section>

      {/* Inquiry & Location Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 block">Reservations & Admissions</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight">
            Begin your transformation.
          </h2>
          <p className="text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
            Whether securing your wedding date or enrolling in upcoming diploma intakes, our studio operates on confirmed appointment schedules.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919993817756?text=Hello%20Rashmi%2C%20I%20would%20like%20to%20book%20a%20bridal%20consultation"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium bg-[#1C1917] text-[#FBF9F5] hover:bg-stone-800 transition-colors rounded-none"
            >
              Direct WhatsApp Consultation →
            </a>
            <a
              href="tel:+919993817756"
              className="px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium border border-stone-300 text-stone-800 hover:bg-[#F4EFEA] transition-colors rounded-none"
            >
              Call Studio: +91 99938 17756
            </a>
          </div>

          <p className="text-[11px] text-stone-500 pt-4">
            *DPDP Act Compliant: Inquiries are securely transmitted strictly for direct appointment coordination.
          </p>
        </div>
      </section>

      {/* Studio Footer */}
      <footer className="border-t border-stone-200/80 bg-[#F4EFEA] py-12 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-serif text-base text-[#1C1917] block font-medium">MAKEOVER BY RASHMI MISHRA</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">
              Kurla West, Mumbai, Maharashtra • International Certified Artist
            </span>
          </div>

          <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em]">
            <a href="https://instagram.com/makeover_by_rashmi_mishra" target="_blank" rel="noreferrer" className="hover:text-black">Instagram (10.1K)</a>
            <a href="https://wa.me/919993817756" target="_blank" rel="noreferrer" className="hover:text-black">WhatsApp</a>
            <span>Privacy & Terms</span>
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
            Engineered by Shjafri Studio
          </div>
        </div>
      </footer>
    </div>
  );
}
