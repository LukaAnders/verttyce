import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => (
    <section id="quem-somos" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 z-0"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10">
                <div className="inline-block p-4 bg-verttyce-light rounded-2xl shadow-inner">
                    <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                        <Award className="text-verttyce-primary w-10 h-10" />
                    </div>
                </div>
                <div>
                    <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight">Compromisso com a <span className="text-verttyce-primary">Excelência Operacional</span></h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                        Somos o braço estratégico de RH para empresas que não aceitam riscos trabalhistas, ineficiência operacional e perda de produtividade.
                    </p>
                    <div className="grid gap-6">
                        {[
                            { title: "Compliance Total", text: "Processos blindados e alinhados à legislação vigente e LGPD, prontos para auditorias e compliance corporativo." },
                            { title: "Mitigação de Riscos", text: "Redução efetiva de passivos trabalhistas, turnover e custos ocultos com mão de obra." },
                            { title: "Foco em KPIs", text: "Gestão orientada a dados, com SLAs, métricas de performance e ROI mensurável da terceirização.." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-5 group p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                <div className="mt-1 bg-verttyce-accent/10 p-2 rounded-xl group-hover:bg-verttyce-accent transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-verttyce-secondary group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                    <p className="text-slate-500 font-medium">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-verttyce-primary/20 to-verttyce-secondary/20 rounded-[3rem] blur-2xl group-hover:opacity-100 transition-opacity"></div>
                <img
                    src="/Aaa.png"
                    alt="Modern Corporate Office"
                    className="relative w-full h-[650px] object-cover rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-verttyce-dark/90 via-transparent to-transparent rounded-[2.5rem]"></div>
                <div className="absolute bottom-10 left-10 right-10">
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-verttyce-primary rounded-full flex items-center justify-center text-white font-black">V</div>
                            <div>
                                <p className="text-white font-black text-lg">VERTTYCE</p>
                                <p className="text-white/60 text-sm">RH Estratégico</p>
                            </div>
                        </div>
                        <p className="text-white text-xl font-light italic leading-relaxed">
                            "Transformamos a gestão de pessoas em um diferencial competitivo sustentável para nossos parceiros."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
