import React from 'react';
import { Dna, Microscope, Brain, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      id: "dna-rna",
      icon: <Dna className="h-16 w-16 text-primary" />,
      title: "DNA, RNA & Chromatin",
      subtitle: "Analyse Génomique et Transcriptomique de Pointe",
      description: "Explorez le génome et le transcriptome avec nos technologies de séquençage et d'analyse les plus avancées.",
      services: [
        {
          name: "WGS (Whole Genome Sequencing)",
          description: "Séquençage complet du génome pour identifier les variants génétiques d'intérêt agronomique"
        },
        {
          name: "Exome Sequencing",
          description: "Analyse ciblée des régions codantes pour une approche plus économique"
        },
        {
          name: "Bulk RNA-seq",
          description: "Analyse de l'expression génique globale dans différentes conditions"
        },
        {
          name: "scRNA-seq (Single Cell RNA-seq)",
          description: "Étude de l'expression génique au niveau cellulaire individuel"
        },
        {
          name: "ATAC-seq",
          description: "Cartographie de l'accessibilité chromatinienne"
        },
        {
          name: "ChIP-seq",
          description: "Analyse des interactions protéine-ADN"
        },
        {
          name: "Methylome",
          description: "Étude des modifications épigénétiques"
        },
        {
          name: "Microbiomics",
          description: "Analyse du microbiome associé aux plantes et sols"
        }
      ],
      applications: [
        "Sélection variétale assistée par marqueurs",
        "Identification de gènes de résistance",
        "Optimisation des conditions de culture",
        "Amélioration de la qualité nutritionnelle"
      ]
    },
    {
      id: "protein",
      icon: <Microscope className="h-16 w-16 text-primary" />,
      title: "Protein & Structure",
      subtitle: "Modélisation Moléculaire et Analyse Structurale",
      description: "Comprenez et optimisez les structures protéiques pour développer des solutions biotechnologiques innovantes.",
      services: [
        {
          name: "Modélisation moléculaire 3D",
          description: "Prédiction de la structure tridimensionnelle des protéines d'intérêt"
        },
        {
          name: "Docking moléculaire",
          description: "Étude des interactions entre molécules"
        },
        {
          name: "Dynamique moléculaire",
          description: "Simulation du comportement des systèmes biologiques"
        }
      ],
      applications: [
        "Développement de biopesticides",
        "Optimisation d'enzymes industrielles",
        "Conception de nouvelles molécules bioactives",
        "Amélioration de la stabilité des protéines"
      ]
    },
    {
      id: "omics-ai",
      icon: <Brain className="h-16 w-16 text-primary" />,
      title: "OMICS & AI",
      subtitle: "Intelligence Artificielle et Intégration Multi-OMICS",
      description: "Exploitez la puissance de l'IA pour intégrer et analyser des données biologiques complexes.",
      services: [
        {
          name: "Analyse de données multi-OMICS",
          description: "Intégration et analyse de données génomiques, transcriptomiques, protéomiques et métabolomiques"
        },
        {
          name: "Intégration OMICS basée sur les réseaux",
          description: "Construction de réseaux biologiques complexes"
        },
        {
          name: "Découverte de cibles par ML",
          description: "Identification de nouvelles cibles thérapeutiques ou agronomiques par apprentissage automatique"
        },
        {
          name: "Développement d'algorithmes personnalisés",
          description: "Création d'outils d'analyse sur mesure"
        }
      ],
      applications: [
        "Prédiction de phénotypes complexes",
        "Identification de biomarqueurs",
        "Optimisation des stratégies de sélection",
        "Développement de modèles prédictifs"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Services
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Des Solutions OMICS & IA Complètes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              BIOmix propose une gamme complète de services scientifiques et technologiques, organisés autour de trois pôles 
              d'expertise complémentaires. Chaque service est conçu pour répondre aux défis spécifiques de l'agriculture moderne, 
              en combinant rigueur scientifique et applicabilité pratique.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      {serviceCategories.map((category, index) => (
        <section key={category.id} id={category.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                {category.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
                {category.subtitle}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Services */}
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">Services inclus</h4>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex}>
                      <CardContent className="p-6">
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.name}
                        </h5>
                        <p className="text-gray-600">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">Applications concrètes</h4>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {category.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une Solution Personnalisée ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nos experts sont à votre disposition pour développer des solutions sur mesure 
            adaptées à vos défis spécifiques.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link to="/contact">
              Discuter de votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

