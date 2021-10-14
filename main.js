
// Create canvas variable
canvas=new fabric.canvas("myCanvas");
//Set initial positions for ball and hole images.
var ball_x=0;
var ball_y=0;
var hole_x=600;
var hole_y=700;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL(get_img, function (Img) {
        hole_object = Img;
        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
        hole_object.set({
            top: hole_y,
            left: phole_x
        });
      canvas.add(hole_object);
    });
	new_image();
	// write code to Upload golf image on the canvas
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function (Img) {
        block_image_obj = Img;
        block_image_obj.scaleToWidth(50);
        block_image_obj.scaleToHeight(50);
        block_image_obj.set({
            top: ball_y,
            left: ball_x 
        });
        canvas.add(block_image_obj);  

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ball_x==hole_x && ball_y==hole_y){
		console.log("Game Over!")
		document.getElementById("hd3").innerHTML="You've won the game!";
		canvas.remove(block_image_obj);
		document.getElementById("myCanvas").style.borderColor="red";
	}
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

