class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    console.log(this.body.velocity.x);
    super.display();
    if(this.body.velocity.x > 9 && this.body.position.x > 200){
      var pos = [this.body.position.x, this.body.position.y];
      this.trajectory.push(pos);
    }
   
    // this.trajectory= [[200,50],[200,100],[200,150],[200,200]]
    //                    0         1         2         3

    for(var i = 0; i < this.trajectory.length; i++){//i++ equals to i = i+1
    image(this.smokeImg, this.trajectory[i][0], this.trajectory[i][1]);

    //image(200,50)
    //200,100
    //200, 150
    //200,200
    }
  }
}
