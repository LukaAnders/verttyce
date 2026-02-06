import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-verttyce-dark pt-20">
            {/* Mesh Gradient Background Refined */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-verttyce-primary/30 blur-[140px] rounded-full animate-mesh"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-verttyce-secondary/20 blur-[160px] rounded-full animate-mesh" style={{ animationDelay: '-7s' }}></div>
                <div className="absolute top-[30%] right-[15%] w-[40%] h-[40%] bg-verttyce-accent/15 blur-[120px] rounded-full animate-mesh" style={{ animationDelay: '-12s' }}></div>
            </div>
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-1 bg-grid-slate-200 opacity-[0.03]"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 tracking-tight">
                    Soluções de <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-verttyce-primary via-verttyce-secondary to-verttyce-accent">
                        Alta Performance
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400 leading-relaxed font-light">
                    Redefinindo o recrutamento e a terceirização com rigor jurídico, compliance total e eficiência operacional absoluta.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600">
                    <button className="group relative bg-verttyce-primary text-white px-10 py-5 rounded-full font-black text-lg shadow-[0_20px_50px_rgba(3,105,161,0.3)] hover:shadow-[0_25px_60px_rgba(3,105,161,0.4)] hover:-translate-y-1 transition-all flex items-center">
                        Agendar diagnóstico
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md">
                        Falar com especialista
                    </button>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
            </div>
        </section>
    );
};

export default Hero;
