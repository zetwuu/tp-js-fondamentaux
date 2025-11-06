console.log("Laboratoire prêt !");

const prenom = "Alexandre";
let age = 16;
//prenom = "Didier" 
//script.js:5 Uncaught TypeError: Assignment to constant variable. at script.js:5:5

age = 18
console.log(prenom, age)

const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "ljmm";

if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length < 8 ) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}

age = 16

const moi = {
    prenom,
    nom: "Pinheiro",
    age,
    competences: ["HTML", "CSS", "JS"],
};

console.log(moi)
console.log(moi.prenom)

console.log("Je m'appelle", moi.prenom, moi.nom, ", j'ai", moi.age, "ans", ", j'étudie :", moi.competences)

moi.age = 19;
moi.ville = "Lyon"
console.log(moi)