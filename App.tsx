import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import ValueProp from './src/components/ValueProp';
import ProcessSteps from './src/components/ProcessSteps';
import Outsourcing from './src/components/Outsourcing';
import Segments from './src/components/Segments';
import Results from './src/components/Results';
import Footer from './src/components/Footer';
import React from 'react';



const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-verttyce-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ValueProp />
        <ProcessSteps />
        <Outsourcing />
        <Segments />
        <Results />
      </main>
      <Footer />
    </div>
  );
};

export default App;
