class Monster {
    constructor(x, y, r) 
   { var options = 
       {
        'friction':1.0,
         'density':1,
        } 
       this.body = Bodies.circle(x, y, this.r/2, options);
        this.r = r;
this.Image=loadImage("Monster-01.png")
          World.add(world, this.body);
        }
         display()
        { 
            var pos =this.body.position;
            var angle = this.body.angle;
             push();
              translate(pos.x, pos.y);
              rotate(angle);
               imageMode(CENTER);
               strokeWeight(4);
                stroke("black"); 
               fill("red");
                image(this.image,0,0, this.r, this.r);
                 pop();
                }
                }
