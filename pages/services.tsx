import Container from 'components/Container';
import FAQ from 'components/services/FAQ';
import Hero from 'components/services/Hero';
import Process from 'components/services/Process';
import Tabs from 'components/services/Tabs';
import React from 'react';

const ServicesPage = () => {
  return (
    <Container title="Consulting – Joshua Snyder">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Consulting
        </h1>
        <Process />
        <Hero />
        <Tabs />
        <FAQ />
      </div>
    </Container>
  );
};

export default ServicesPage;
