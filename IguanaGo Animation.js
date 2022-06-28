(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"IguanaGo Animation_atlas_1", frames: [[0,627,766,114],[685,402,327,77],[0,743,544,113],[546,743,466,118],[0,0,686,400],[768,481,127,142],[688,0,261,261],[0,402,683,223]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["IguanaGo Animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["IguanaGo Animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["IguanaGo Animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.arrow = function() {
	this.initialize(ss["IguanaGo Animation_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Elipse2 = function() {
	this.initialize(ss["IguanaGo Animation_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Ellipse1 = function() {
	this.initialize(ss["IguanaGo Animation_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["IguanaGo Animation_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.playa2nuevajpgcopy = function() {
	this.initialize(img.playa2nuevajpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3992,2992);


(lib.Text = function() {
	this.initialize(ss["IguanaGo Animation_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.website = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.website, new cjs.Rectangle(0,0,191.5,28.5), null);


(lib.text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Text();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(0,0,683,223), null);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.4482,0.4482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,117,117), null);


(lib.eclipse2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Elipse2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eclipse2, new cjs.Rectangle(0,0,686,400), null);


(lib.eclipse1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Ellipse1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eclipse1, new cjs.Rectangle(0,0,127,142), null);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(61.55,9.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(0,0,272,56.5), null);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.playa2nuevajpgcopy();
	this.instance.setTransform(0,0,0.3859,0.3859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,1540.4,1154.5), null);


(lib.arrow_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arrow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(0,0,466,118), null);


// stage content:
(lib.IguanaGoAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [40];
	// timeline functions:
	this.frame_40 = function() {
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://iguanagocr.com", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(491));

	// Button_png
	this.instance = new lib.button();
	this.instance.setTransform(1336,276.8,1,1,0,0,0,136,28.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.btn = new lib.button();
	this.btn.name = "btn";
	this.btn.setTransform(898.9,276.8,1,1,0,0,0,136,28.2);
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance}]},9).to({state:[{t:this.btn}]},2).wait(492));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({x:898.9,alpha:1},9).to({_off:true},2).wait(492));

	// Text_png
	this.instance_1 = new lib.text();
	this.instance_1.setTransform(726.5,137.1,1,1,0,0,0,341.5,111.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({y:107.5,alpha:1},9).to({_off:true},502).wait(1));

	// Website
	this.instance_2 = new lib.website();
	this.instance_2.setTransform(908.35,373.3,2,2,0,0,0,95.7,14.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({scaleX:1,scaleY:1,y:372.1,alpha:1},9).to({_off:true},484).wait(1));

	// logo_png
	this.instance_3 = new lib.logo_1();
	this.instance_3.setTransform(58.5,-56.5,1,1,0,0,0,58.5,58.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).to({y:63.5,alpha:1},9).to({_off:true},475).wait(1));

	// Circle
	this.instance_4 = new lib.eclipse1();
	this.instance_4.setTransform(63.5,71.8,1,1,0,0,0,63.5,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},530).wait(1));

	// bigcircle
	this.instance_5 = new lib.eclipse2();
	this.instance_5.setTransform(857,200.4,1,1,0,0,0,343,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},530).wait(1));

	// Arrow
	this.instance_6 = new lib.arrow_1();
	this.instance_6.setTransform(233,79,1,1,0,0,0,233,59);

	
	var _tweenStr_0 = cjs.Tween.get(this.instance_6).wait(1).to({x:233.3},0).wait(1).to({x:233.65},0).wait(1).to({x:234},0).wait(1).to({x:234.35},0).wait(1).to({x:234.7},0).wait(1).to({x:235.05},0).wait(1).to({x:235.4},0).wait(1).to({x:235.7},0).wait(1).to({x:236.05},0).wait(1).to({x:236.4},0).wait(1).to({x:236.75},0).wait(1).to({x:237.1},0).wait(1).to({x:237.45},0).wait(1).to({x:237.8},0).wait(1).to({x:238.1},0).wait(1).to({x:238.45},0).wait(1).to({x:238.8},0).wait(1).to({x:239.15},0).wait(1).to({x:239.5},0).wait(1).to({x:239.85},0).wait(1).to({x:240.2},0).wait(1).to({x:240.5},0).wait(1).to({x:240.85},0).wait(1).to({x:241.2},0).wait(1).to({x:241.55},0).wait(1).to({x:241.9},0).wait(1).to({x:242.25},0).wait(1).to({x:242.6},0).wait(1).to({x:242.9},0).wait(1).to({x:243.25},0).wait(1).to({x:243.6},0).wait(1).to({x:243.95},0).wait(1).to({x:244.3},0).wait(1).to({x:244.65},0).wait(1).to({x:245},0).wait(1).to({x:245.3},0).wait(1).to({x:245.65},0).wait(1).to({x:246},0).wait(1).to({x:246.35},0).wait(1).to({x:246.7},0).wait(1).to({x:247.05},0).wait(1).to({x:247.4},0).wait(1).to({x:247.7},0).wait(1).to({x:248.05},0).wait(1).to({x:248.4},0).wait(1).to({x:248.75},0).wait(1).to({x:249.1},0).wait(1).to({x:249.45},0).wait(1).to({x:249.8},0).wait(1).to({x:250.1},0).wait(1).to({x:250.45},0).wait(1).to({x:250.8},0).wait(1).to({x:251.15},0).wait(1).to({x:251.5},0).wait(1).to({x:251.85},0).wait(1).to({x:252.2},0).wait(1).to({x:252.5},0).wait(1).to({x:252.85},0).wait(1).to({x:253.2},0).wait(1).to({x:253.55},0).wait(1).to({x:253.9},0).wait(1).to({x:254.25},0).wait(1).to({x:254.6},0).wait(1).to({x:254.9},0).wait(1).to({x:255.25},0).wait(1).to({x:255.6},0).wait(1).to({x:255.95},0).wait(1).to({x:256.3},0).wait(1).to({x:256.65},0).wait(1).to({x:257},0).wait(1).to({x:257.3},0).wait(1).to({x:257.65},0).wait(1).to({x:258},0).wait(1).to({x:258.35},0).wait(1).to({x:258.7},0).wait(1).to({x:259.05},0).wait(1).to({x:259.4},0).wait(1).to({x:259.7},0).wait(1).to({x:260.05},0).wait(1).to({x:260.4},0).wait(1).to({x:260.75},0).wait(1).to({x:261.1},0).wait(1).to({x:261.45},0).wait(1).to({x:261.8},0).wait(1).to({x:262.1},0).wait(1).to({x:262.45},0).wait(1).to({x:262.8},0).wait(1).to({x:263.15},0).wait(1).to({x:263.5},0).wait(1).to({x:263.85},0).wait(1).to({x:264.2},0).wait(1).to({x:264.5},0).wait(1).to({x:264.85},0).wait(1).to({x:265.2},0).wait(1).to({x:265.55},0).wait(1).to({x:265.9},0).wait(1).to({x:266.25},0).wait(1).to({x:266.6},0).wait(1).to({x:266.9},0).wait(1).to({x:267.25},0).wait(1).to({x:267.6},0).wait(1).to({x:267.95},0).wait(1).to({x:268.3},0).wait(1).to({x:268.65},0).wait(1).to({x:269},0).wait(1).to({x:269.3},0).wait(1).to({x:269.65},0).wait(1).to({x:270},0).wait(1).to({x:270.35},0).wait(1).to({x:270.7},0).wait(1).to({x:271.05},0).wait(1).to({x:271.4},0).wait(1).to({x:271.7},0).wait(1).to({x:272.05},0).wait(1).to({x:272.4},0).wait(1).to({x:272.75},0).wait(1).to({x:273.1},0).wait(1).to({x:273.45},0).wait(1).to({x:273.8},0).wait(1).to({x:274.1},0).wait(1).to({x:274.45},0).wait(1).to({x:274.8},0).wait(1).to({x:275.15},0).wait(1).to({x:275.5},0).wait(1).to({x:275.85},0).wait(1).to({x:276.2},0).wait(1).to({x:276.5},0).wait(1).to({x:276.85},0).wait(1).to({x:277.2},0).wait(1).to({x:277.55},0).wait(1).to({x:277.9},0).wait(1).to({x:278.25},0).wait(1).to({x:278.6},0).wait(1).to({x:278.9},0).wait(1).to({x:279.25},0).wait(1).to({x:279.6},0).wait(1).to({x:279.95},0).wait(1).to({x:280.3},0).wait(1).to({x:280.65},0).wait(1).to({x:281},0).wait(1).to({x:281.3},0).wait(1).to({x:281.65},0).wait(1).to({x:282},0).wait(1).to({x:282.35},0).wait(1).to({x:282.7},0).wait(1).to({x:283.05},0).wait(1).to({x:283.4},0).wait(1).to({x:283.7},0).wait(1).to({x:284.05},0).wait(1).to({x:284.4},0).wait(1).to({x:284.75},0).wait(1).to({x:285.1},0).wait(1).to({x:285.45},0).wait(1).to({x:285.8},0).wait(1).to({x:286.1},0).wait(1).to({x:286.45},0).wait(1).to({x:286.8},0).wait(1).to({x:287.15},0).wait(1).to({x:287.5},0).wait(1).to({x:287.85},0).wait(1).to({x:288.2},0).wait(1).to({x:288.5},0).wait(1).to({x:288.85},0).wait(1).to({x:289.2},0).wait(1).to({x:289.55},0).wait(1).to({x:289.9},0).wait(1).to({x:290.25},0).wait(1).to({x:290.6},0).wait(1).to({x:290.9},0).wait(1).to({x:291.25},0).wait(1).to({x:291.6},0).wait(1).to({x:291.95},0).wait(1).to({x:292.3},0).wait(1).to({x:292.65},0).wait(1).to({x:293},0).wait(1).to({x:293.3},0).wait(1).to({x:293.65},0).wait(1).to({x:294},0).wait(1).to({x:294.35},0).wait(1).to({x:294.7},0).wait(1).to({x:295.05},0).wait(1).to({x:295.4},0).wait(1).to({x:295.7},0).wait(1).to({x:296.05},0).wait(1).to({x:296.4},0).wait(1).to({x:296.75},0).wait(1).to({x:297.1},0).wait(1).to({x:297.45},0).wait(1).to({x:297.8},0).wait(1).to({x:298.1},0).wait(1).to({x:298.45},0).wait(1).to({x:298.8},0).wait(1).to({x:299.15},0).wait(1).to({x:299.5},0).wait(1).to({x:299.85},0).wait(1).to({x:300.2},0).wait(1).to({x:300.5},0).wait(1).to({x:300.85},0).wait(1).to({x:301.2},0).wait(1).to({x:301.55},0).wait(1).to({x:301.9},0).wait(1).to({x:302.25},0).wait(1).to({x:302.6},0).wait(1).to({x:302.9},0).wait(1).to({x:303.25},0).wait(1).to({x:303.6},0).wait(1).to({x:303.95},0).wait(1).to({x:304.3},0).wait(1).to({x:304.65},0).wait(1).to({x:305},0).wait(1).to({x:305.3},0).wait(1).to({x:305.65},0).wait(1).to({x:306},0).wait(1).to({x:306.35},0).wait(1).to({x:306.7},0).wait(1).to({x:307.05},0).wait(1).to({x:307.4},0).wait(1).to({x:307.7},0).wait(1).to({x:308.05},0).wait(1).to({x:308.4},0).wait(1).to({x:308.75},0).wait(1).to({x:309.1},0).wait(1).to({x:309.45},0).wait(1).to({x:309.8},0).wait(1).to({x:310.1},0).wait(1).to({x:310.45},0).wait(1).to({x:310.8},0).wait(1).to({x:311.15},0).wait(1).to({x:311.5},0).wait(1).to({x:311.85},0).wait(1).to({x:312.2},0).wait(1).to({x:312.5},0).wait(1).to({x:312.85},0).wait(1).to({x:313.2},0).wait(1).to({x:313.55},0).wait(1).to({x:313.9},0).wait(1).to({x:314.25},0).wait(1).to({x:314.6},0).wait(1).to({x:314.95},0).wait(1).to({x:314.7},0).wait(1).to({x:314.45},0).wait(1).to({x:314.2},0).wait(1).to({x:314},0).wait(1).to({x:313.75},0).wait(1).to({x:313.5},0).wait(1).to({x:313.25},0).wait(1).to({x:313.05},0).wait(1).to({x:312.8},0).wait(1).to({x:312.55},0).wait(1).to({x:312.3},0).wait(1).to({x:312.1},0).wait(1).to({x:311.85},0).wait(1).to({x:311.6},0).wait(1).to({x:311.4},0).wait(1).to({x:311.15},0).wait(1).to({x:310.9},0).wait(1).to({x:310.65},0).wait(1).to({x:310.45},0).wait(1).to({x:310.2},0).wait(1).to({x:309.95},0).wait(1).to({x:309.7},0).wait(1).to({x:309.5},0).wait(1).to({x:309.25},0).wait(1).to({x:309},0).wait(1).to({x:308.8},0).wait(1).to({x:308.55},0).wait(1).to({x:308.3},0).wait(1).to({x:308.05},0).wait(1).to({x:307.85},0).wait(1).to({x:307.6},0).wait(1).to({x:307.35},0).wait(1).to({x:307.1},0).wait(1).to({x:306.9},0).wait(1).to({x:306.65},0).wait(1).to({x:306.4},0).wait(1).to({x:306.2},0).wait(1).to({x:305.95},0).wait(1).to({x:305.7},0).wait(1).to({x:305.45},0).wait(1).to({x:305.25},0).wait(1).to({x:305},0).wait(1).to({x:304.75},0).wait(1).to({x:304.5},0).wait(1).to({x:304.3},0).wait(1).to({x:304.05},0).wait(1).to({x:303.8},0).wait(1).to({x:303.6},0).wait(1).to({x:303.35},0).wait(1).to({x:303.1},0).wait(1).to({x:302.85},0).wait(1).to({x:302.65},0).wait(1).to({x:302.4},0).wait(1).to({x:302.15},0).wait(1).to({x:301.9},0).wait(1).to({x:301.7},0).wait(1).to({x:301.45},0).wait(1).to({x:301.2},0).wait(1).to({x:300.95},0).wait(1).to({x:300.75},0).wait(1).to({x:300.5},0).wait(1).to({x:300.25},0).wait(1).to({x:300.05},0).wait(1).to({x:299.8},0).wait(1).to({x:299.55},0).wait(1).to({x:299.3},0).wait(1).to({x:299.1},0).wait(1).to({x:298.85},0).wait(1).to({x:298.6},0).wait(1).to({x:298.35},0).wait(1).to({x:298.15},0).wait(1).to({x:297.9},0).wait(1).to({x:297.65},0).wait(1).to({x:297.45},0).wait(1).to({x:297.2},0).wait(1).to({x:296.95},0).wait(1).to({x:296.7},0).wait(1).to({x:296.5},0).wait(1).to({x:296.25},0).wait(1).to({x:296},0).wait(1).to({x:295.75},0).wait(1).to({x:295.55},0).wait(1).to({x:295.3},0).wait(1).to({x:295.05},0).wait(1).to({x:294.85},0).wait(1).to({x:294.6},0).wait(1).to({x:294.35},0).wait(1).to({x:294.1},0).wait(1).to({x:293.9},0).wait(1).to({x:293.65},0).wait(1).to({x:293.4},0).wait(1).to({x:293.15},0).wait(1).to({x:292.95},0).wait(1).to({x:292.7},0).wait(1).to({x:292.45},0).wait(1).to({x:292.25},0).wait(1).to({x:292},0).wait(1).to({x:291.75},0).wait(1).to({x:291.5},0).wait(1).to({x:291.3},0).wait(1).to({x:291.05},0).wait(1).to({x:290.8},0).wait(1).to({x:290.55},0).wait(1).to({x:290.35},0).wait(1).to({x:290.1},0).wait(1).to({x:289.85},0).wait(1).to({x:289.6},0).wait(1).to({x:289.4},0).wait(1).to({x:289.15},0).wait(1).to({x:288.9},0).wait(1).to({x:288.7},0).wait(1).to({x:288.45},0).wait(1).to({x:288.2},0).wait(1).to({x:287.95},0).wait(1).to({x:287.75},0).wait(1).to({x:287.5},0).wait(1).to({x:287.25},0).wait(1).to({x:287},0).wait(1).to({x:286.8},0).wait(1).to({x:286.55},0).wait(1).to({x:286.3},0).wait(1).to({x:286.1},0).wait(1).to({x:285.85},0).wait(1).to({x:285.6},0).wait(1).to({x:285.35},0).wait(1).to({x:285.15},0).wait(1).to({x:284.9},0).wait(1).to({x:284.65},0).wait(1).to({x:284.4},0).wait(1).to({x:284.2},0).wait(1).to({x:283.95},0).wait(1).to({x:283.7},0).wait(1).to({x:283.5},0).wait(1).to({x:283.25},0).wait(1).to({x:283},0).wait(1).to({x:282.75},0).wait(1).to({x:282.55},0).wait(1).to({x:282.3},0).wait(1).to({x:282.05},0).wait(1).to({x:281.8},0).wait(1).to({x:281.6},0).wait(1).to({x:281.35},0).wait(1).to({x:281.1},0).wait(1).to({x:280.9},0).wait(1).to({x:280.65},0).wait(1).to({x:280.4},0).wait(1).to({x:280.15},0).wait(1).to({x:279.95},0).wait(1).to({x:279.7},0).wait(1).to({x:279.45},0).wait(1).to({x:279.2},0).wait(1).to({x:279},0).wait(1).to({x:278.75},0).wait(1).to({x:278.5},0).wait(1).to({x:278.25},0).wait(1).to({x:278.05},0).wait(1).to({x:277.8},0).wait(1).to({x:277.55},0).wait(1).to({x:277.35},0).wait(1);
	this.timeline.addTween(_tweenStr_0.to({x:277.1},0).wait(1).to({x:276.85},0).wait(1).to({x:276.6},0).wait(1).to({x:276.4},0).wait(1).to({x:276.15},0).wait(1).to({x:275.9},0).wait(1).to({x:275.65},0).wait(1).to({x:275.45},0).wait(1).to({x:275.2},0).wait(1).to({x:274.95},0).wait(1).to({x:274.75},0).wait(1).to({x:274.5},0).wait(1).to({x:274.25},0).wait(1).to({x:274},0).wait(1).to({x:273.8},0).wait(1).to({x:273.55},0).wait(1).to({x:273.3},0).wait(1).to({x:273.05},0).wait(1).to({x:272.85},0).wait(1).to({x:272.6},0).wait(1).to({x:272.35},0).wait(1).to({x:272.15},0).wait(1).to({x:271.9},0).wait(1).to({x:271.65},0).wait(1).to({x:271.4},0).wait(1).to({x:271.2},0).wait(1).to({x:270.95},0).wait(1).to({x:270.7},0).wait(1).to({x:270.45},0).wait(1).to({x:270.25},0).wait(1).to({x:270},0).wait(1).to({x:269.75},0).wait(1).to({x:269.55},0).wait(1).to({x:269.3},0).wait(1).to({x:269.05},0).wait(1).to({x:268.8},0).wait(1).to({x:268.6},0).wait(1).to({x:268.35},0).wait(1).to({x:268.1},0).wait(1).to({x:267.85},0).wait(1).to({x:267.65},0).wait(1).to({x:267.4},0).wait(1).to({x:267.15},0).wait(1).to({x:266.9},0).wait(1).to({x:266.7},0).wait(1).to({x:266.45},0).wait(1).to({x:266.2},0).wait(1).to({x:266},0).wait(1).to({x:265.75},0).wait(1).to({x:265.5},0).wait(1).to({x:265.25},0).wait(1).to({x:265.05},0).wait(1).to({x:264.8},0).wait(1).to({x:264.55},0).wait(1).to({x:264.3},0).wait(1).to({x:264.1},0).wait(1).to({x:263.85},0).wait(1).to({x:263.6},0).wait(1).to({x:263.4},0).wait(1).to({x:263.15},0).wait(1).to({x:262.9},0).wait(1).to({x:262.65},0).wait(1).to({x:262.45},0).wait(1).to({x:262.2},0).wait(1).to({x:261.95},0).wait(1).to({x:261.7},0).wait(1).to({x:261.5},0).wait(1).to({x:261.25},0).wait(1).to({x:261},0).wait(1).to({x:260.8},0).wait(1).to({x:260.55},0).wait(1).to({x:260.3},0).wait(1).to({x:260.05},0).wait(1).to({x:259.85},0).wait(1).to({x:259.6},0).wait(1).to({x:259.35},0).wait(1).to({x:259.1},0).wait(1).to({x:258.9},0).wait(1).to({x:258.65},0).wait(1).to({x:258.4},0).wait(1).to({x:258.2},0).wait(1).to({x:259.35},0).wait(1).to({x:260.55},0).wait(1).to({x:261.75},0).wait(1).to({x:262.95},0).wait(1).to({x:264.15},0).wait(1).to({x:265.35},0).wait(1).to({x:266.55},0).wait(1).to({x:267.75},0).wait(1).to({x:268.95},0).wait(1).to({x:270.15},0).wait(1).to({x:271.35},0).wait(1).to({x:272.55},0).wait(1).to({x:273.75},0).wait(1).to({x:274.95},0).wait(1).to({x:276.15},0).wait(1).to({x:277.35},0).wait(1).to({x:278.55},0).wait(1).to({x:279.75},0).wait(1).to({x:280.95},0).wait(1).to({x:282.15},0).wait(1).to({x:283.35},0).wait(1).to({x:284.55},0).wait(1).to({x:285.75},0).wait(1).to({x:286.95},0).wait(1).to({x:288.15},0).wait(1).to({x:289.35},0).wait(1).to({x:290.55},0).wait(1).to({x:291.75},0).wait(1).to({x:292.95},0).wait(1).to({x:294.15},0).wait(1).to({x:295.35},0).wait(1).to({x:296.55},0).wait(1).to({x:297.75},0).wait(1).to({x:298.95},0).wait(1).to({x:300.15},0).wait(1).to({x:301.35},0).wait(1).to({x:302.55},0).wait(1).to({x:303.75},0).wait(1).to({x:304.95},0).wait(1).to({x:306.15},0).wait(1).to({x:307.35},0).wait(1).to({x:308.55},0).wait(1).to({x:309.75},0).wait(1).to({x:310.95},0).wait(1).to({x:312.15},0).wait(1).to({x:313.35},0).wait(1).to({x:314.55},0).wait(1).to({x:315.75},0).wait(1).to({x:316.95},0).wait(1).to({x:318.15},0).to({_off:true},1).wait(1));

	// Back
	this.instance_7 = new lib.background();
	this.instance_7.setTransform(-164.9,-176.8,1,1,0,0,0,770.1,577.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:579.4},529).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-554,1807,1710.7);
// library properties:
lib.properties = {
	id: '45EFAF78FFB7B14DB4FE6CB7A0C73660',
	width: 1200,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/playa2nuevajpgcopy.jpg", id:"playa2nuevajpgcopy"},
		{src:"images/IguanaGo Animation_atlas_1.png", id:"IguanaGo Animation_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['45EFAF78FFB7B14DB4FE6CB7A0C73660'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;