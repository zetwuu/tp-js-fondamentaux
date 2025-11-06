console.log("Laboratoire prêt !");

const nom = "Alexandre";
let age = 16;
//nom = "Didier" 
//script.js:5 Uncaught TypeError: Assignment to constant variable. at script.js:5:5

age = 18
console.log(nom, age)

const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "secret123";

if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length < 8 ) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}