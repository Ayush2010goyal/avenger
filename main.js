var canvas = new fabric.Canvas('myCanvas');

image_width=30;
image_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.ScaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}

function new_image(get_Image){
    fabric.Image.fromURL(get_Image, function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.ScaleToHeight(block_image_height);
        block_image_object.set({top:player_y,left:player_x});
        canvas.add(block_image_object);
    });
}