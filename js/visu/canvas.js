function Canvas(elementId) {
    this.canvas = document.getElementById(elementId);
<<<<<<< HEAD
    this.canvas.width = this.width = window.innerHeight * 2;
    this.canvas.height = this.height = window.innerWidth * 2;
=======
    this.canvas.width = this.width = window.innerWidth;
    this.canvas.height = this.height = window.innerHeight;
>>>>>>> ba32cd7... my visualization on Canon in D
    this.context = this.canvas.getContext('2d');
    this.shapes = [];
}
Canvas.prototype.addCircle = function (circle) {
    this.shapes.push(circle);
};
Canvas.prototype.draw = function () {
    for (var i = 0; i < this.shapes.length; i++) {
        this.drawCircle(this.shapes[i]);
    }
};
Canvas.prototype.drawCircle = function (circle) {
    this.context.beginPath();
    this.context.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI, false);
<<<<<<< HEAD
    this.context.fillStyle = circle.color;
=======
    var gradient = this.context.createRadialGradient(circle.centerX, circle.centerY, circle.radius/2,
    	circle.centerX, circle.centerY, circle.radius);
gradient.addColorStop(0, circle.color);
gradient.addColorStop(1, new RGBA(circle.color.red,circle.color.green,circle.color.blue,0));
    this.context.fillStyle = gradient;
>>>>>>> ba32cd7... my visualization on Canon in D
    this.context.fill();
};
Canvas.prototype.empty = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Canvas.prototype.gc = function () {
    var invisisble = [];
    for (var x = 0; x < this.shapes.length; x++) {
        if (false === this.shapes[x].isVisible()) {
            invisisble.push(this.shapes[x]);
        }
    }

    var index = null;
    for (var y = 0; y < invisisble.length; y++) {
        index = this.shapes.indexOf(invisisble[y]);
        if (index > -1) {
            this.shapes.splice(index, 1);
        }
    }
};
Canvas.prototype.getStartPoint = function (radius) {
    return ((this.width / 2) + (radius * 15));
<<<<<<< HEAD
};
=======
};
>>>>>>> ba32cd7... my visualization on Canon in D
