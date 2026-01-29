import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Données du formulaire:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons sous 24h.');
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "contact@biomix.fr",
      description: "Réponse sous 24h"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Adresse",
      content: "123 Avenue de la Science",
      description: "75001 Paris, France"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horaires",
      content: "Lundi - Vendredi",
      description: "9h00 - 18h00"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactez-Nous
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Parlons de Votre Projet
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Que vous soyez chercheur, agriculteur, semencier ou entreprise agroalimentaire, 
              nous sommes là pour vous accompagner dans vos projets d'innovation. 
              Contactez-nous pour une consultation initiale gratuite.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Démarrez Votre Projet
              </CardTitle>
              <p className="text-gray-600">
                Remplissez ce formulaire et nous vous recontacterons sous 24h pour discuter de vos besoins.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise/Organisation
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de demande *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type de projet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conseil">Conseil & Consultation</SelectItem>
                      <SelectItem value="analyse">Analyse de données</SelectItem>
                      <SelectItem value="developpement">Développement de solutions</SelectItem>
                      <SelectItem value="formation">Formation & Accompagnement</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget estimé
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<10k">Moins de 10k€</SelectItem>
                        <SelectItem value="10k-50k">10k€ - 50k€</SelectItem>
                        <SelectItem value="50k-100k">50k€ - 100k€</SelectItem>
                        <SelectItem value=">100k">Plus de 100k€</SelectItem>
                        <SelectItem value="non-defini">Non défini</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Délais souhaités
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez les délais" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (&lt; 1 mois)</SelectItem>
                        <SelectItem value="court">Court terme (1-3 mois)</SelectItem>
                        <SelectItem value="moyen">Moyen terme (3-6 mois)</SelectItem>
                        <SelectItem value="long">Long terme (&gt; 6 mois)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Description du projet *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet, vos objectifs et vos défis..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Nos Coordonnées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {info.title}
                      </h4>
                      <p className="text-gray-700">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-500">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Carte */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Notre Localisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Carte interactive</p>
                    <p className="text-sm">Paris, France</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Notre Engagement
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Réponse sous 24h garantie</li>
                  <li>✓ Consultation initiale gratuite</li>
                  <li>✓ Devis personnalisé sous 48h</li>
                  <li>✓ Confidentialité absolue</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

