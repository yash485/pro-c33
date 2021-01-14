class Plinko {
    constructor(x, y) {
        var options = {
            
            'isStatic':true
        }
     this.x = x;
     this.y = y;
        this.body = Bodies.circle(x, y, 15/2, options);
        
        World.add(world, this.body);
    }
    display() {

        push();
        var pos = this.body.position;
       rectMode(CENTER);
        noStroke();
        fill("white");
        ellipse(pos.x,pos.y,15,15);
        pop();
    }

};