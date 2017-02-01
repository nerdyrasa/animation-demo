(function() {

  // Setup canvas and other variables
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  // Setup global variables
  var _radius = 300;
  var _angle = 0;
  var _lastTime = Date.now();

  window.onload = function() {
    animate(canvas, ctx);
  };

  function animate(canvas, ctx) {
    // Save my center
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // Get delta-time dt to smooth out animations
    var now = Date.now(),
      dt = (now - _lastTime) / 1000.0;

    // Change the angle per frame
    _angle += 30 * dt;

    var rad = _angle * Math.PI / 180;

    var x1 = centerX + Math.cos(rad) * _radius;
    var y1 = centerY + Math.sin(rad) * _radius;

    var opprad = rad * Math.PI;
    var x2 = centerX + Math.cos(opprad) * _radius;
    var y2 = centerX + Math.sin(opprad) * _radius;

    var r = 155;
    var g = 167;
    var b = 191;
    ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',255)';

    // Clear context
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set line color and alpha level

    // Draw line
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();

    _lastTime = now;

    // Request new frame
    window.requestAnimationFrame(function(){
      animate(canvas, ctx);
    });

  }


})();