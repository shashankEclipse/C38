class Form {
  constructor() {
    this.input = createInput("Name")
    this.button = createButton("Play")
    this.greeting = createElement("h2");
  }
    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(Math.round(displayWidth/2)-100, Math.round(displayHeight/20));
    
   
    
    this.input.position(130, displayHeight/5);
    this.button.position(displayWidth/2-750, displayHeight/4);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount = playerCount+1;
      
      
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello "  + player.name )
      this.greeting.position(130, displayHeight/5);
    });

  }
}
