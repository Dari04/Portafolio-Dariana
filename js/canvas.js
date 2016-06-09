(function(){
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

  var canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "source-over"; 
  var particles = [];
  var pIndex = 0;
  var total = 10, x, y, frameId;


  function Particle(){
    this.x = x || canvas.width / 2;
    this.y = y || canvas.height / 2;
    this.vx = (Math.random() * 10 - 3);
    this.vy = (Math.random() * 12 - 9);
    this.color = "#009ca8";
    particles[pIndex] = this;
    this.id = pIndex;
    pIndex++;
    this.life = 0;
    this.gravity = .05;
    this.size = parseInt(Math.random() * 10);
    this.maxlife = 100;
  }

  Particle.prototype.draw = function(){
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    this.life++;
    if(this.life >= this.maxlife){
      delete particles[this.id];
    }
  };

  canvas.onmousemove = function(e){
    var rect = canvas.getBoundingClientRect();
    x = e.x - rect.left;
    y = e.y - rect.top;

  };



  canvas.onmousedown = function(){
    cancelAnimationFrame(frameId)
  };

  canvas.onmouseup = function(){
    loop();
  };

  canvas.onmouseout = function(e){
    x = canvas.width / 2;
    y = canvas.height / 2;
  };

  window.addEventListener("resize", function(){
    canva.width = window.innerWidth;
    canvas.height = window.innerHeight;
    x = canvas.width / 2;
    y = canvas.height / 2;
  });

  function loop(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    for(var i=0; i<total; i++){
      new Particle();
    }
    for(var i in particles){
      particles[i].draw();
    }
    frameId = requestAnimationFrame(loop);
  }

  loop();
})();