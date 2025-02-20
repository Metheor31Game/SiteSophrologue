export default function ContactPage() {
    return (
      <div className="text-center p-6">
        <h1 className="text-3xl font-bold text-amber-800 mb-4">Contact</h1>
        <p className="text-lg mb-6">Prenez rendez-vous ou posez vos questions.</p>
        
        {/* Carte de visite */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-6 w-full max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-brown-900">Jean Dupont</h2>
          <p className="text-brown-700">Sophrologue certifié</p>
          <p className="text-brown-700 mt-2">123 Rue du Bien-Être, 75000 Paris</p>
          <p className="text-brown-700">Tél: 01 23 45 67 89</p>
          <p className="text-brown-700">Email: contact@sophrologie.fr</p>
        </div>
        
        {/* Horaires */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-brown-900 mb-4">Horaires d'ouverture</h2>
          <table className="w-full text-left border-collapse">
            <tbody>
              {[
                ["Lundi", "9h - 12h", "14h - 18h"],
                ["Mardi", "9h - 12h", "14h - 18h"],
                ["Mercredi", "9h - 12h", "14h - 18h"],
                ["Jeudi", "9h - 12h", "14h - 18h"],
                ["Vendredi", "9h - 12h", "14h - 17h"],
                ["Samedi", "10h - 13h", "Fermé"],
                ["Dimanche", "Fermé", "Fermé"],
              ].map(([jour, matin, apresMidi]) => (
                <tr key={jour} className="border-t border-amber-200">
                  <td className="py-2 font-medium text-brown-900">{jour}</td>
                  <td className="py-2 text-brown-700">{matin}</td>
                  <td className="py-2 text-brown-700">{apresMidi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  