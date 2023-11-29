// Função que altera modo escuro e modo claro na página.
function changeMode() {
  // "Pegando" o HTML para realizar alterações
  const html = document.documentElement
  // Alternando entre modo escuro e claro.
  html.classList.toggle("light")

  // Alterando foto de perfil entre modo escuro e claro
  const image = document.querySelector(".profile img")
  // Se houver uma classe "light" no HTML, ele fará diferentes operações
  if (html.classList.contains("light")) {
    // Caso haja, o atributo "src", que é onde está a imagem, irá mudar para o link abaixo.
    image.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // Caso não, outra imagem será escolhida.
    image.setAttribute("src", "./assets/avatar.png")
  }
}
