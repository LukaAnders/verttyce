import React from 'react';
import SectionHeader from './SectionHeader';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const Outsourcing: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute -inset-10 bg-verttyce-secondary/10 blur-[100px] rounded-full"></div>
                    <img
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
                        alt="Corporate Team Collaboration"
                        className="rounded-[3rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)] w-full h-[650px] object-cover relative z-10"
                    />
                    <div className="absolute top-10 right-10 z-20 bg-verttyce-secondary text-white p-8 rounded-3xl shadow-2xl animate-float">
                        <p className="text-4xl font-black mb-1">100%</p>
                        <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Compliance</p>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-12">
                    <SectionHeader
                        left
                        title="Terceirização Estratégica"
                        subtitle="A VERTTYCE implementa modelos de terceirização com mecanismos de mitigação financeira e jurídica, incluindo Seguro Garantia para verbas trabalhistas e previdenciárias, assegurando governança corporativa, previsibilidade de custos e proteção patrimonial."
                    />
                    <div className="grid gap-6">
                        {[
                            "Alocação técnica com gestão administrativa integrada",
                            "Gestão de folha, benefícios e obrigações legais",
                            "Monitoramento em tempo real de KPIs de performance",
                            "Plano de substituição ágil com banco pré-qualificado",
                            "Interface direta com Gestor de Contrato dedicado"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-5 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-x-2 transition-all duration-300">
                                <div className="bg-verttyce-secondary/10 p-3 rounded-2xl text-verttyce-secondary">
                                    <CheckCircle2 size={28} />
                                </div>
                                <span className="font-bold text-slate-700 text-lg leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-base md:text-lg font-bold text-verttyce-primary mt-4">
                        Terceirização sem risco não é promessa. É expertise, estrutura jurídica, governança e seguro garantia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Outsourcing;
