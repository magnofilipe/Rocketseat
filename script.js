// Função que altera modo escuro e modo claro na página.
function changeMode() {
  // "Pegando" o HTML para fazer verificações
  const html = document.documentElement

  // Verifica se, em html, há alguma classe cujo nome é "light"
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}
