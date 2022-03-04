class Boat {
constructor(x,y,w,h,boatpos){
    var options = {
        density:1,
        friction:1
    }
    this.w = w;
    this.h = h;
    this.boatPosition = boatpos;
    this.body = Bodies.rectangle(x,y, this.w, this.h , options);
    this.image = loadImage("./assets/boat.png");
    World.add(world, this.body);

}
display() {
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,this.boatPosition,this.w,this.h);
    pop();
}
remove(index) {
    setTimeout(()=>{
        World.remove(world,boats[index].body);
        delete boats[index];
    },2000);
}
}