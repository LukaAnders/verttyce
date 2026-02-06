import React, { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { X, Menu } from 'lucide-react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
            ${isScrolled
                    ? 'bg-verttyce-dark/95 backdrop-blur-lg shadow-2xl border-b border-white/5'
                    : 'bg-transparent'
                } h-20 flex items-center`}
        >

            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-0 group cursor-pointer">
                    <img src="/verttycelogo.png" alt="Verttyce Logo" className="h-12 w-12" />
                    <span className="text-2xl font-black tracking-tighter text-white ml-[1]">
                        VERTTYCE
                    </span>
                </div>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10">
                    <NavLink href="#quem-somos" isDark>Quem Somos</NavLink>
                    <NavLink href="#solucoes" isDark>Soluções</NavLink>
                    <NavLink href="#processo" isDark>Processo</NavLink>
                    <NavLink href="#segmentos" isDark>Segmentos</NavLink>
                    <NavLink href="#resultados" isDark>Resultados</NavLink>
                    <button
                        className="bg-white text-verttyce-dark hover:bg-verttyce-primary hover:text-white px-7 py-3 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95"
                        onClick={() => {
                            const footer = document.getElementById('footer');
                            if (footer) {
                                footer.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Diagnóstico
                    </button>
                </div>
                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-verttyce-dark p-10 flex flex-col space-y-8 md:hidden z-50 animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-between items-center mb-10">
                        <span className="text-2xl font-black text-white">VERTTYCE</span>
                        <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} className="text-white" /></button>
                    </div>
                    <NavLink href="#quem-somos" isDark onClick={() => setIsMobileMenuOpen(false)}>Quem Somos</NavLink>
                    <NavLink href="#solucoes" isDark onClick={() => setIsMobileMenuOpen(false)}>Soluções</NavLink>
                    <NavLink href="#processo" isDark onClick={() => setIsMobileMenuOpen(false)}>Processo</NavLink>
                    <NavLink href="#segmentos" isDark onClick={() => setIsMobileMenuOpen(false)}>Segmentos</NavLink>
                    <NavLink href="#resultados" isDark onClick={() => setIsMobileMenuOpen(false)}>Resultados</NavLink>
                    <button
                        className="bg-verttyce-primary text-white w-full py-5 rounded-2xl font-black text-xl shadow-2xl"
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            const footer = document.getElementById('footer');
                            if (footer) {
                                footer.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Diagnóstico
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Header;
