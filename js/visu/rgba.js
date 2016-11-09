function rgba(red, green, blue, alpha) {
    return new RGBA(red, green, blue, alpha);
}
<<<<<<< HEAD
=======
function make_color(a) {
	return new RGBA(a[0],a[1],a[2],1);
}
>>>>>>> ba32cd7... my visualization on Canon in D
function RGBA(red, green, blue, alpha) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
}
RGBA.prototype.toString = function () {
    return 'rgba('+this.red+', '+this.green+', '+this.blue+', '+this.alpha+')';
};
RGBA.prototype.fade = function(percentage) {
    percentage = percentage / 100;

    if (this.alpha <= percentage) {
        this.alpha = 0;

        return;
    }

    this.alpha -= percentage;
};
