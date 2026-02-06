import React from 'react';
import SectionHeader from './SectionHeader';
import { Building2, Truck, HeartPulse, Users, Store, ClipboardCheck } from 'lucide-react';

const Segments: React.FC = () => {
    const segments = [
        { icon: <Building2 />, name: "Indústria & Facilities" },
        { icon: <Truck />, name: "Logística & Transporte" },
        { icon: <HeartPulse />, name: "Saúde & Farmacêutico" },
        { icon: <Users />, name: "Corporate & Back Office" },
        { icon: <Store />, name: "Varejo & E-commerce" },
        { icon: <ClipboardCheck />, name: "Serviços & Limpeza" }
    ];

    return (
        <section id="segmentos" className="py-32 bg-white relative">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Atuação Especializada"
                    subtitle="Equipes dedicadas com expertise profunda nas nuances de cada vertical de negócio."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {segments.map((seg, i) => (
                        <div key={i} className="group flex items-center p-10 bg-slate-50 rounded-[2.5rem] border-2 border-transparent hover:border-verttyce-primary hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="text-verttyce-primary bg-white p-6 rounded-2xl shadow-sm mr-8 group-hover:scale-110 group-hover:bg-verttyce-primary group-hover:text-white transition-all">
                                {React.cloneElement(seg.icon as React.ReactElement, { size: 48 })}
                            </div>
                            <span className="font-black text-slate-900 text-2xl leading-tight group-hover:text-verttyce-primary transition-colors">
                                {seg.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Segments;
