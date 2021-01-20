class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");

    // array of position array 
    // this.trajectory = [p1[200, 200], p2[201, 202], p3 , p4, p5........];
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    //to store birds changing position
    var position = [this.body.position.x, this.body.position.y];

    if(this.body.position.x>220 && this.body.speed> 10){
      //to push position in trajectory array
      this.trajectory.push(position);

    }
    
    //start from i = 0
    //i <trajectory.length - stop at last item of trajectory array
    //i++ increasing i by 1 
    for(var i = 0; i <this.trajectory.length; i++){
      image (this.smoke, this.trajectory[i][0],this.trajectory[i][1] );
    }


  }
}
