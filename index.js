
function hoch(){
const element = document.getElementById("button5");
const element2 = document.getElementById('children1');
if (element.parentNode.matches(":hover") && element2.parentNode.matches(':hover')) {
    document.getElementById('children1').style.transition = 'margin-top 0.5s'
    document.getElementById("children1").style.marginTop = '-90px';
} 
}

function runter(){
    document.getElementById('children1').style.transition = 'margin-top 0.5s'
    document.getElementById("children1").style.marginTop = '0px';
}


function hoch1(){
    const element = document.getElementById("button6");
    const element2 = document.getElementById('children');
    if (element.parentNode.matches(":hover") && element2.parentNode.matches(':hover')) {
        document.getElementById('children').style.transition = 'margin-top 0.5s'
        document.getElementById("children").style.marginTop = '-90px';
    } 
    }
    
    function runter1(){
        document.getElementById('children').style.transition = 'margin-top 0.5s'
        document.getElementById("children").style.marginTop = '0px';
    }

    function hoch2(){
        const element = document.getElementById("button7");
        const element2 = document.getElementById('children2');
        if (element.parentNode.matches(":hover") && element2.parentNode.matches(':hover')) {
            document.getElementById('children2').style.transition = 'margin-top 0.5s'
            document.getElementById("children2").style.marginTop = '-90px';
        } 
        }
        
        function runter2(){
            document.getElementById('children2').style.transition = 'margin-top 0.5s'
            document.getElementById("children2").style.marginTop = '0px';
        }

        var velocity = 0.35;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('#pic').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()+525;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
    }); 
};

$(window).bind('scroll', update);
  
  $(window).on('scroll', function() {
      if ($(window).scrollTop() >= $(
        '#bigcont').offset().top + $('#bigcont').
          outerHeight() - window.innerHeight) {
        document.getElementById('menu').style.transition = 'background-color 0.5s'
        document.getElementById('menu').style.backgroundColor = '#333333'
      } else {
        document.getElementById('menu').style.transition = 'background-color 0.5s'
        document.getElementById('menu').style.backgroundColor = '#9AB500'
      }
  }); 

  document.addEventListener("DOMContentLoaded", function(event) { 
    var slideIndex = 0;
    showSlides();
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("anim");
        var dots = document.getElementsByClassName('dot');
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        for (i=0; i <dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "")
        }   
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 4500); // Change image every 2 seconds
      }

       // setInterval(changePics, 2000);

      var c1 = true;
      var c2 = false;
      var c3 = false;
      function changePics(){
          var container1 = document.getElementById('container1')
          var container2 = document.getElementById('container2')
          var container3 = document.getElementById('container3')
          if (c1 == true){
              container1.style.width = '175px';
              container1.style.height = '300px';
              container1.style.opacity = '0.5';
              container1.style.zIndex = '-2'
              container1.style.position = 'absolute';
              container1.style.top = '25px';
              container1.style.transform = 'translateX(-48%)';
              container2.style.transform = 'translateX(94%)';
              container3.style.width = '215px';
              container3.style.height = '350px';
              container3.style.opacity = '1';
              container3.style.zIndex = '10';
              container3.style.transform = 'translateX(11%)';
              container3.style.position = 'relative';
              container3.style.top = '0';
              window.setTimeout(function() {
                container1.style.transtion = 'width 1s, height 1s, opacity 1s, z-index 1s, top 1s, transform 1s;';
                }, 100);
              c1 = false;
              c3 = true;
          } else if (c3 == true){
              container3.style.width = '175px';
              container3.style.height = '300px';
              container3.style.opacity = '0.5';
              container3.style.zIndex = '-2'
              container3.style.position = 'absolute';
              container3.style.top = '25px';
              container3.style.transform = 'translateX(-94%)';
              container1.style.transform = 'translateX(52%)';
              container2.style.width = '215px';
              container2.style.height = '350px';
              container2.style.opacity = '1';
              container2.style.zIndex = '10';
              container2.style.transform = 'translateX(-11%)';
              container2.style.position = 'relative';
              container2.style.top = '0';
                c3 = false ;
                c2 = true;
          } /*else if (c2 == true){
            container2.style.width = '175px';
              container2.style.height = '300px';
              container2.style.opacity = '0.5';
              container2.style.zIndex = '-2'
              container2.style.position = 'absolute';
              container2.style.top = '25px';
              container2.style.transform = 'translateX(-48%)';
              container3.style.transform = 'translateX(94%)';
              container1.style.width = '215px';
              container1.style.height = '350px';
              container1.style.opacity = '1';
              container1.style.zIndex = '10';
              container1.style.transform = 'translateX(11%)';
              container1.style.position = 'relative';
              container1.style.top = '0';
            c2 = false ;
            c1 = true;
          }*/
      }
  });