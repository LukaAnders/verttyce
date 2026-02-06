import React from 'react';
import SectionHeader from './SectionHeader';
import { ShieldCheck, Zap, Target, Globe, BarChart3, Briefcase } from 'lucide-react';

const ValueProp: React.FC = () => {
    const values = [
        {
            icon: <ShieldCheck className="w-10 h-10" />,
            title: "Segurança Jurídica",
            desc: "Blindagem completa contra passivos trabalhistas através de auditoria preventiva constante."
        },
        {
            icon: <Zap className="w-10 h-10" />,
            title: "Agilidade Sistêmica",
            desc: "Recrutamento técnico acelerado utilizando tecnologia ATS de última geração e hunting ativo."
        },
        {
            icon: <Target className="w-10 h-10" />,
            title: "Fit Cultural & Técnico",
            desc: "Metodologia proprietária que garante a aderência total do profissional aos valores da sua marca."
        },
        {
            icon: <Globe className="w-10 h-10" />,
            title: "Governança 360º",
            desc: "Transparência total em cada etapa da gestão de pessoal, com relatórios detalhados."
        },
        {
            icon: <BarChart3 className="w-10 h-10" />,
            title: "Otimização de Custos",
            desc: "Redução de custos indiretos e aumento da produtividade operacional por colaborador."
        },
        {
            icon: <Briefcase className="w-10 h-10" />,
            title: "Rede de Talentos Ativa",
            desc: "Acesso imediato a um banco de talentos pré-qualificados em diversos segmentos."
        }
    ];

    return (
        <section id="solucoes" className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-dot-pattern opacity-[0.05]"></div>
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    light
                    title="Nossa Proposta de Valor"
                    subtitle="Entregamos soluções robustas que integram compliance, tecnologia e performance humana."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {values.map((v, i) => (
                        <div key={i} className="group bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-verttyce-primary transition-all duration-500">
                            <div className="w-20 h-20 bg-verttyce-primary/20 rounded-2xl flex items-center justify-center text-verttyce-primary mb-8 group-hover:scale-110 group-hover:bg-verttyce-primary group-hover:text-white transition-all">
                                {v.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 leading-tight">{v.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-lg font-medium">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
