Splitting();

$( ".char" ).hover(
  function() {
    var rgb = [
        // parseInt(Math.random() * 255),
        // parseInt(Math.random() * 167),
        // parseInt(Math.random() * 50)

        parseInt(Math.random() * 165),
        parseInt(Math.random() * 207),
        parseInt(Math.random() * 220)
      ];
      $(this).css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
  });


$(".char").mouseout(
  function() {
  $(this).css('color','#000');
  }
)

r = 0
i = setInterval(() => Array.from(document.querySelectorAll("#four")).forEach(n => n.style.transform = `rotate(${r++}deg)`), 100)


rTwo = 0
i = setInterval(() => Array.from(document.querySelectorAll("#fourTwo")).forEach(n => n.style.transform = `rotate(${rTwo--}deg)`), 100)

rThree = 0
i = setInterval(() => Array.from(document.querySelectorAll("#fourThree")).forEach(n => n.style.transform = `rotate(${rThree--}deg)`), 100)

rFour = 0
i = setInterval(() => Array.from(document.querySelectorAll("#fourFour")).forEach(n => n.style.transform = `rotate(${rFour++}deg)`), 100)


dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv2"));
dragElement(document.getElementById("mydiv3"));
dragElement(document.getElementById("mydiv4"));
dragElement(document.getElementById("mydiv5"));
dragElement(document.getElementById("mydiv6"));
dragElement(document.getElementById("mydiv7"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}