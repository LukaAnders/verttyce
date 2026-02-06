import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-slate-900 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-verttyce-primary via-verttyce-secondary to-verttyce-accent"></div>
            <div className="container mx-auto px-6 pt-16">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-verttyce-primary to-verttyce-secondary rounded-[4rem] p-16 md:p-24 text-center text-white shadow-[0_50px_100px_rgba(3,105,161,0.25)] mb-16 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-grid-slate-200 opacity-[0.05]"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Pronto para elevar sua <br /> eficiência operacional?</h2>
                        <p className="text-2xl opacity-80 mb-14 max-w-3xl mx-auto font-light leading-relaxed">
                            Agende agora uma consultoria estratégica e descubra como a VERTTYCE pode transformar seu capital humano em resultados.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <button className="bg-white text-verttyce-dark px-14 py-6 rounded-full font-black text-xl hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all">
                                Diagnóstico
                            </button>
                            <a href="mailto:contato@verttyce.com.br" className="text-white font-black text-xl border-b-4 border-white/20 hover:border-white transition-all pb-1">
                                contato@verttyce.com.br
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 gap-8 border-b border-white/5 pb-8">
                    <div>
                        <h4 className="font-black text-white text-lg mb-6 uppercase tracking-widest">Navegação</h4>
                        <ul className="space-y-4 text-slate-400 font-bold text-base">
                            <li><a href="#quem-somos" className="hover:text-verttyce-primary transition-colors">Sobre</a></li>
                            <li><a href="#solucoes" className="hover:text-verttyce-primary transition-colors">Soluções</a></li>
                            <li><a href="#processo" className="hover:text-verttyce-primary transition-colors">Metodologia</a></li>
                            <li><a href="#segmentos" className="hover:text-verttyce-primary transition-colors">Segmentos</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-white text-lg mb-6 uppercase tracking-widest">Atendimento</h4>
                        <ul className="space-y-4 text-slate-400 font-bold text-base">
                            <li>WhatsApp Corporativo</li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-bold tracking-widest pt-8">
                    <p>© 2026 VERTTYCE CAPITAL HUMANO. TODOS OS DIREITOS RESERVADOS.</p>
                    <div className="flex space-x-10 mt-8 md:mt-0 uppercase">
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Compliance</a>
                        <a href="#" className="hover:text-white transition-colors">LGPD</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;