// app/sophrologie/page.tsx
export default function SophrologiePage() {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold text-amber-800 mb-4">Qu'est-ce que la Sophrologie ?</h1>
      <p className="text-lg text-brown-700 leading-relaxed mb-6">
        La sophrologie est une méthode de relaxation et de développement personnel qui combine des techniques de respiration, de visualisation et de méditation.
        Son objectif est d’harmoniser le corps et l’esprit afin d’améliorer le bien-être et de mieux gérer le stress.
      </p>
      
      {/* Section sur les bienfaits */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6 w-full max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-brown-900 mb-4">Les bienfaits de la sophrologie</h2>
        <ul className="text-brown-700 text-left list-disc pl-6">
          <li>Réduction du stress et de l'anxiété</li>
          <li>Amélioration du sommeil</li>
          <li>Développement de la confiance en soi</li>
          <li>Gestion des émotions</li>
          <li>Amélioration de la concentration</li>
        </ul>
      </div>
      
      {/* Section sur le déroulement d'une séance */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-brown-900 mb-4">Déroulement d'une séance</h2>
        <p className="text-brown-700 leading-relaxed">
          Une séance de sophrologie se compose généralement de trois phases :
        </p>
        <ul className="text-brown-700 text-left list-decimal pl-6 mt-4">
          <li><span className="font-semibold">Accueil et échange :</span> discussion pour comprendre vos attentes.</li>
          <li><span className="font-semibold">Exercices pratiques :</span> techniques de respiration et de relaxation.</li>
          <li><span className="font-semibold">Temps de partage :</span> ressenti et retour sur l’expérience vécue.</li>
        </ul>
      </div>
    </div>
  );
}