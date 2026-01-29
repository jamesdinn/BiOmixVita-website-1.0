import React from 'react';
import { Lightbulb, Leaf, Award, Users, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Values = () => {
  const values = [
    {
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
      title: "Innovation",
      description: "Nous plaçons l'innovation au cœur de notre démarche, en explorant constamment de nouvelles approches méthodologiques et technologiques. Notre veille scientifique permanente nous permet d'intégrer les dernières avancées de la recherche dans nos solutions pratiques."
    },
    {
      icon: <Leaf className="h-12 w-12 text-secondary" />,
      title: "Durabilité",
      description: "Chaque projet que nous menons contribue à construire une agriculture plus durable. Nous évaluons systématiquement l'impact environnemental de nos recommandations et privilégions les solutions qui préservent les écosystèmes naturels."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Rigueur Scientifique",
      description: "Notre approche s'appuie sur des méthodologies scientifiques rigoureuses, des analyses statistiques robustes et une validation expérimentale systématique. Nous garantissons la reproductibilité et la fiabilité de nos résultats."
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Accompagnement Personnalisé",
      description: "Nous croyons que chaque client est unique. Notre approche consultative nous permet de comprendre les défis spécifiques de chaque situation et de proposer des solutions parfaitement adaptées."
    }
  ];

  const testimonials = [
    {
      quote: "BIOmix a révolutionné notre approche de la sélection variétale. Grâce à leurs analyses génomiques, nous avons réduit de 30% le temps de développement de nos nouvelles variétés.",
      author: "Dr. Sophie Laurent",
      company: "Semencier International",
      role: "Directrice R&D"
    },
    {
      quote: "L'expertise de BIOmix en intelligence artificielle nous a permis d'identifier des biomarqueurs clés pour optimiser nos pratiques culturales. Les résultats dépassent nos attentes.",
      author: "Marc Dubois",
      company: "Coopérative Agricole",
      role: "Responsable Innovation"
    },
    {
      quote: "La modélisation moléculaire réalisée par BIOmix a accéléré le développement de notre nouveau biopesticide. Leur approche scientifique rigoureuse nous a fait gagner des années de recherche.",
      author: "Dr. Claire Martin",
      company: "Biotech Startup",
      role: "CEO & Fondatrice"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Valeurs & Engagements
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Les Valeurs qui Nous Guident
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chez BIOmix, nos valeurs ne sont pas de simples mots. Elles guident chacune de nos actions 
              et définissent notre approche unique de l'innovation biotechnologique.
            </p>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ce que Disent Nos Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nos valeurs se traduisent en résultats concrets pour nos partenaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-gray-700 italic mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-primary font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Engagement */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notre Engagement pour l'Avenir
          </h2>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Nous nous engageons à maintenir les plus hauts standards d'excellence scientifique 
              tout en contribuant activement à la transition vers une agriculture plus durable. 
              Chaque innovation que nous développons est pensée pour créer un impact positif 
              sur l'environnement et la société.
            </p>
            <p className="text-lg leading-relaxed">
              Notre vision va au-delà de la simple prestation de services : nous aspirons à être 
              des partenaires de transformation, accompagnant nos clients dans leur évolution 
              vers des pratiques plus innovantes et responsables.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;

