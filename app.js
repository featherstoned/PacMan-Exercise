var pos = 0;

let pageWidth = window.innerWidth;

const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

var direction = 0;

var focus = 0;
//ADDED PAGEWIDTH AS ARGUEMENT TO RUN FUNCTION
function Run(pageWidth) { 
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, null);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
//ADDED SET INTERVAL METHOD 
setInterval(Run,300);
//CREATED CONDITIONAL STATEMENTS IN CHECKPAGEBOUNDS FUNCTION
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
        if (pos + imgWidth > pageWidth) {
          direction = 1;
        } else if (pos < 0) {
          direction = 0;
        }
        return direction;
      }
      
//Please do not change
module.exports = checkPageBounds;
