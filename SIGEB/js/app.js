const form = document.getElementById("formLivro");
const listaLivros = document.getElementById("listaLivros");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const categoria = document.getElementById("categoria").value;

  const novoLivro = {
    titulo,
    autor,
    categoria,
    dataCadastro: new Date().toISOString()
  };

  // Salvar no Firebase
  const novoId = database.ref().child("livros").push().key;
  database.ref("livros/" + novoId).set(novoLivro);

  form.reset();
});

// Listar livros
database.ref("livros").on("value", (snapshot) => {
  listaLivros.innerHTML = "";
  snapshot.forEach((childSnapshot) => {
    const livro = childSnapshot.val();
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${livro.titulo} - ${livro.autor} (${livro.categoria})`;
    listaLivros.appendChild(li);
  });
});
