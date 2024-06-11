// components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
