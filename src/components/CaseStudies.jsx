import React from 'react';
import { TrendingUp, Users, Beaker, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Amélioration de la Résistance aux Stress Abiotiques",
      category: "Génomique & Sélection Variétale",
      client: "Semencier International",
      challenge: "Développer des variétés de blé plus résistantes à la sécheresse pour faire face aux changements climatiques.",
      approach: [
        "Analyse WGS (Whole Genome Sequencing) de 200 variétés de blé",
        "RNA-seq comparatif entre variétés tolérantes et sensibles",
        "Identification de gènes candidats par analyse différentielle",
        "Validation par modélisation moléculaire des protéines clés"
      ],
      results: [
        "Identification de 15 gènes d'intérêt majeur",
        "Développement d'un panel de 50 marqueurs moléculaires",
        "Réduction de 30% du temps de sélection",
        "Amélioration de 25% de la tolérance à la sécheresse"
      ],
      impact: "Cette approche a permis au client d'accélérer significativement son programme de sélection et de proposer des variétés mieux adaptées aux conditions climatiques futures."
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Optimisation du Microbiome Racinaire",
      category: "Microbiomics & Agriculture Durable",
      client: "Exploitation Maraîchère Bio",
      challenge: "Réduire l'usage d'intrants chimiques tout en maintenant les rendements et la qualité des légumes.",
      approach: [
        "Analyse métagénomique 16S et shotgun du microbiome racinaire",
        "Identification des communautés microbiennes bénéfiques",
        "Tests d'efficacité en conditions contrôlées",
        "Développement d'un inoculant microbien personnalisé"
      ],
      results: [
        "Identification de 12 souches bactériennes clés",
        "Augmentation de 25% du rendement moyen",
        "Réduction de 40% des intrants chimiques",
        "Amélioration de 15% de la qualité nutritionnelle"
      ],
      impact: "Cette solution a permis à l'exploitation de réduire drastiquement son empreinte environnementale tout en améliorant sa rentabilité."
    },
    {
      icon: <Beaker className="h-12 w-12 text-primary" />,
      title: "Développement d'un Biopesticide Innovant",
      category: "Modélisation Moléculaire & Biotechnologie",
      client: "Startup Biotech",
      challenge: "Concevoir un biopesticide efficace et spécifique contre un ravageur émergent des cultures de tomates.",
      approach: [
        "Modélisation 3D des protéines cibles du ravageur",
        "Criblage virtuel de molécules bioactives",
        "Docking moléculaire et optimisation structurale",
        "Validation expérimentale et tests d'efficacité"
      ],
      results: [
        "Identification de 3 molécules candidates prometteuses",
        "Efficacité de 90% contre le ravageur cible",
        "Spécificité élevée (pas d'impact sur les auxiliaires)",
        "Réduction de 2 ans du cycle de développement"
      ],
      impact: "Cette approche computationnelle a permis d'accélérer considérablement le développement du produit et de réduire les coûts de R&D."
    }
  ];

  const metrics = [
    { value: "50+", label: "Projets réalisés" },
    { value: "30%", label: "Réduction moyenne des délais" },
    { value: "25%", label: "Amélioration moyenne des performances" },
    { value: "95%", label: "Taux de satisfaction client" }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Réalisations
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Des Résultats Concrets et Mesurables
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment BIOmix a accompagné ses clients dans la résolution de défis complexes, 
              en transformant les données biologiques en solutions pratiques et innovantes.
            </p>
          </div>
        </div>
      </section>

      {/* Métriques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Études de cas */}
      {caseStudies.map((study, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {study.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm font-medium text-primary mb-2">
                      {study.category}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-4">
                      {study.title}
                    </CardTitle>
                    <div className="text-gray-600">
                      <strong>Client :</strong> {study.client}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Défi et Approche */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Défi
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Notre Approche
                      </h4>
                      <ul className="space-y-2">
                        {study.approach.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Résultats et Impact */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Résultats Obtenus
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Impact
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {study.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Votre Projet Sera Notre Prochaine Réussite
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Chaque défi est unique. Discutons de votre projet pour développer 
            ensemble la solution qui transformera vos ambitions en réalité.
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

export default CaseStudies;

