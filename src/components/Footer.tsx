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
                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 border-b border-white/10 pb-12">

                    {/* Col 1: Logo and Description */}
                    <div className="lg:col-span-2">
                        <img src="/verttycelogo.png" alt="Verttyce Logo" className="h-20 mb-6" />
                        <p className="text-slate-400 text-base font-light max-w-sm leading-relaxed">
                            A VERTTYCE é uma empresa especializada
                            em recrutamento, seleção e terceirização de
                            mão de obra para empresas de todos os portes.
                        </p>
                    </div>

                    {/* Col 2: Soluções */}
                    <div>
                        <h4 className="font-black text-white text-base mb-6 uppercase tracking-widest">Soluções</h4>
                        <ul className="space-y-4 text-slate-400 font-light text-base">
                            <li><a href="#solucoes" className="hover:text-verttyce-primary transition-colors">Diagnóstico Organizacional</a></li>
                            <li><a href="#solucoes" className="hover:text-verttyce-primary transition-colors">Recrutamento Estratégico</a></li>
                            <li><a href="#solucoes" className="hover:text-verttyce-primary transition-colors">Desenvolvimento de Lideranças</a></li>
                            <li><a href="#solucoes" className="hover:text-verttyce-primary transition-colors">Cultura e Engajamento</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Autoridade */}
                    <div>
                        <h4 className="font-black text-white text-base mb-6 uppercase tracking-widest">Autoridade</h4>
                        <ul className="space-y-4 text-slate-400 font-light text-base">
                            <li><span className="text-verttyce-secondary mr-2">✓</span>Compliance e Governança</li>
                            <li><span className="text-verttyce-secondary mr-2">✓</span>Eficiência Operacional</li>
                            <li><span className="text-verttyce-secondary mr-2">✓</span>Atuação Estratégica</li>
                        </ul>
                    </div>

                    {/* Col 4: Contato */}
                    <div>
                        <h4 className="font-black text-white text-base mb-6 uppercase tracking-widest">Contato</h4>
                        <ul className="space-y-4 text-slate-400 font-light text-base">
                            <li><a href="mailto:contato@verttyce.com.br" className="hover:text-verttyce-primary transition-colors">contato@verttyce.com.br</a></li>
                            <li>WhatsApp Corporativo</li>
                        </ul>
                        <a href="#" className="inline-block mt-6 bg-verttyce-primary/10 text-verttyce-primary font-bold text-sm py-3 px-5 rounded-lg hover:bg-verttyce-primary/20 transition-colors">
                            Solicite um Diagnóstico
                        </a>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-bold tracking-widest pt-8">
                    <p>© {new Date().getFullYear()} VERTTYCE CAPITAL HUMANO. TODOS OS DIREITOS RESERVADOS.</p>
                    <div className="flex space-x-6 md:space-x-10 mt-8 md:mt-0 uppercase">
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