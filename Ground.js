class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,390,1000,20,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(1);
      fill("GREEN");
      rect(pos.x, pos.y, 1000, 20);
    }
  };
