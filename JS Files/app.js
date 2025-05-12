const ourCitation = [
  {
    citation:
      "Ce qui empêche l'être humain d'accéder au bonheur ne relève pas de sa nature, mais des artifices de la civilisation.",
    author: "Claude Lévi-Strauss",
  },
  {
    citation: `Je ne connais qu'un seul devoir et c'est celui d'aimer.`,
    author: "Albert Camus",
  },
  {
    citation: `Admirer, c'est éclipser les défauts.`,
    author: "Bernard Boucheix",
  },
  {
    citation: "La musique seule peut parler de la mort.",
    author: "André Malraux",
  },
  {
    citation: "La beauté, c'est aussi la musique.",
    author: "Bernard Werber",
  },
];

function generateCitation() {
  const paraCitation = document.querySelector(".citation");
  const paraAuthor = document.querySelector(".author");

  let ramdomIndex = Math.floor(Math.random() * 5) + 1;

  paraCitation.textContent = ourCitation[ramdomIndex].citation;
  paraAuthor.textContent = ourCitation[ramdomIndex].author;
}
generateCitation();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  generateCitation();
});
