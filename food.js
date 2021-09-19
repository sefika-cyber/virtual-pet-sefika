class food{
    constructor(x,y,width,height){
         
        var options ={ isStatic: false,
        friction:1
     }
        this.Img1=loadImage("images/coach.png");
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
      }
     bedroom(){
        background(bedroomImg,550,500)
     }
     garden(){
       background(gardenImg,550,500)
     }
     washroom(){
      background(washroomImg,550,500)
     }

     
      display()
      {

        var x = 80, y = 100;

        imageMode (CENTER);
        image(this.Img1,this.body.position.x, this.body.position.y,this.width, this.height);
        
      }
      
    
    } 
