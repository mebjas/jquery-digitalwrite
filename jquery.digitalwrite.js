// Matrix format of each alphabet
var A = [
	[0, 1, 1, 1, 0],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1]
];
var B = [
	[1, 1, 1, 1, 0],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 0],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 0]
];
var C = [
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0],
	[1, 0, 0, 0, 0],
	[1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1]
];
var D = [
	[1, 1, 1, 1, 0],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 0]
];
var E = [
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1]
];
var F = [
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0],
	[1, 0, 0, 0, 0]
];
var G = [
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0],
	[1, 0, 0, 1, 1],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 1]
];
var H = [
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1]
];
var I = [
	[1, 1, 1, 1, 1],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[1, 1, 1, 1, 1]
];
var J = [
	[1, 1, 1, 1, 1],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[1, 0, 1, 0, 0],
	[1, 1, 1, 0, 0]
];
var K = [
	[1, 0, 0, 1, 0],
	[1, 0, 1, 0, 0],
	[1, 1, 0, 0, 0],
	[1, 0, 1, 0, 0],
	[1, 0, 0, 1, 0]
];
var L = [
	[1, 0, 0, 0, 0],
	[1, 0, 0, 0, 0],
	[1, 0, 0, 0, 0],
	[1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1]
];
var M = [
	[1, 0, 0, 0, 1],
	[1, 1, 0, 1, 1],
	[1, 0, 1, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1]
];
var N = [
	[1, 0, 0, 0, 1],
	[1, 1, 0, 0, 1],
	[1, 0, 1, 0, 1],
	[1, 0, 0, 1, 1],
	[1, 0, 0, 0, 1]
];
var O = [
	[0, 1, 1, 1, 0],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[0, 1, 1, 1, 0]
];
var P = [
	[1, 1, 1, 1, 0],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 0],
	[1, 0, 0, 0, 0],
	[1, 0, 0, 0, 0]
];
var Q = [
	[0, 1, 1, 1, 0],
	[1, 0, 0, 0, 1],
	[1, 0, 1, 0, 1],
	[1, 0, 0, 1, 1],
	[0, 1, 1, 1, 0]
];
var R = [
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 1, 1, 0],
	[1, 0, 0, 1, 0],
	[1, 0, 0, 0, 1]
];
var S = [
	[0, 1, 1, 1, 1],
	[1, 0, 0, 0, 0],
	[0, 1, 1, 1, 0],
	[0, 0, 0, 0, 1],
	[1, 1, 1, 1, 0]
];
var T = [
	[1, 1, 1, 1, 1],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0]
];
var U = [
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[0, 1, 1, 1, 0]
];
var V = [
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[0, 1, 0, 1, 0],
	[0, 1, 0, 1, 0],
	[0, 0, 1, 0, 0]
];
var W = [
	[1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1],
	[0, 1, 1, 1, 0]
];
var X = [
	[1, 0, 0, 0, 1],
	[0, 1, 0, 1, 0],
	[0, 0, 1, 0, 0],
	[0, 1, 0, 1, 0],
	[1, 0, 0, 0, 1]
];
var Y = [
	[1, 0, 0, 0, 1],
	[0, 1, 0, 1, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0]
];
var Z = [
	[1, 1, 1, 1, 1],
	[0, 0, 0, 1, 0],
	[0, 0, 1, 0, 0],
	[0, 1, 0, 0, 0],
	[1, 1, 1, 1, 1]
];
var dot = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 1, 1, 1, 0],
	[0, 1, 1, 1, 0],
	[0, 1, 1, 1, 0]
];
var exclamation = [
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0]
];

// Referencess
var ms = {
	A: A,
	B: B,
	C: C,
	D: D,
	E: E,
	F: F,
	G: G,
	H: H,
	I: I,
	J: J,
	K: K,
	L: L,
	M: M,
	N: N,
	O: O,
	P: P,
	Q: Q,
	R: R,
	S: S,
	T: T,
	U: U,
	V: V,
	W: W,
	X: X,
	Y: Y,
	Z: Z,
	'.': dot,
	'!': exclamation
};

var blobCount = {};

