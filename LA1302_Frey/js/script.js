//Meme-Generator//
const image_input = document.querySelector('#image_input');

const text_input = document.querySelector("#text");

const display_image = document.querySelector("#display_image");

let image;

image_input.addEventListener("change", () => {
    const imageDataUrl = URL.createObjectURL(image_input.files[0]);

    image = new Image();

    image.src = imageDataUrl;

    image.addEventListener("load", () => {
        updateImage(display_image, image, text_input.value);
    });
})

text_input.addEventListener("change", () => {
    updateImage(display_image, image, text_input.value);
})

function updateImage(display_image, image, text_input) {
    const ctx = display_image.getContext("2d");
    const width = image.width;
    const height = image.height;
    const font = Math.floor(width / 13);

    display_image.width = width;
    display_image.height = height;
    ctx.drawImage(image, 0, 0);

    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(font / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font= `${font}px sans-serif`;

    ctx.textBaseline = "top";
    ctx.strokeText(text_input, width / 2, (height /2)/5);
    ctx.fillText(text_input, width / 2, (height /2)/5);
}

//Dark-Mode//
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const box = document.querySelector('#box');
const boxitem = document.querySelector('.box-item');
const boxitem2 = document.querySelector('.box-item2');
const inputtext = document.querySelector('.input-text');
const dimage = document.querySelector('#display_image');
const bicon = document.querySelector('#box-icon');
const icon = document.querySelector('.fa-message');


  const toggle = document.getElementById('toggle');
  toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('active');
    footer.classList.toggle('active');
    box.classList.toggle('active');
    boxitem.classList.toggle('active');
    boxitem2.classList.toggle('active');
    inputtext.classList.toggle('active');
    dimage.classList.toggle('active');
    bicon.classList.toggle('active');
    icon.classList.toggle('active');

  }
