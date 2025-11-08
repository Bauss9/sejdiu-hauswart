
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
    

      garten = false;
      umzug = false;
      entr = false;

      function changeGarten(){
        if (garten == false){
            document.getElementById("garten").innerHTML = "+ Garten";
            document.getElementById("garten").style.color = "green";
            document.getElementById('garten').style.opacity = '1';
            document.getElementById('garten').style.fontWeight = '600';
            garten = true;
        } else if (garten == true){
            document.getElementById("garten").innerHTML = "- Garten";
            document.getElementById("garten").style.color = "black";
            document.getElementById('garten').style.opacity = '0.4';
            document.getElementById('garten').style.fontWeight = '400';
            garten = false;
        }
      }

      function changeUmzug(){
        if (umzug == false){
            
            document.getElementById("umzugggg").innerHTML = "+ Umzug";
            document.getElementById("umzugggg").style.color = "green";
            document.getElementById('umzugggg').style.opacity = '1';
            document.getElementById('umzugggg').transition = '0.75s';
            document.getElementById('umzugggg').style.fontWeight = '600';
            umzug = true;
        } else if (umzug == true){
            document.getElementById("umzugggg").innerHTML = "- Umzug";
            document.getElementById("umzugggg").style.color = "black";
            document.getElementById('umzugggg').style.opacity = '0.4';
            document.getElementById('umzugggg').style.fontWeight = '400';
            umzug = false;
        }
      }
    

      function changeEntr(){
        if (entr == false){
            document.getElementById("entrumpelung").innerHTML = "+ Entrümpelung";
            document.getElementById("entrumpelung").style.color = "green";
            document.getElementById('entrumpelung').style.opacity = '1';
            document.getElementById('entrumpelung').style.fontWeight = '600';
            entr = true;
        } else if (entr == true){
            document.getElementById("entrumpelung").innerHTML = "- Entrümpelung";
            document.getElementById("entrumpelung").style.color = "black";
            document.getElementById('entrumpelung').style.opacity = '0.5';
            document.getElementById('entrumpelung').style.fontWeight = '400';
            entr = false;
        }
      }
    
    
     