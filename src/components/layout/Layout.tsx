import React from 'react'

import { LayoutMain, SimpleFooter, HeaderOneElementCenter } from 'nanify';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LayoutMain 
            header={<HeaderOneElementCenter text="sistema de inventario" />} 
            footer={<SimpleFooter 
            text='💚 Hospital Dr. José Rangel 💚' />}>
            {children}
        </LayoutMain>
    );
}

export default Layout;