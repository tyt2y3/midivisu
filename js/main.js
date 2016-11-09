<<<<<<< HEAD
var app, file = 'assets/tab_1_1.mid';

window.onload = function () {
    app = new VisuApp(20, 3, 'canvas');

    app.run();

    var colors = [[255, 0, 0],
        [255, 64, 0],
        [255, 128, 0],
        [255, 191, 0],
        [255, 255, 0],
        [191, 255, 0],
        [128, 255, 0],
        [64, 255, 0],
        [0, 255, 0],
        [0, 255, 64],
        [0, 255, 128],
        [0, 255, 191],
        [0, 255, 255],
        [0, 191, 255],
        [0, 128, 255],
        [0, 64, 255],
        [0, 0, 255],
        [64, 0, 255],
        [128, 0, 255],
        [191, 0, 255],
        [255, 0, 255],
        [255, 0, 191],
        [255, 0, 128],
        [255, 0, 64],
        [255, 0, 0]];

    MIDI.loadPlugin({
        soundfontUrl: "https://rawgit.com/gleitz/midi-js-soundfonts/master/FluidR3_GM/",
=======
var app, file = 'assets/CanonInD.mid';

window.onload = function () {
	can = new Canvas('canvas');
	can.empty();
/*
    app = new VisuApp(20, 3, 'canvas');

    app.run();
*/
    var colors = [[255, 0, 0],[0, 255, 0],[100, 100, 255],
    	[255,255,0],[0,255,255],[255,0,255]];

    MIDI.loadPlugin({
        soundfontUrl: "https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FluidR3_GM/",
>>>>>>> ba32cd7... my visualization on Canon in D
        onsuccess: function() {
            console.log('done');
            var player = MIDI.Player;
            player.loadFile(file, function () {

                var instruments = player.getFileInstruments();
                instruments.push('synth_drum');

                MIDI.loadPlugin({
<<<<<<< HEAD
                    soundfontUrl: "https://rawgit.com/gleitz/midi-js-soundfonts/master/FluidR3_GM/",
=======
                    soundfontUrl: "https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FluidR3_GM/",
>>>>>>> ba32cd7... my visualization on Canon in D
                    instruments: instruments,
                    onsuccess: function() {
                        var player = MIDI.Player;

                        player.loadFile(file, function () {
                            console.log('about to play');
<<<<<<< HEAD

=======
/*
>>>>>>> ba32cd7... my visualization on Canon in D
                            MIDI.programChange(0, MIDI.GM.byName['distortion_guitar'].number);
                            MIDI.programChange(2, MIDI.GM.byName['distortion_guitar'].number);
                            MIDI.programChange(4, MIDI.GM.byName['electric_bass_finger'].number);
                            MIDI.programChange(6, MIDI.GM.byName['fx_4_atmosphere'].number);
                            MIDI.programChange(9, 119);
                            MIDI.programChange(10, 119);
<<<<<<< HEAD

                            player.addListener(function(data) {
                                console.log(data.channel);
=======
*/
							var digits = 6;
							var R = 15;
							var last, lastTime;
                            player.addListener(function(data) {
                            	can.empty();
                            	for (var j=0; j<3; j++) {
                            	for (var i=0; i<digits; i++) {
                            		if ((data.note >> (digits-1-i)) & 1)
                            		can.drawCircle(new Circle(make_color(colors[i]),
                            		R, //radius
                            		can.width/2+R*4*(i-digits/2)+R*4*digits*(j-1)+j*50, //x
                            		can.height/2+50*(j==1?-1:(j==2?2:1))+(j==1?i*10:(j==0?i*5:0)) //y
                            		));
                        		}
                        		}
                            	/*
                                console.log(data.note, data.channel);
>>>>>>> ba32cd7... my visualization on Canon in D
                                posTop = 100 + 50 * data.channel + 650 - (data.note * 10);
                                r = colors[data.channel][0];
                                g = colors[data.channel][1];
                                b = colors[data.channel][2];

                                app.addCircle(rgba(r, g, b, 1), 25, posTop);
<<<<<<< HEAD
=======
                                */
>>>>>>> ba32cd7... my visualization on Canon in D
                            });

                            player.start();
                        });
                    }
                });
            });
        }
    });
};
