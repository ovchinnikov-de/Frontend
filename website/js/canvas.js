const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];
const BUBBLE_DENSITTY = 100;

function generate(left, right){
    return (Math.random() * (left - right) + right).toFixed(2);
}

class Bubble{
    constructor(canvas){
        this.canvas = canvas;
        this.getCanvasSize();
        this.init();
    }

    getCanvasSize(){
        //Для расчёта положения точки в секции
        this.canvasWidth = this.canvas.clientWidth; // Ширина html элемента
        this.canvasHeight = this.canvas.clientHeight; //Высота html элемента
    }

    //Метод выбирает случайный цвет шарика
    init(){
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = generate(5,10);//прозрачность
        this.size = generate(1,3);
        this.translateX = generate(0, this.canvasWidth);//начальная позиция шарика
        this.translateY = generate(0, this.canvasHeight);
        this.velocity = generate(20,40); // скорость шарика, сделанный случайным числом
        this.moveX = generate(-2,2)/this.velocity; // направление движения
        this.moveY = generate(1,20)/this.velocity;
    }
// Метод перемещения пузырька
    move(){
        this.translateX = this.translateX - this.moveX;
        this.translateY = this.translateY - this.moveY;
//Чтобы не выйти за границы холста
        if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth){
            this.init();
            this.translateY = this.canvasHeight;
        }
    }
}



class Background{
    constructor(id){
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.dpr = window.devicePixelRatio;
    }
//Метод запустит анимаию
    start(){
        this.canvasSize();//подстроит размеры холста
        this.generateBubbles();//создаст пузырьки
        this.animate();//анимирует пузырьки
    }
    canvasSize(){
        this.canvas.width = this.canvas.offsetWidth * this.dpr;
        this.canvas.height = this.canvas.offsetHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
    }

    generateBubbles(){
        this.bubblesList = [];
        for (let i=0;i<BUBBLE_DENSITTY; i++){
            this.bubblesList.push(new Bubble(this.canvas));
        }
    }

    animate(){
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);//очистить весь холст
        this.bubblesList.forEach ((bubble) => {
        bubble.move();
        this.ctx.translate(bubble.translateX, bubble.translateY);
        this.ctx.beginPath();
        this.ctx.arc(0,0, bubble.size, 0, 2 * Math.PI);
        this.ctx.fillStyle = "rgba(" + bubble.color + "," + bubble.alpha + ")";
        this.ctx.fill();
        this.ctx.setTransform(this.dpr,0 , 0, this.dpr, 0, 0);   
    });
requestAnimationFrame(this.animate.bind(this));
 }
}
const canvas = new Background("orb-canvas");
    canvas.start();




