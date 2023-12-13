//Carrosel de imagens;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1] += " active";
}

//Barra de pesquisa;
function filtrar() {
  let input,
    filter,
    ul,
    li,
    h2,
    i,
    span,
    txtValue,
    count = 0

  input = document.getElementById('filtro')
  ul = document.getElementById('lista-produtos')


  filter = input.value.toUpperCase();

  li = ul.getElementsByTagName("li")


  for (i = 0; i < li.length; i++) {

    h2 = li[i].getElementsByTagName("h2")[0]
    txtValue = h2.textContent;

    if (txtValue.indexOf(filter) > -1) {

      li[i].style.display = "";

      count++

      span = li[i].querySelector(".nome-produto")

      if (span) {
        span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
          return "<strong>" + match + "</strong>";
        })
      }
    } else {
      li[i].style.display = "none"
    }
  }
}