import React from 'react';

const ProcessSteps: React.FC = () => {
    const steps = [
        { title: "Diagnóstico", desc: "Mapeamento minucioso do perfil e cultura organizacional." },
        { title: "Hunting", desc: "Busca ativa de talentos nos canais mais estratégicos." },
        { title: "Avaliação 4D", desc: "Entrevistas técnicas e comportamentais por competências." },
        { title: "Check Jurídico", desc: "Rigorosa validação documental e compliance." },
        { title: "Monitoramento", desc: "Acompanhamento de performance e integração." }
    ];

    return (
        <section id="processo" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-verttyce-dark rounded-[4rem] p-16 md:p-24 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(15,23,42,0.6)]">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-verttyce-primary/10 blur-[150px] rounded-full"></div>
                    <div className="relative z-10">
                        <div className="mb-20">
                            <span className="text-verttyce-accent font-black tracking-[0.3em] uppercase text-sm mb-6 block">Metodologia Exclusiva</span>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">Recrutamento Premium</h2>
                            <p className="text-slate-400 text-xl max-w-3xl font-light leading-relaxed">
                                Nossa abordagem proprietária elimina a incerteza da contratação, focando em performance sustentável e baixo turnover.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-5 gap-8 relative">
                            {steps.map((step, i) => (
                                <div key={i} className="relative group">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-verttyce-primary font-black text-2xl group-hover:bg-verttyce-primary group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                                                0{i + 1}
                                            </div>
                                            {i < steps.length - 1 && (
                                                <div className="hidden md:block flex-1 h-[2px] bg-white/10 ml-6 group-hover:bg-verttyce-primary/30 transition-colors"></div>
                                            )}
                                        </div>
                                        <h4 className="text-white font-black text-2xl mb-4 leading-tight">{step.title}</h4>
                                        <p className="text-slate-400 text-base leading-relaxed font-medium">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
