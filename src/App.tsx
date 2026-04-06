/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Sun,
  Zap,
  Leaf,
  TrendingUp,
  CheckCircle2,
  Wrench,
  Layout,
  Lightbulb,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  X,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-yellow p-2 rounded-lg">
            <Sun className="text-brand-blue w-6 h-6" />
          </div>
          <span className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            PRINCIPIO ENERGIA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-brand-yellow transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#simulador" className="bg-brand-yellow text-brand-blue px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all">
            Orçamento Grátis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-brand-blue' : 'text-white'} /> : <Menu className={isScrolled ? 'text-brand-blue' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-600 hover:text-brand-yellow"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#simulador"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-brand-yellow text-brand-blue py-3 rounded-xl font-bold"
              >
                Orçamento Grátis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-blue">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#FACC15_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-brand-yellow font-semibold mb-6">
            <Zap size={18} />
            <span>Energia Limpa e Sustentável</span>

          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Reduza sua conta de luz em até <span className="text-brand-yellow">95%</span> com energia solar
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-lg leading-relaxed">
            Transforme o sol em economia real para sua casa ou empresa. Tecnologia de ponta com instalação rápida e garantida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#simulador" className="btn-primary">
              Orçamento grátis
              <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-4 px-4 py-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-blue bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-blue-200">
                <span className="font-bold text-white block">+500 clientes</span>
                satisfeitos em Manaus
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 py-3">
            {[
              { icon: TrendingUp, label: 'Economia' },
              { icon: Leaf, label: 'Sustentável' },
              { icon: Award, label: 'Valorização' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start gap-2">
                <div className="bg-white/10 p-3 rounded-xl">
                  <item.icon className="text-brand-yellow w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000"
              alt="Solar Panels"
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent"></div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="text-brand-green w-5 h-5" />
                </div>
                <span className="font-bold text-slate-800">Retorno Rápido</span>
              </div>
              <p className="text-sm text-slate-500">Investimento que se paga em média entre 3 a 5 anos.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=500"
                alt="Instalação Solar"
                className="rounded-2xl shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-yellow p-8 rounded-3xl shadow-xl hidden lg:block">
              <div className="text-4xl font-black text-brand-blue">10+</div>
              <div className="text-sm font-bold text-brand-blue uppercase">Anos de Experiência</div>
            </div>
          </div>

          <div>
            <h2 className="section-title">Sobre a <span className="text-brand-blue">Princípio Energia</span></h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nascemos da paixão pela tecnologia e pelo compromisso com o futuro do planeta. Nossa equipe combina décadas de experiência em engenharia elétrica e sistemas fotovoltaicos para entregar soluções que realmente funcionam.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: ShieldCheck, title: 'Confiança e Segurança', desc: 'Projetos certificados e equipamentos com garantia de até 25 anos.' },
                { icon: Users, title: 'Foco no Cliente', desc: 'Atendimento personalizado desde o primeiro contato até o pós-venda.' },
                { icon: Award, title: 'Excelência Técnica', desc: 'Instaladores próprios e altamente qualificados.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-sm">
                    <item.icon className="text-brand-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-full mb-2">Certificações & Parceiros</span>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-bold text-slate-700">HQE</div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-bold text-slate-700">BREEAM</div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-bold text-slate-700">DGNB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: 'Instalação Fotovoltaica',
      desc: 'Sistemas completos para residências, comércios e indústrias com máxima eficiência.'
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      desc: 'Limpeza e monitoramento técnico para garantir que seu sistema opere sempre no topo.'
    },
    {
      icon: Layout,
      title: 'Projeto Personalizado',
      desc: 'Engenharia dedicada para desenhar a solução ideal para o seu telhado ou terreno.'
    },
    {
      icon: Lightbulb,
      title: 'Consultoria Energética',
      desc: 'Análise detalhada do seu consumo para identificar as melhores oportunidades de economia.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Nossos <span className="text-brand-blue">Serviços</span></h2>
          <p className="text-lg text-slate-600">
            Oferecemos uma solução 360º para sua transição energética, cuidando de tudo desde a burocracia até a manutenção.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-brand-yellow transition-all group"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-yellow transition-colors">
                <service.icon className="text-brand-blue w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SavingsSimulator = () => {
  const [bill, setBill] = useState(150);
  const [city, setCity] = useState('Manaus');
  const [type, setType] = useState('Residencial');
  const [showResult, setShowResult] = useState(false);

  const calculateSavings = () => {
    // Simple logic: 90% savings on bill
    const monthlySavings = bill * 0.9;
    const yearlySavings = monthlySavings * 12;
    const lifetimeSavings = yearlySavings * 25; // 25 years lifespan
    return { monthly: monthlySavings, yearly: yearlySavings, lifetime: lifetimeSavings };
  };

  const results = calculateSavings();

  return (
    <section id="simulador" className="py-24 bg-brand-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Simule sua <span className="text-brand-yellow">Economia</span> agora
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Descubra quanto você pode poupar mensalmente e qual o impacto positivo que você terá no meio ambiente.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/10 p-2 rounded-full"><CheckCircle2 className="text-brand-yellow" /></div>
                <span>Cálculo baseado em tarifas reais de Portugal</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/10 p-2 rounded-full"><CheckCircle2 className="text-brand-yellow" /></div>
                <span>Estimativa de produção solar por região</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/10 p-2 rounded-full"><CheckCircle2 className="text-brand-yellow" /></div>
                <span>Relatório detalhado enviado por e-mail</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {!showResult ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Valor médio da conta de luz (€)</label>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="10"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                  />
                  <div className="text-3xl font-black text-brand-blue mt-2">R$ {bill}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Cidade</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-yellow outline-none"
                    >
                      <option>Manaus</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Tipo de Imóvel</label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-yellow outline-none"
                    >
                      <option>Residencial</option>
                      <option>Comercial</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => setShowResult(true)}
                  className="w-full btn-primary mt-4"
                >
                  Ver minha economia
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <TrendingUp className="text-brand-green w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Resultado da sua Simulação</h3>
                <p className="text-slate-500 mb-8">Para {type} em {city}</p>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <div className="text-sm font-bold text-slate-400 uppercase mb-1">Economia Mensal Estimada</div>
                    <div className="text-4xl font-black text-brand-green">R$ {results.monthly.toFixed(2)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">Anual</div>
                      <div className="text-xl font-bold text-slate-800">R$ {results.yearly.toFixed(0)}</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">Em 25 anos</div>
                      <div className="text-xl font-bold text-slate-800">R$ {results.lifetime.toFixed(0)}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="btn-primary w-full">
                    Garantir este desconto
                  </button>
                  <button
                    onClick={() => setShowResult(false)}
                    className="text-sm font-bold text-slate-400 hover:text-brand-blue transition-colors"
                  >
                    Refazer simulação
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Vamos começar sua <span className="text-brand-yellow">revolução solar?</span></h2>
              <p className="text-blue-100 mb-10 text-base md:text-lg">
                Preencha o formulário e um de nossos especialistas entrará em contato em menos de 24 horas.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <Phone className="text-brand-yellow w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-blue-300">Ligue para nós</div>
                    <div className="text-base md:text-lg font-bold text-white">92 99205-2536</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <Mail className="text-brand-yellow w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm text-blue-300">E-mail</div>
                    <div className="text-base md:text-lg font-bold text-white truncate sm:whitespace-normal break-all">principioenergia@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <MapPin className="text-brand-yellow w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-blue-300">Localização</div>
                    <div className="text-base md:text-lg font-bold text-white">Rua das Flores 81, Manaus, Amazonas</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-white/10">
                <a
                  href="https://wa.me/92992052536?text=Olá,%20quero%20um%20orçamento%20de%20energia%20solar" class="whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all"
                >
                  <MessageCircle size={20} className="md:w-6 md:h-6" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-8 sm:p-12 md:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Nome Completo</label>
                    <input type="text" placeholder="Seu nome" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-yellow outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">E-mail</label>
                    <input type="email" placeholder="seu@email.com" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-yellow outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Telefone</label>
                  <input type="tel" placeholder="92 xxxxx xxxx" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-yellow outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Mensagem (Opcional)</label>
                  <textarea rows={4} placeholder="Como podemos ajudar?" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-yellow outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Enviar Solicitação
                </button>
                <p className="text-center text-xs text-slate-400">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-yellow p-1.5 rounded-lg">
              <Sun className="text-brand-blue w-5 h-5" />
            </div>
            <span className="text-lg font-black tracking-tighter text-brand-blue">
              PRINCIPIO ENERGIA
            </span>
          </div>

          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-brand-blue">Privacidade</a>
            <a href="#" className="hover:text-brand-blue">Termos</a>
            <a href="#" className="hover:text-brand-blue">Cookies</a>
          </div>

          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Principio Energia. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SavingsSimulator />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp for conversion */}
      <a
        href="https://wa.me/92992052536?text=Olá,%20quero%20um%20orçamento%20de%20energia%20solar"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
