class block{
    constructor(x, y, width, height){
        this.object=Bodies.rectangle(x,y,width, height,{isStatic:false});
        this.width=width;
        this.height=height;
        World.add(world, this.object);
    }

    display(){
        push ();
        translate(this.object.poition.x, this.object.position.y);
        rotate (this.object.angle);
        fill ("pink");
        rectMode (CENTER);
        rect(0,0,this.width, this.height);
        pop ();
    }
}