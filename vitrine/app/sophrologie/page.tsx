export default function SophrologiePage() {
  return (
    <div className="bg-blanc-casse rounded-xl text-center p-6">
      <h1 className="text-4xl font-bold text-vert-fonce mb-6">
        Découvrez la Sophrologie : Une Clé vers l&apos;Équilibre Intérieur
      </h1>

      {/* Introduction immersive */}
      <p className="text-lg text-marron-doux leading-relaxed mb-6">
        La sophrologie est une méthode psychocorporelle douce qui vise à
        restaurer l’équilibre entre le corps, le mental et les émotions. Fondée
        dans les années 60 par le neuropsychiatre{" "}
        <span className="font-semibold">Alfonso Caycedo</span>, elle s’inspire
        du yoga, de la méditation et de techniques occidentales de relaxation.
        Aujourd’hui, elle est reconnue comme un outil précieux pour faire face
        aux défis du quotidien : stress, anxiété, douleurs chroniques, manque de
        confiance ou besoin de recentrage.
      </p>

      {/* Les bienfaits de la sophrologie */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-marron-doux mb-4">
          🌿 Les Bienfaits de la Sophrologie
        </h2>
        <p className="text-marron-doux leading-relaxed mb-4">
          Pratiquée régulièrement, la sophrologie permet de :
        </p>
        <ul className="text-marron-doux text-left list-disc pl-6 space-y-2">
          <li>
            Réduire le <span className="font-semibold">stress, l’anxiété</span>{" "}
            et les tensions
          </li>
          <li>
            Améliorer le <span className="font-semibold">sommeil</span> et la
            récupération
          </li>
          <li>
            Renforcer la <span className="font-semibold">confiance en soi</span>{" "}
            et l’estime personnelle
          </li>
          <li>
            Gérer plus sereinement les{" "}
            <span className="font-semibold">émotions et la douleur</span>
          </li>
          <li>
            Développer la <span className="font-semibold">concentration</span>{" "}
            et les capacités de performance
          </li>
        </ul>
      </div>

      {/* Domaines d'application */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-marron-doux mb-4">
          🩺 Dans quels contextes ?
        </h2>
        <p className="text-marron-doux leading-relaxed mb-4">
          La sophrologie est utilisée dans de nombreux domaines :
        </p>
        <ul className="text-marron-doux text-left list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Milieu médical et paramédical</span>{" "}
            : gestion de la douleur, accompagnement en cancérologie, préparation
            à l’accouchement
          </li>
          <li>
            <span className="font-semibold">Développement personnel</span> :
            hypersensibilité, gestion émotionnelle, recherche d’un mieux-être
          </li>
          <li>
            <span className="font-semibold">Sport et performance</span> :
            préparation mentale des sportifs ou des artistes avant une
            représentation
          </li>
          <li>
            <span className="font-semibold">Éducation</span> : préparation aux
            examens, soutien face aux difficultés scolaires ou familiales
          </li>
          <li>
            <span className="font-semibold">Entreprise</span> : qualité de vie
            au travail, cohésion d’équipe, prévention des risques psychosociaux
          </li>
        </ul>
      </div>

      {/* Déroulement d'une séance */}
      <div className="mt-8">
        {/* <h2 className="text-2xl font-semibold text-marron-doux mb-2">
          Comment se déroule une séance ?
        </h2> */}
        <p className="text-lg text-marron-doux mb-4">
          La peur de l&apos;inconnu est naturelle, mais elle ne doit pas empêcher de
          faire le premier pas. Pour en savoir plus et découvrir concrètement
          comment se déroule une séance, cliquez simplement ci-dessous.
        </p>
        <a
          href="/seance"
          className="bg-vert-fonce text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-vert-doux transition"
        >
          Déroulement d&apos;une séance
        </a>
      </div>

      {/* Appel à l'action */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-marron-doux mb-2">
          🌟 Envie d’essayer ?
        </h2>
        <p className="text-lg text-marron-doux mb-4">
          Que ce soit par curiosité ou pour répondre à un besoin spécifique, la
          sophrologie peut vous aider à retrouver un équilibre intérieur.
        </p>
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