(function( $ ) {
	/**
	 * Function to count no of blobs in the charecter
	 * @optimised: cache of data done, is same char is
	 * requested multiple times
	 * @dependent on global variable {ms}
	 * @param: char (string) - the charecter
	 */
	function countBlobs(char) {
		char = char.toUpperCase();
		if (typeof blobCount[char] != 'undefined')
			return blobCount[char];

		var _b = 0;
		for (i = 0; i < ms[char].length; i++) {
			for (j = 0; j < ms[char][i].length; j++) {
				if ( ms[char][i][j] == 1) _b++;
			}
		}
		blobCount[char] = _b;
		return _b;
	}

	/**
	 * Function to rearrange the arrangement of blobs to 
	 * forma a certain charecter
	 * @param: blob (Object) - the blob object
	 * @param: matrix (Array) - the array corresponding to the charecter
	 * TODO: Add other sort of animations to this
	 */
	function arrange(blob, matrix, callback) {
		var bmatrix = [];
		for (i = 1; i < 6; i++) {
			bmatrix[i-1] = [];
			for (j = 1; j < 6; j++)
				bmatrix[i-1][j-1] = blob.matrix[i][j];
		}

		for (i = 0; i < 5; i++) {
			for (j = 0; j < 5; j++) {
				if (matrix[i][j]) {
					var isB = false;
					for (x = 0; x < 5; x++) {
						for (y = 0; y < 5; y++) {
							if (bmatrix[x][y]) {
								switch (blob.animation) {
									case 'spiral':
										blob.SpiralTo((x+1) +'_' +(y+1), i + 1, j + 1); break;
									case 'contract':
										blob.MoveTo((x+1) +'_' +(y+1), 3, 3); break;
									case 'fade':
										blob.FadeTo((x+1) +'_' +(y+1), i + 1, j + 1); break;
									case 'flow':
										blob.flowTo((x+1) +'_' +(y+1), i + 1, j + 1); break;
									default:
										blob.MoveTo((x+1) +'_' +(y+1), i + 1, j + 1); break;
								}
								bmatrix[x][y] = false;
								isB = true;
								break;
							}
						}
						if (isB) break;
					}
				}
			}
		}


		if (blob.animation == 'contract') {
			setTimeout(function() {
				var i = 0, j = 0;

				for (i = 0; i < 5; i++)
					for (j = 0; j < 5; j++)
						if (matrix[i][j]) blob.MoveTo('3_3', i + 1, j + 1);
			}, 1000);
		}

		if (typeof callback == 'function') {
			setTimeout(callback, 1000);
		}
	}

	/**
	 * [HELPER] [recursive] Function to rearrange the arrangement of blobs to 
	 * forma a certain charecter, with spiral animation
	 * @param: src (Object) - the src coordinates, with element identifier
	 * @param: tgt (Object) - the target coordinates,
	 * @param: r (Decimal) - radial distance
	 * @param: DX (int) - direction in x
	 * @param: DYDir (int) - direction in y
	 * @param: start (bool) - to identify first call
	 */
	var FREQ = 10;
	function circle(src, tgt, r, DX, DYdir, start) {
		if (typeof start != 'undefined') {
			if (src.y < tgt.y) DYdir = -1;
		}

		if (r < 1) {
			src.elem.css('top', tgt.y +'px');
			src.elem.css('left', tgt.x +'px');
			return;
		}

		var DY = (r) * (r) - (src.x - tgt.x) * (src.x - tgt.x);
		DY = Math.sqrt(DY);

		if (isNaN(DY)) {
			DX *= -1;
			DYdir *= -1;
			src.x = src.x + 4 * DX;
			DY = (r) * (r) - (src.x - tgt.x) * (src.x - tgt.x);
			DY = Math.sqrt(DY);
		} else src.x = src.x + 2 * DX;
		src.y = tgt.y + DYdir * DY;


		if (isNaN(src.y)) {
			src.elem.css('top', tgt.y +'px');
			src.elem.css('left', tgt.x +'px');
			return;
		}


		src.elem.css('top', src.y +'px');
		src.elem.css('left', src.x +'px');

		setTimeout(function() {
			circle(src, tgt, r-1, DX, DYdir);
		}, FREQ);
	}

	// dictionery [hash] => {bool}, to make sure hashes used
	// are unique
	var hashes = {};

	// Constructor of the class
	var digitalwrite = function(elem, options) {

		// Initialise some default properties
		this.InitVariables();

		// the default DOM element
		this.elem = elem;

		// Set all properties	
		// the charecter
		this.char = options.char;
		this.char_x = this.char;

		// Determine hash for this element and give it to the
		// DOM element as attribute - needed?
		this.hash = (Math.floor(Math.random() * 10000) % 5000);
		while (typeof hashes[this.hash] != 'undefined') {
			this.hash = (Math.floor(Math.random() * 10000) % 5000);
		}
		this.elem.attr('hash', this.hash);

		// set height and weight
		if (typeof options.height != 'undefined' && parseInt(options.height) > 0) {
			this.height = parseInt(options.height);
			this.blobHeight = parseInt(options.height) / 5;
		}
		if (typeof options.width != 'undefined' && parseInt(options.width) > 0) {
			this.width = parseInt(options.width);
			this.blobWidth = parseInt(options.width) / 5;
		}

		// Set background and border color
		if (typeof options.background != 'undefined') {
			this.background = options.background;
		}
		if (typeof options.border != 'undefined') {
			this.border = options.border;
		}

		if (typeof options.timeout != 'undefined') {
			this.timeout = options.timeout;
			console.log('timeout ', this.timeout);
		}

		// Set animation property
		if (typeof options.animation != 'undefined')
			this.animation = options.animation;

		if (typeof options.success == 'function') {
			this.success = options.success;
		} else if (typeof options.success != 'undefined') {
			// defined but not function
			console.error('[digitalwrite - error] {options.success} should be a function');
		}

		// Set posX and posY for the element
		var offset = this.elem.offset();
		this.startX = offset.left;
		this.startY = offset.top;

		this.elem.css('position', 'relative');
		this.elem.css('height', this.height +'px');
		this.elem.css('width', this.width +'px');

		// Find the req value and set it
		this.req = countBlobs(options.char);

		// initialise the matrix
		this.matrix = [];
		for (i = 0; i < 7; i++) {
			this.matrix[i] = [];
			for (j = 0; j < 7; j++) {
				if (i == 0 || j == 0 || i == 6 || j == 6)
					this.matrix[i][j] = 1;
				else this.matrix[i][j] = 0;
			}
		}

		if (this.animation == 'none') {
			// just create if
			for (i = 0; i < 5; i++) {
				for (j = 0; j < 5; j++) {
					if (ms[this.char][i][j]) {
						this.createElement(i, j);
						this.create++;
						this.matrix[i + 1][j + 1] = 1;
					}
				}
			}

			if (this.success != null) this.success();
			return;
		}

		// Insert the middle element
		this.create = 1;
		this.matrix[3][3] = 1;
		this.createElement(3, 3);

		var _this = this;
		setTimeout(function() {
			_this.Spread(3,3)
		}, this.timeout);
	}

	// Function to return relative position of element in i, j
	digitalwrite.prototype.GetPosition = function(i, j) {
		return { x: j * this.blobWidth, y: i * this.blobHeight };
	}

	/**
	 * Function to create an elment at i,j position
	 */
	digitalwrite.prototype.createElement = function(i, j) {
		var obj = this.GetPosition(i, j);
		var div = document.createElement('div');
		$(div).addClass('dwelem');

		$(div).attr('pos', this.char_x +this.hash +'_' +i +'_' +j);
		this.matrix[i][j]++;

		// Give CSS properties to the element
		// Fixed ones
		$(div).css('display', 'inline-block');
		$(div).css('position', 'absolute');
		$(div).css('transition', 'top .2s, left .2s');

		// Variable ones
		$(div).css('top', obj.y +'px').css('left', obj.x +'px');
		$(div).css('width', this.blobWidth +'px').css('height', this.blobHeight +'px');
		$(div).css('background-color', this.background);
		$(div).css('border', this.border);
		this.elem.append(div);
		return div;
	}

	/**
	 * Function to delete @param:count no of blobs
	 */
	digitalwrite.prototype.deleteBlobs = function(count) {
		var matrix = ms[this.char];
		for (i = 0; i < ms[this.char].length; i++) {
			for (j = 0; j < ms[this.char][i].length; j++) {
				if (ms[this.char][i][j] == 1) {
					var id = (i + 1) +'_' +(j + 1);
					var t = $(".dwelem[pos='" +this.char_x +this.hash +'_' +id +"']").eq(0);
					t.remove();
					matrix[i][j] = 0;
					--count;
					if (count == 0) return matrix;
				}
			}
		}
		return matrix;
	}

	/**
	 * Function to create @param:count no of blobs
	 */
	digitalwrite.prototype.createBlobs = function(count) {
		var matrix = ms[this.char];
		var _b = [], c = count, i, j;

		// get count no of blobs that are not empty
		for (i = 0; i < ms[this.char].length; i++) {
			for (j = 0; j < ms[this.char][i].length; j++) {
				if (ms[this.char][j][i] == 1) {
					_b.push({i: i, j: j});
					--c;
					if (c == 0) break;
				}
			}
			if (c == 0) break;
		}

		// if not all count no of blobs created create them
		if (c) {
			while(c--) {
				_b.push(_b[_b.length - 1]);
			}
		}

		for (var i = 0; i < ms[this.char].length; i++) {
			for (var j = 0; j < ms[this.char][i].length; j++) {
				if (ms[this.char][i][j] == 0) {

					var pos = _b.pop();
					this.createElement(pos.i + 1, pos.j + 1);
					this.MoveTo( (pos.i+1) +'_' +(pos.j+1), i + 1, j + 1);

					matrix[i][j] = 1;
					--count;
					if (count == 0) return matrix;
				}
			}
		}
		return matrix;
	}

	/**
	 * Function to transform this to some other charecter
	 */
	digitalwrite.prototype.transformTo = function(char, callback) {
		var _prevCharCount = countBlobs(this.char);
		var _neededCharCount = countBlobs(char);
		var matrix = ms[this.char], i, j;

		if (_prevCharCount > _neededCharCount) {
			// delete few charecters
			matrix = this.deleteBlobs(_prevCharCount - _neededCharCount);
		} else if (_prevCharCount < _neededCharCount) {
			// create certain blocks
			matrix = this.createBlobs(_neededCharCount - _prevCharCount);
		}

		for (i = 1; i < 6; i++) {
			for (j = 1; j < 6; j++) {
				this.matrix[i][j] = matrix[i - 1][j - 1];
			}
		}

		// this.char_x = char;

		// make a matrix
		var _matrix = [];
		for (var i = 0; i < ms[this.char].length; i++)
			_matrix[i] = [0, 0, 0, 0, 0];

		this.elem.children('.dwelem').each(function() {
			var attr = $(this).attr('pos').split('_');
			_matrix[parseInt(attr[1]) - 1][parseInt(attr[2]) - 1] = 1;
		});

		var _pos = [];
		for (i = 0; i < 5; i++) {
			for (j = 0; j < 5; j++) {
				if (!ms[char][i][j] && _matrix[i][j]) {
					_pos.push({i: i, j: j});
				}
			}
		}

		for (i = 0; i < 5; i++) {
			for (j = 0; j < 5; j++) {
				if (ms[char][i][j] && !_matrix[i][j]) {
					var pos = _pos.pop();
					this.MoveTo((pos.i + 1) +'_' +(pos.j + 1), i + 1, j + 1);
				}
			}
		}

		// Change the char, and hash of every element
		this.char_x = char + this.char_x;
		this.elem.children('.dwelem').each(function() {
			var attr = $(this).attr('pos');
			attr = char + attr.substr(0, attr.length);
			$(this).attr('pos', attr);
		});

		if (typeof callback == 'function') {
			setTimeout(callback, 1000);
		}
	}

	/**
	 * Function to move an element with an identfier {id}
	 * to position i, j
	 */
	digitalwrite.prototype.MoveTo = function(id, i, j) {
		var p = id.split('_');
		this.matrix[parseInt(p[0])][parseInt(p[1])]--;
		this.matrix[i][j]++;

		var t = $(".dwelem[pos='" +this.char_x +this.hash +'_' +id +"']").eq(0);
		t.attr('pos', this.char_x +this.hash +'_' +i +'_' +j);
		var obj = this.GetPosition(i, j);
		t.css('top', obj.y +'px');
		setTimeout(function() {
			t.css('left', obj.x +'px');
		}, 500);
	}

	/**
	 * Function to move an element with an identfier {id}
	 * to position i, j
	 * TODO: Correct this, this is incorrect
	 */
	digitalwrite.prototype.FadeTo = function(id, i, j) {
		var p = id.split('_');
		this.matrix[parseInt(p[0])][parseInt(p[1])]--;
		this.matrix[i][j]++;

		var t = $(".dwelem[pos='" +this.char_x +this.hash +'_' +id +"']").eq(0);
		t.fadeOut();
		t.attr('pos', this.char_x +this.hash +'_' +i +'_' +j);
		var obj = this.GetPosition(i, j);
		t.css('top', obj.y +'px');
		t.css('left', obj.x +'px');

		setTimeout(function() {
			t.fadeIn();
		}, this.timeout);
	}

	/**
	 * Function to spirally move the blob element with identifier {id}
	 * to i, j
	 * TODO: this animation is not yet perfect, correct it
	 */
	digitalwrite.prototype.SpiralTo = function(id, i, j) {
		var t = $(".dwelem[pos='" +this.char_x +this.hash +'_' +id +"']").eq(0);
		t.css('transition', 'none');
		var src = id.split('_');
		src = this.GetPosition(src[0], src[1]);
		src.elem = t;

		var tgt = this.GetPosition(i, j);

		var r = Math.sqrt( (src.x - tgt.x) * (src.x - tgt.x) + (src.y - tgt.y) * (src.y - tgt.y) );
		var _this = this;
		setTimeout(function() {
			t.attr('pos', _this.char_x +_this.hash +'_' +i +'_' +j);
			circle(src, tgt, r, -1, 1, true);
		}, 500);
	}

	// Function to create a flow animation
	// TODO: experimental for now, finish it
	digitalwrite.prototype.flowTo = function(id, i, j) {
		var t = $(".dwelem[pos='" +this.char_x +this.hash +'_' +id +"']").eq(0);
		t.css('transition', 'width .5s ease-out, height .5s ease-out, top .5s ease-out, left .5 ease-out');
		var src = id.split('_');
		src = this.GetPosition(src[0], src[1]);

		var tgt = this.GetPosition(i, j);
		var deltaW = Math.abs(tgt.x - src.x);
		if (tgt.x < src.x) {
			t.css('left', tgt.x +'px');
		}
		t.css('width', deltaW +'px');
		var _this = this;

		setTimeout(function() {
			t.css('width', _this.blobWidth +'px');
			t.css('left', tgt.x +'px');

			var deltaH = Math.abs(tgt.y - src.y);
			if (tgt.y < src.y) t.css('top', tgt.y +'px');
			t.css('height', deltaH +'px');
			setTimeout(function() {
				t.css('height', _this.blobHeight +'px');
				t.css('top', tgt.y +'px');
				t.attr('pos', _this.char_x +_this.hash +'_' +i +'_' +j);
			}, _this.timeout);
		}, this.timeout);
	}

	/**
	 * function to do random creation and spreading
	 */
	digitalwrite.prototype.Spread = function(i, j) {
		if (this.create == this.req) {
			if (typeof this.alphabetised == 'undefined') {
				this.alphabetised = true;
				arrange(this, ms[this.char], this.success);
			}
			return;
		}
		var first = null, second = null, isBroken = false;

		if (Math.random() > .5) {
			for (x = i - 1; x <= i + 1; x++) {
				for (y = j - 1; y <= j + 1; y++) {
					if (!this.matrix[x][y]) {
						if (first == null) first = {x: x, y: y};
						else {
							second = {x: x, y: y};
							isBroken = true;
							break;
						}
					}
				}
				if (isBroken) break;
			}
		} else {
			for (x = i + 1; x >= i - 1; x--) {
				for (y = j + 1; y >= j - 1; y--) {
					if (!this.matrix[x][y]) {
						if (first == null) first = {x: x, y: y};
						else {
							second = {x: x, y: y};
							isBroken = true;
							break;
						}
					}
				}
				if (isBroken) break;
			}
		}
		

		if (first == null) return;

		var t;

		this.createElement(i, j);
		this.MoveTo(i +'_' +j, first.x, first.y);
		this.matrix[first.x][first.y] = 1;
		this.create++;

		// TODO: need to update the property in between
		if (this.create == this.req) return;

		if (second != null) {
			this.MoveTo(i +'_' +j, second.x, second.y);
			this.matrix[i][j] = 0;
			this.matrix[second.x][second.y] = 1;
		}

		var _t = this;
		setTimeout(function() {
			_t.Spread(first.x, first.y);
			if (second != null) _t.Spread(second.x, second.y);
			else _t.Spread(i, j);
		}, this.timeout);
	}

	// Function to initialise the properties of the instance
	digitalwrite.prototype.InitVariables = function() {
		this.char = null;
		this.char_x = null;
		this.elem = null;
		this.timeout = 1000;
		this.width = 100;
		this.height = 100;
		this.startX = 0;
		this.startY = 0;
		this.hash = null;
		this.blobWidth = 20;
		this.blobHeight = 20;
		this.req = 0;
		this.create = 0;
		this.background = 'rgba(0, 0, 0, 1)';
		this.border = '1px dashed black';
		this.animation = 'motion';
		this.success = null;
	}

	// Constructor
	$.fn.digitalwrite = function(options) {
		if (typeof options.char != 'string') {
			console.log('[digitial-write plugin] Charecter not specified or invalid format');
			return;
		}

		if ($(this).length == 0) {
			return;
		}

		// For each element call this
		$(this).each(function() {
			$(this).data('obj', new digitalwrite($(this), options));
		});
	}

	// Function to transform a charecter to some other
	$.fn.transformTo = function(char, callback) {
		if (typeof char == 'undefined') {
			console.log('[digitial-write plugin] Charecter not specified or invalid format');
			return;
		}

		if ($(this).length == 0) {
			return;
		}

		// For each element call this
		$(this).each(function() {
			var obj = $(this).data('obj');
			if (typeof obj == 'undefined') {
				// just create the object as it does not exist
				$(this).digitalwrite({char: char});
			}

			obj.transformTo(char, callback);
		});
	}

} (jQuery));