"use client";

import { portfolioData } from "@/data/portfolio";
import { Code2, Briefcase, Mail, TerminalSquare, CheckCircle2, ChevronRight, Activity } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const { hero, services, skills, projects, experience } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Efeito Parallax sutil no fundo
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c] text-slate-900 dark:text-slate-300 font-sans selection:bg-blue-600 selection:text-white overflow-hidden relative transition-colors duration-500">
      
      {/* GRID DE ENGENHARIA (Background Sutil) - Muda a cor dependendo do tema */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05] dark:opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      {/* BLOBS CYBER (Luzes de Fundo) - Aparecem mais no Dark Mode */}
      <motion.div style={{ y: yBg }} className="fixed inset-0 z-0 pointer-events-none opacity-30 dark:opacity-50 transition-opacity duration-500">
        <div className="absolute top-0 -left-20 w-[40rem] h-[40rem] bg-blue-300 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-40 -right-20 w-[40rem] h-[40rem] bg-purple-300 dark:bg-purple-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/3 w-[40rem] h-[40rem] bg-indigo-300 dark:bg-indigo-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </motion.div>

      {/* HEADER / HERO */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-50">
        <ThemeToggle />
      </div>
      <header className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24 border-b border-slate-200 dark:border-white/5 bg-white/50 dark:bg-[#0a0f1c]/50 backdrop-blur-xl transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-16"
          >
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-slate-900/80 border border-blue-100 dark:border-slate-700/50 text-sm font-medium text-blue-700 dark:text-blue-400 mb-6 md:mb-8 backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-colors duration-500">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="tracking-wide uppercase text-[10px] md:text-xs font-mono">Consultor PJ • Disponível</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
                {hero.name}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light mb-6 max-w-3xl leading-snug mx-auto md:mx-0">
                {hero.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-500 max-w-2xl mb-10 md:mb-12 leading-relaxed mx-auto md:mx-0">
                {hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4">
                <a href={`mailto:${hero.email}`} className="w-full sm:w-auto group relative inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-8 py-3.5 md:py-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <Mail className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">Iniciar Projeto</span>
                </a>
                <a href={hero.linkedin} target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-8 py-3.5 md:py-4 rounded-lg font-medium transition-all duration-300 border border-slate-200 dark:border-slate-700/50 dark:hover:border-slate-500 shadow-sm backdrop-blur-sm group">
                  <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  LinkedIn
                </a>
                <a href={hero.github} target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-8 py-3.5 md:py-4 rounded-lg font-medium transition-all duration-300 border border-slate-200 dark:border-slate-700/50 dark:hover:border-slate-500 shadow-sm backdrop-blur-sm group">
                  <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="shrink-0 mx-auto md:mx-0">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full p-2 bg-white dark:bg-gradient-to-tr dark:from-blue-900/20 dark:to-purple-900/20 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-sm group transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
                <div className="w-full h-full rounded-full overflow-hidden relative border border-slate-100 dark:border-white/5">
                  <Image 
                    src="/profile.jpg" 
                    alt={hero.name} 
                    fill 
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-32 space-y-24 md:space-y-40">
        
        {/* RESUMO B2B / ABOUT */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl relative overflow-hidden group transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 dark:opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-blue-600 dark:text-blue-500" />
              Perfil Arquitetural
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed font-light">
              {hero.description}
            </p>
          </motion.div>
        </section>

        {/* SERVIÇOS B2B */}
        <section>
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Soluções Especializadas</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 dark:from-blue-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-md hover:shadow-xl dark:shadow-none hover:bg-white dark:hover:bg-slate-800/50 dark:hover:border-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800/80 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 border border-blue-100 dark:border-white/5 group-hover:scale-110 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STACK TECNOLÓGICA */}
        <section>
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Ecossistema & Stack</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 dark:from-purple-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-6 flex items-center gap-4">
                  {skillGroup.category}
                  <span className="flex-1 h-px bg-slate-200 dark:bg-white/5"></span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 rounded-xl text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 dark:hover:bg-slate-800 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none cursor-default backdrop-blur-sm">
                      <item.icon className={`w-4 h-4 ${item.color || "text-slate-500 dark:text-slate-400"}`} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CASES DE SUCESSO / PROJETOS - ESTILO TIMELINE */}
        <section>
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 flex items-center gap-4">
              Engenharia em Produção
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 dark:from-blue-500 to-transparent rounded-full dark:shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl text-lg font-light">Casos reais de sistemas de missão crítica, orquestração de IA e integrações legadas arquitetadas do zero.</p>
          </div>
          
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] md:before:w-[3px] before:bg-gradient-to-b before:from-blue-600/50 dark:before:from-blue-500/80 before:via-blue-600/20 dark:before:via-blue-500/40 before:to-transparent">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group"
              >
                {/* TIMELINE DOT COM PULSE */}
                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.4)] dark:shadow-[0_0_20px_rgba(59,130,246,0.8)] shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2 absolute left-6 md:left-1/2 -translate-x-[7px] z-10 group-hover:scale-150 group-hover:bg-blue-600 dark:group-hover:bg-blue-300 transition-all duration-500 before:absolute before:inset-0 before:rounded-full before:border before:border-blue-500/50 dark:before:border-blue-400/50 before:animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                
                {/* PROJECT CARD */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-white/80 dark:bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl ml-14 md:ml-0 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/60 dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] group-hover:border-blue-200 dark:group-hover:border-blue-500/30">
                  
                  {/* GLOW DE FUNDO NO CARD (Apenas Dark Mode) */}
                  <div className="hidden dark:block absolute -inset-24 bg-gradient-to-tr from-blue-500/0 via-blue-500/0 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                          <Activity className="w-4 h-4" />
                          {project.company}
                        </span>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2">{project.title}</h4>
                      </div>
                      <span className="text-xs font-mono font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-500/20 whitespace-nowrap shadow-sm dark:shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-[15px]">{project.description}</p>
                    
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <button className="text-sm text-slate-600 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2 overflow-hidden">
                        Explorar Arquitetura 
                        <ChevronRight className="w-4 h-4 translate-x-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIÊNCIA CORPORATIVA */}
        <section>
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Trajetória Corporativa</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 dark:from-indigo-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-indigo-600/30 dark:before:from-indigo-500/50 before:via-indigo-600/10 dark:before:via-indigo-500/20 before:to-transparent">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.4)] dark:shadow-[0_0_15px_rgba(129,140,248,0.8)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-6 md:left-1/2 -translate-x-[5px] z-10 group-hover:scale-150 group-hover:bg-indigo-600 dark:group-hover:bg-blue-400 transition-all duration-300"></div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-md dark:shadow-xl ml-14 md:ml-0 hover:border-indigo-200 dark:hover:border-white/10 hover:bg-white dark:hover:bg-slate-800/40 transition-all duration-300">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-6 gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h4>
                      <h5 className="text-sm font-medium text-blue-600 dark:text-blue-400">{exp.company}</h5>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/5 whitespace-nowrap w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-light">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-slate-100 dark:bg-[#060913] text-slate-500 py-12 border-t border-slate-200 dark:border-white/5 mt-20 transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© {new Date().getFullYear()} {hero.name}. Sistema online.</p>
          <p className="flex items-center gap-2 text-sm bg-white dark:bg-slate-900/50 px-4 py-2 rounded-full border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Aberto para contratos B2B
          </p>
        </div>
      </footer>
    </div>
  );
}