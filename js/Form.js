class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement('h1')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
   
   this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-150, displayHeight/7);

    this.input.position(displayWidth/2-130, displayHeight/4);
    this.button.position(displayWidth/2-90, displayHeight/4+50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-130, displayHeight/4);
    });

  }
}
