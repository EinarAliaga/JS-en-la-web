import { valida } from "./validaciones.js";/*Poner .js al final en validaciones, sino no funiona */

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});