import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gestion des cookies
              </h3>
              <p className="text-gray-600 mb-4">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site web, 
                analyser le trafic et personnaliser le contenu. En continuant à naviguer, 
                vous acceptez notre utilisation des cookies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptCookies} size="sm">
                  Accepter tous les cookies
                </Button>
                <Button onClick={rejectCookies} variant="outline" size="sm">
                  Refuser les cookies non essentiels
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="/privacy-policy">
                    Politique de confidentialité
                  </a>
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBanner(false)}
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;

