// const parrafoId = document.getElementById("segundo-parrafo");
// const parrafo = document.querySelector("footer #segundo-parrafo");

// const parrafosTagName = document.getElementsByTagName("p");
// const destacadosClassName = document.getElementsByClassName("destacado");

// const parrafos = document.querySelectorAll("section p");
// const destacados = document.querySelectorAll("footer p.destacado");

// ---

// const section = document.createElement("section");
// const h2 = document.createElement("h2");

// // const texto = document.createTextNode("Sección 2");
// // h2.appendChild(texto);

// h2.textContent = "Sección 2";

// section.appendChild(h2);

// const main = document.querySelector("main");
// main.appendChild(section);

// ---

// const main = document.querySelector("main");

// main.innerHTML += `
//     <section>
//         <h2>Sección 2</h2>
//         <p>Texto de la Sección 2</p>
//     </section>
// `;

// ---

// document.write("<p>Hola</p>");

// ---

const h2 = document.querySelector("h2");

// h2.onclick = () => {
//   console.log("Click en h2 uno");
// };

// h2.onclick = () => {
//   console.log("Click en h2 dos");
// };

h2.addEventListener("click", () => {
  console.log("Click en h2 uno");
});

h2.addEventListener("click", () => {
  console.log("Click en h2 dos");
});

h2.addEventListener("mouseover", () => {
  console.log("Mouseover en h2 dos");
});
