import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const team = [
    {
      name: "Dr. Marie Dubois",
      role: "Directrice Scientifique",
      description: "Spécialiste en génomique et bioinformatique avec plus de 15 ans d'expérience en recherche académique et industrielle.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Pierre Martin",
      role: "Directeur Innovation",
      description: "Expert en intelligence artificielle appliquée aux sciences du vivant, ancien chercheur dans des laboratoires de renommée internationale.",
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Excellence Scientifique",
      description: "Nous nous appuyons sur des méthodologies rigoureuses et les dernières avancées de la recherche."
    },
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Engagement Durable",
      description: "Chaque projet contribue à construire une agriculture plus respectueuse de l'environnement."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Accompagnement Personnalisé",
      description: "Nous adaptons nos solutions aux défis spécifiques de chaque client."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Innovation Continue",
      description: "Nous explorons constamment de nouvelles approches méthodologiques et technologiques."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Section Qui Sommes-Nous */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À Propos de BIOmix
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Une Expertise Scientifique au Service de l'Innovation
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                BIOmix naît de la convergence entre recherche académique d'excellence et besoins concrets du secteur agricole. 
                Notre équipe pluridisciplinaire réunit des experts en bioinformatique, génomique, intelligence artificielle et 
                agronomie, unis par une vision commune : révolutionner l'agriculture grâce à la science des données biologiques.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Fondée par des chercheurs passionnés ayant évolué dans les plus prestigieux laboratoires internationaux, 
                BIOmix traduit les avancées scientifiques les plus récentes en solutions pratiques et accessibles. 
                Notre approche unique consiste à développer des "toolkits" personnalisés, adaptés aux défis spécifiques 
                de chaque client, qu'il s'agisse d'améliorer la résistance des cultures, d'optimiser les rendements ou 
                de réduire l'impact environnemental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Vision et Engagement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Vision pour l'Agriculture de Demain
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Nous croyons fermement que l'agriculture durable n'est pas seulement un impératif environnemental, 
                mais aussi une opportunité économique majeure. En exploitant le potentiel des données OMICS et de 
                l'intelligence artificielle, nous contribuons à créer un écosystème agricole plus résilient, 
                plus productif et plus respectueux de la biodiversité.
              </p>
              
              <p className="text-lg leading-relaxed">
                Notre engagement s'articule autour de trois piliers fondamentaux : l'excellence scientifique, 
                l'innovation responsable et l'accompagnement personnalisé de nos clients. Chaque projet que nous 
                menons contribue à construire un avenir où technologie de pointe et respect de l'environnement 
                se conjuguent harmonieusement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Valeurs Fondamentales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Une Équipe d'Experts Passionnés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos fondateurs combinent expertise scientifique et vision entrepreneuriale pour transformer 
              les défis de l'agriculture moderne en opportunités d'innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-16 w-16 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

