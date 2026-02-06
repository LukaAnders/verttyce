import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    light?: boolean;
    left?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light, left }) => (
    <div className={`mb-16 ${left ? 'text-left' : 'text-center'} max-w-4xl ${!left && 'mx-auto'} px-4`}>
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
            {title}
        </h2>
        {subtitle && (
            <p className={`text-base md:text-lg ${light ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                {subtitle}
            </p>
        )}
        <div className={`h-1.5 w-24 mt-6 bg-gradient-to-r from-verttyce-primary to-verttyce-secondary rounded-full ${!left && 'mx-auto'}`}></div>
    </div>
);

export default SectionHeader;
