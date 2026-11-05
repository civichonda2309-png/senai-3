let total = Number(localStorage.getItem("total"));
document.getElementById("lista").textContent = localStorage.getItem("lista");
document.getElementById("total").textContent ="Total de Livros: " + total;

function adicionar() {
let titulo = document.getElementById("titulo").value; 
let autor = document.getElementById("autor").value;
let editora = document.getElementById("editora").value;
let ano = document.getElementById("ano").value;

let livro = document.createElement("li");
livro.textContent = titulo + " - " + autor + " - " + editora + " - " + ano;
document.getElementById("lista").appendChild(livro);

total = total +1;
localStorage.setItem("livro" + total, livro.textContent); 
localStorage.setItem("total", total ); 


document.getElementById("total").textContent = "Total de Livros: " + total;
document.getElementById("titulo").value = "";
document.getElementById("autor").value = "";
document.getElementById("editora").value = "";
document.getElementById("ano").value = "";
}
  
 










