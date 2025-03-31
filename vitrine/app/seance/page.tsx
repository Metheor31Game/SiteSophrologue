export default function SeancePage() {
        return (
          <div className="bg-blanc-casse rounded-xl text-center p-6">
            <h1 className="text-4xl font-bold text-vert-fonce mb-6">
              Les différentes séances que je propose :
            </h1>
      
            <p className="text-lg text-marron-doux leading-relaxed mb-6">
              Je propose trois différents types de séance :{" "}
            </p>
      
            <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-marron-doux mb-4">
                Séance individuelle
              </h2>
              <p className="text-marron-doux leading-relaxed mb-4">
                Texte pour expliquer le déroulement d'une séance individuelle etc ...
              </p>
            </div>
            <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-marron-doux mb-4">
                Séance à domicile
              </h2>
              <p className="text-marron-doux leading-relaxed mb-4">
                Texte pour expliquer le déroulement d'une séance a domicile etc ...
              </p>
            </div>
            <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-marron-doux mb-4">
                Séance de groupe
              </h2>
              <p className="text-marron-doux leading-relaxed mb-4">
                Texte pour expliquer le déroulement d'une séance de groupe etc ...
              </p>
            </div>
      
            {/* Appel à l'action */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-marron-doux mb-2">
                🌟 Prêt à franchir le cap ?!
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