import React from 'react';
import { Settings } from 'lucide-react';

const Results: React.FC = () => {
    const stats = [
        { value: "-35%", label: "Turnover Médio", desc: "Redução em contratos de longo prazo." },
        { value: "72h", label: "Time-to-Hire", desc: "Contratações urgentes em tempo recorde." },
        { value: "SLA 98%", label: "Nível de Serviço", desc: "Aderência rigorosa às metas pactuadas." },
        { value: "0,0%", label: "Passivo Novo", desc: "Zero novos processos em áreas geridas." }
    ];

    return (
        <section id="resultados" className="py-32 bg-verttyce-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-200 opacity-[0.02]"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-verttyce-primary font-black tracking-widest uppercase mb-6 block">Dados Reais</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight">Performance que <br /> gera valor</h2>
                        <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light">
                            Nossa eficácia é comprovada por métricas precisas. Ajudamos nossos clientes a reduzir custos ocultos e focar inteiramente em sua expansão.
                        </p>
                        <div className="grid grid-cols-2 gap-10">
                            {stats.map((stat, i) => (
                                <div key={i} className="group">
                                    <div className="text-5xl font-black mb-3 text-white group-hover:text-verttyce-accent transition-colors">{stat.value}</div>
                                    <div className="font-black text-verttyce-primary uppercase tracking-tighter text-lg mb-2">{stat.label}</div>
                                    <div className="text-slate-500 font-medium leading-tight">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-10 bg-gradient-to-r from-verttyce-primary/20 to-verttyce-secondary/20 blur-3xl opacity-50"></div>
                        <div className="bg-slate-800/50 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/10 shadow-3xl relative z-10">
                            <div className="flex items-center justify-between mb-12">
                                <h3 className="font-black text-2xl">Ecossistema Operacional</h3>
                                <div className="p-3 bg-verttyce-primary/20 rounded-xl text-verttyce-primary animate-pulse-slow">
                                    <Settings size={32} />
                                </div>
                            </div>
                            <ul className="space-y-8">
                                {[
                                    "Talent Analytics: Decisões baseadas em dados",
                                    "Consultoria de RH Estratégico nativa",
                                    "Hunting especializado por vertical",
                                    "Auditoria jurídica preventiva (Law Compliance)",
                                    "Sistemas ATS e ERP de alta integração"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-6">
                                        <div className="w-3 h-3 rounded-full bg-verttyce-accent shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                                        <span className="text-slate-200 font-bold text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
