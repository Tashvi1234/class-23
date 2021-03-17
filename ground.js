class Ground {

    constructor (x,y,w, h) {
        var options = {
            isStatic : true
        }
        this.width = w;
        this.height = h;
        // create physics engine body
        this.groundBody = Bodies.rectangle (x, y, this.width, this.height, options);
        World.add (myWorld, this.groundBody);

        //console.log (this);
        
        
    }

    display () {
        var pos = this.groundBody.position;
        rectMode (CENTER);
        fill ("brown");
        rect (pos.x, pos.y, this.width, this.height);

    }

}