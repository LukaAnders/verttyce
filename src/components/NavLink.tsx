import React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    isDark?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, isDark }) => (
    <a
        href={href}
        onClick={onClick}
        className={`text-sm font-semibold transition-colors py-2 ${isDark ? 'text-white hover:text-verttyce-accent' : 'text-slate-600 hover:text-verttyce-primary'}`}
    >
        {children}
    </a>
);
