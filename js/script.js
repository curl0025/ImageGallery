let container = document.getElementById('images');
let thumbnail = document.getElementsByClassName('thumbnail');
let overlay = document.getElementById('overlay');
let large = document.getElementById('large');
let close = document.getElementById('button');


container.addEventListener('click', function(e) {
  if (e.target.classList.contains('thumbnail')) {
     overlay.classList.add('appear');
      let fullsrc = e.target.src;
      large.src = fullsrc.replace("thumb", "large");
  }
});

document.addEventListener('keyup', function(esc) {
    if (esc.which == 27 && overlay.classList.contains("appear")) {
        overlay.classList.remove("appear");
    };
    
}); 

close.addEventListener('click', function(click) {
    if (overlay.classList.contains('appear')) {
        overlay.classList.remove('appear');
    };
});
                          
                          


