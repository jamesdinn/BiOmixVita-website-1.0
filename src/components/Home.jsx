import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dna, Microscope, Brain } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import labImage from '../assets/lab-image.webp';
import agricultureImage from '../assets/agriculture-image.jpg';

const Home = () => {
  const services = [
    {
      icon: <Dna className="h-12 w-12 text-primary" />,
      title: "DNA, RNA & Chromatin",
      description: "Analyse génomique complète : WGS, Exome, RNA-seq, scRNA-seq, ATAC-seq, ChIP-seq, Methylome, Microbiomics",
      link: "/services#dna-rna"
    },
    {
      icon: <Microscope className="h-12 w-12 text-primary" />,
      title: "Protein & Structure",
      description: "Modélisation moléculaire 3D, docking moléculaire, dynamique moléculaire pour l'innovation biotechnologique",
      link: "/services#protein"
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "OMICS & AI",
      description: "Intelligence artificielle appliquée, intégration multi-OMICS, découverte de cibles par machine learning",
      link: "/services#omics-ai"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-2 h-full">
            <div 
              className="bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${labImage})` }}
            />
            <div 
              className="bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${agricultureImage})` }}
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            BIOmix
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            L'Innovation OMICS au Service de l'Agriculture Durable
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transformons ensemble l'agriculture de demain grâce à la science des données biologiques et à l'intelligence artificielle
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Nous développons des solutions 'toolkit' basées sur l'OMICS et l'IA pour une agriculture et un environnement durables, 
            alliant recherche scientifique de pointe et applications pratiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link to="/services">
                Découvrir nos solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <Link to="/contact">
                Contactez-nous
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                BIOmix se positionne à l'avant-garde de la révolution biotechnologique en agriculture. 
                Notre expertise unique combine l'analyse des données OMICS (génomique, transcriptomique, 
                protéomique, métabolomique) avec les technologies d'intelligence artificielle les plus avancées. 
                Nous créons des outils innovants qui permettent aux agriculteurs, chercheurs et entreprises 
                agroalimentaires de prendre des décisions éclairées pour une agriculture plus durable, 
                productive et respectueuse de l'environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Aperçu des Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trois pôles d'excellence pour transformer vos défis scientifiques en solutions innovantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to={service.link}>
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Révolutionner Votre Approche ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour une consultation initiale gratuite et découvrez comment 
            nos solutions OMICS & IA peuvent transformer vos projets.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link to="/contact">
              Démarrer votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

