/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.font = '48px sans-serif';
ctx.strokeText('Hello, World!', 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  const canvas = document.getElementById('canvas2')
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  let height = 0
  let width = 0
  let x = 10000
  let y = 10000
  height = Number(prompt("Height:"));
  width = Number(prompt("Width:"));
  x = Number(prompt("X:"));
  y = Number(prompt("Y:"));
  if(isNaN(height)==true || isNaN(width)==true || isNaN(x)==true || isNaN(y)==true){
    alert("One of your inputs is not a number.");
  }else if(width<1){
    alert("Your width is too small.");
  }else if(height<1){
    alert("Your height is too small.");
  }else if(x<5){
    alert("Your x-coordinate is too small.");
  }else if(y<5){
    alert("Your y-coordinate is too small.");
  }else if(height+y>511 || width+x>1023){
    alert("This rectangle will not fit on the canvas.");
  }else{
    ctx.rect(x,y,width,height);
    ctx.stroke();
  }
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
const canvas = document.getElementById('canvas3');
const ctx = canvas.getContext('2d');
ctx.clearRect(0,0,canvas.width,canvas.height);
let color = prompt("Color:");
let supported = ['black','blue','green','orange','purple','red','yellow'];
if(supported.includes(color)==true){
  ctx.fillStyle= color;
  ctx.fillRect(10,10,100,50);
}else{
  alert(`${color} is not a unsupported color.`)
}
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  const canvas = document.getElementById('canvas4');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  let sides=[];
  sides.push(Number(prompt("Side 1:")));
  sides.push(Number(prompt("Side 2:")));
  sides.push(Number(prompt("Side 3:")));
  sides.sort(function(a,b) {return a-b})
  if(isNaN(sides[0])==true || isNaN(sides[1])==true || isNaN(sides[2])==true){
    alert("One of your inputs is not a number.");
  }else if(sides[0]**2+sides[1]**2!=sides[2]**2){
    alert("This is not a valid right triangle.")
  }else if(sides[0]+10>=canvas.height || sides[1]+10>=canvas.width){
    alert("The triangle will not fit on the canvas.")
  }else{
  ctx.beginPath();
  ctx.moveTo(10,10);
  ctx.lineTo(10,10+sides[0]);
  ctx.lineTo(10+sides[1],10+sides[0]);
  ctx.closePath();
  ctx.lineWidth=1;
  ctx.stroke();
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  const canvas = document.getElementById('canvas5');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  let radius=Number(prompt("Radius:"));
  if(isNaN(radius)==true){
    alert("Your input is not a number.");
  }else if(radius>250){
    alert("The smiley face will not fit on the canvas.");
  }else if(radius<1){
    alert("Your radius is too small.");
  }else{
    ctx.beginPath();
    ctx.arc(10+radius,10+radius,radius,0,Math.PI*2);
    ctx.moveTo(radius*1.7+10,radius+10);
    ctx.arc(10+radius,10+radius,radius*0.7,0,Math.PI,false);
    ctx.moveTo(radius*0.6+10,radius*0.5+10);
    ctx.arc(10+radius*0.5,10+radius*0.5,radius*0.1,0,Math.PI*2);
    ctx.moveTo(radius*1.6+10,radius*0.5+10);
    ctx.arc(10+radius*1.5,10+radius*0.5,radius*0.1,0,Math.PI*2);
    ctx.lineWidth=1;
    ctx.stroke();
  }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  const canvas = document.getElementById('canvas6');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  let outer = Number(prompt("Outer Radius:"));
  let inner = Number(prompt("Inner Radius:"));
  if(isNaN(outer)==true || isNaN(inner)==true){
    alert("One of your inputs is not a number.");
  }else if(outer<2){
    alert("Your outer radius is too small.");
  }else if(inner<1){
    alert("Your inner radius is too small.");
  }else if(inner>=outer){
    alert("Your outer radius must be larger than your inner radius.");
  }else{
    ctx.beginPath();
    ctx.moveTo(125,125-outer);
    for(let i=0; i<5; i++){
      ctx.lineTo(outer*Math.cos(Math.PI*(0.5-0.4*i))+125,125-outer*Math.sin(Math.PI*(0.5-0.4*i)));
      ctx.lineTo(inner*Math.cos(Math.PI*(0.3-0.4*i))+125,125-inner*Math.sin(Math.PI*(0.3-0.4*i)));
    }
    ctx.closePath();
    ctx.lineWidth=1;
    ctx.stroke();
  }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  const canvas = document.getElementById('canvas7');
  const ctx = canvas.getContext('2d');
  let x = 10+40*Math.sqrt(2);
  let y = 10;
  let angle = 0;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.moveTo(x,y);
  for(let i = 0; i<8; i++){
    ctx.lineTo(x+80*Math.cos(angle),y-80*Math.sin(angle));
    x+=80*Math.cos(angle);
    y-=80*Math.sin(angle);
    angle-=Math.PI/4;
  }
  ctx.closePath();
  ctx.lineWidth=1;
  ctx.stroke();
  ctx.fillStyle="red";
  ctx.fill();
  ctx.fillStyle="white";
  ctx.font = '65px sans-serif';
  ctx.fillText('STOP', 18, 73+40*Math.sqrt(2));

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  const canvas = document.getElementById('canvas8');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  let length=Number(prompt("Length:"));
  if(isNaN(length)==true){
    alert("Your input is not a number.");
  }else if(length>100){
    alert("The pyramid will not fit on the canvas.")
  }else{
    ctx.beginPath();
    let x=10;
    let prevx=10;
    let y=canvas.height-10-length;
    for(let j = 0; j<5; j++){
      for(let i = 0; i<5-j; i++){
        ctx.moveTo(x,y);
        ctx.rect(x,y,length,length);
        x+=length;
      }
      y-=length
      prevx+=length/2;
      x=prevx;
    }
    ctx.lineWidth=1;
    ctx.stroke();
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

 function drawHouse() {
 const canvas = document.getElementById('canvas9');
 const ctx = canvas.getContext('2d');
 ctx.clearRect(0,0,canvas.width,canvas.height);
 let house = prompt("House Color:");
 let door = prompt("Front Door Color:")
 let supported = ['blue','brown','green','orange','purple','red','yellow'];
 if(supported.includes(house)==true && supported.includes(door)){
   ctx.fillStyle= house;
   ctx.fillRect(150,canvas.height-460,700,450);
   ctx.strokeRect(150,canvas.height-460,700,450);
   ctx.fillStyle="lightskyblue";
   let windowx= [275,645,275,645];
   let windowy= [canvas.height-385,canvas.height-385,canvas.height-135,canvas.height-135];
   for(let i = 0; i<4; i++){
     ctx.moveTo(windowx[i],windowy[i]);
     ctx.fillRect(windowx[i],windowy[i],80,80);
     ctx.strokeRect(windowx[i],windowy[i],80,80);
   }
   ctx.fillStyle=door;
   ctx.fillRect(450,canvas.height-160,100,150);
   ctx.strokeRect(450,canvas.height-160,100,150);
   ctx.fillStyle="gold";
   ctx.moveTo(544,canvas.height-85);
   ctx.arc(537,canvas.height-85,7,0,Math.PI*2);
   ctx.fill();
   ctx.stroke();
   ctx.fillStyle="gray";
   ctx.beginPath();
   ctx.moveTo(150,canvas.height-460);
   ctx.lineTo(500,canvas.height-735);
   ctx.lineTo(850,canvas.height-460);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
 }else{
   alert(`One of your colors is not supported.`)
 }
 }
