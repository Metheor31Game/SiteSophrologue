export default function SophrologiePage() {
  return (
    <div className="bg-blanc-casse rounded-xl text-center p-6">
      <h1 className="text-4xl font-bold text-vert-fonce mb-6">
        Découvrez la Sophrologie : Une Clé vers l&apos;Équilibre Intérieur
      </h1>

      {/* Introduction immersive */}
      <p className="text-lg text-marron-doux leading-relaxed mb-6">
        La sophrologie est une méthode psychocorporelle qui vise à renforcer le
        bien-être et l’harmonie entre le corps et l’esprit. Fondée en 1960 par
        le neuropsychiatre{" "}
        <span className="font-semibold">Alfonso Caycedo</span>, elle s’inspire
        du yoga, de la méditation et de la relaxation dynamique. Elle est
        aujourd’hui reconnue comme un outil puissant pour gérer le stress, les
        émotions et améliorer la qualité de vie au quotidien.
      </p>

      {/* Les bienfaits de la sophrologie */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-marron-doux mb-4">
          🌿 Les Bienfaits de la Sophrologie
        </h2>
        <p className="text-marron-doux leading-relaxed mb-4">
          Accessible à tous, la sophrologie peut être utilisée aussi bien en
          accompagnement préventif qu’en soutien dans des périodes de vie plus
          complexes.
        </p>
        <ul className="text-marron-doux text-left list-disc pl-6 space-y-2">
          <li>
            Réduction du{" "}
            <span className="font-semibold">stress et de l&apos;anxiété</span>
          </li>
          <li>
            Amélioration du <span className="font-semibold">sommeil</span> et
            de la récupération
          </li>
          <li>
            Développement de la{" "}
            <span className="font-semibold">
              confiance en soi et de l’estime de soi
            </span>
          </li>
          <li>
            Gestion des{" "}
            <span className="font-semibold">
              émotions et des douleurs chroniques
            </span>
          </li>
          <li>
            Amélioration de la{" "}
            <span className="font-semibold">
              concentration et de la performance
            </span>
          </li>
        </ul>
      </div>

      {/* Domaines d'application */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-marron-doux mb-4">
          🩺 Pour Qui ?
        </h2>
        <p className="text-marron-doux leading-relaxed mb-4">
          La sophrologie est utilisée dans de nombreux contextes :
        </p>
        <ul className="text-marron-doux text-left list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Gestion du stress</span> en
            entreprise et amélioration du bien-être au travail
          </li>
          <li>
            <span className="font-semibold">Préparation mentale</span> des
            sportifs et des artistes
          </li>
          <li>
            {" "}
            <span className="font-semibold">
              Accompagnement des femmes enceintes
            </span>{" "}
            pour un accouchement serein
          </li>
          <li>
            {" "}
            <span className="font-semibold">
              Soutien dans les traitements médicaux
            </span>{" "}
            (douleurs chroniques, fatigue, burn-out...)
          </li>
          <li>
            {" "}
            <span className="font-semibold">
              Aide à la concentration et à la préparation aux examens
            </span>
          </li>
        </ul>
      </div>

      {/* Déroulement d'une séance */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-marron-doux mb-4">
          🕊 Déroulement d&apos;une Séance
        </h2>
        <p className="text-marron-doux leading-relaxed mb-4">
          Une séance de sophrologie dure en moyenne{" "}
          <span className="font-semibold">45 minutes à 1 heure</span> et se
          divise en trois étapes :
        </p>
        <ul className="text-marron-doux text-left list-decimal pl-6 space-y-3">
          <li>
            <span className="font-semibold">Accueil et échange :</span>{" "}
            Discussion pour cerner vos besoins et définir l’objectif de la
            séance.
          </li>
          <li>
            <span className="font-semibold">Exercices pratiques :</span>{" "}
            Enchaînement de techniques de respiration, relaxation et
            visualisation.
          </li>
          <li>
            <span className="font-semibold">Retour d’expérience :</span>{" "}
            Partage des ressentis et conseils pour intégrer la sophrologie dans
            le quotidien.
          </li>
        </ul>
      </div>

      {/* Appel à l'action */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-marron-doux mb-2">
          🌟 Prêt à découvrir la sophrologie ?
        </h2>
        <p className="text-lg text-marron-doux mb-4">Prenez rendez-vous !</p>
        <a
          href="/contact"
          className="bg-vert-fonce text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-vert-doux transition"
        >
          📅 Prendre rendez-vous
        </a>
      </div>
    </div>
  );
}
