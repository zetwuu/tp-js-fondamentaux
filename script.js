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

const notes = [12, 15, 9, 18];

// Affiche 12
console.log(notes[0]);
 // Affiche 15
console.log(notes[1]);
// Affiche 9
console.log(notes[2])
// Affiche 18
console.log(notes[3])
// Affiche 4
console.log("Le nombre de notes et de : ",notes.length);

for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}

const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 },
];

let nombreMajeurs = 0;

for (let i = 0; i < classe.length; i++) {
     if (classe[i].age >= 18) { 
       nombreMajeurs++;
       console.log("Le nombre d'élèves majeurs est de :", nombreMajeurs);
       console.log(classe[i].prenom + " est majeur(e).");
    }
}
