class Ground {
     constructor(x, y, width, height) 
    { var options = 
        {
         isStatic:true
         } 
        this.body = Bodies.rectangle(x, y, width, height, options);
         this.width = width;
          this.height = height;
           World.add(world, this.body);
         }
          display()
        
         { 
             var pos =this.body.position;
             var angle = this.body.angle;
 
                rectMode(CENTER);
                strokeWeight(4);
                 stroke("black"); 
                fill("red");
                 rect(0, 0, this.width, this.height);
 
                 }
                 }
