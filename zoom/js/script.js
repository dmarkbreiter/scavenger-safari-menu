
$(function(){
    $('.stromatolite').okzoom({
      width: 200,
      height: 200,
      border:"1px solid black",
      shadow:"0 0 5px #000"
    });
    });

    () => {
      var tooltip = document.getElementById('tooltip');
    };
        
    var triggers = document.getElementsByClassName('tooltip-trigger');
    
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('mousemove', showToolTip);
      triggers[i].addEventListener('mouseout', hideToolTip);
    }
    
    function showToolTip(evt) {
      tooltip.setAttributeNS(null, "visibility", "visible");
    }
    function hideToolTip() {
      tooltip.setAttributeNS(null, "visibility", "hidden");
    }
