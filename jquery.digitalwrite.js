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
	Z: Z
};

(function( $ ) {
	/**
	 * Function to rearrange the arrangement of blobs to 
	 * forma a certain charecter
	 * @param: blob (Object) - the blob object
	 * @param: matrix (Array) - the array corresponding to the charecter
	 * TODO: Add other sort of animations to this
	 */
	function arrange(blob, matrix) {
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
								blob.MoveTo((x+1) +'_' +(y+1), j + 1, i + 1);
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
	}

	/**
	 * Function to return the no of elements required
	 * to form a charecter
	 * @dependent on global variable {ms}
	 * @param: char (string) - the charecter
	 */
	function GetReqVal(char) {
		var matrix = ms[char.toUpperCase()];
		var req = 0;
		for (i = 0; i < matrix.length; i++)
			for (j = 0; j < matrix[i].length; j++)
				if (matrix[i][j] == 1) req++;
	
		return req;
	}

	// dictionery [hash] => {bool}, to make sure hashes used
	// are unique
	var hashes = {};

	// Constructor of the class
	var digitalwrite = function(elem, options) {

		// Initialise some default properties
		this.InitVariables();

		this.elem = elem;

		// Set all properties
		this.char = options.char;

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

		// Set posX and posY for the element
		var offset = this.elem.offset();
		this.startX = offset.left;
		this.startY = offset.top;

		this.elem.css('position', 'relative');
		this.elem.css('height', this.height +'px');
		this.elem.css('width', this.width +'px');


		// Find the req value and set it
		this.req = GetReqVal(options.char);

		// initialise the matrix
		this.matrix = [];
		for (i = 0; i < 7; i++) {
			this.matrix[i] = [];
			for (j = 0; j < 7; j++) {
				if (i == 0 || j == 0 || i == 6 || j == 6)
					this.matrix[i][j] = true;
				else this.matrix[i][j] = false;
			}
		}

		// Insert the middle element
		this.create = 1;
		this.matrix[3][3] = true;
		this.createElement(3, 3);

		var _this = this;
		setTimeout(function() {
			_this.Spread(3,3)
		}, this.timeout);
	}

	// Function to return relative position of element in i, j
	digitalwrite.prototype.GetPosition = function(i, j) {
		return {x: i*this.blobWidth, y: j*this.blobHeight};
	}

	/**
	 * Function to create an elment at i,j position
	 */
	digitalwrite.prototype.createElement = function(i, j) {
		var obj = this.GetPosition(i, j);
		var div = document.createElement('div');
		$(div).addClass('boo');
		$(div).attr('pos', this.char +this.hash +'_' +i +'_' +j);
		$(div).css('top', obj.y +'px').css('left', obj.x +'px');
		$(div).css('width', this.blobWidth +'px').css('height', this.blobHeight +'px');
		this.elem.append(div);
		return div;
	}

	/**
	 * Function to move an element with an identfier {id}
	 * to position i, j
	 */
	digitalwrite.prototype.MoveTo = function(id, i, j) {
		var t = $(".boo[pos='" +this.char +this.hash +'_' +id +"']").eq(0);
		t.attr('pos', this.char +this.hash +'_' +i +'_' +j);
		var obj = this.GetPosition(i, j);
		t.css('top', obj.y +'px');
		setTimeout(function() {
			t.css('left', obj.x +'px');
		}, 500);
	}

	/**
	 * function to do random creation and spreading
	 */
	digitalwrite.prototype.Spread = function(i, j) {
		if (this.create == this.req) {
			if (typeof this.alphabetised == 'undefined') {
				this.alphabetised = true;
				arrange(this, ms[this.char]);
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
		this.matrix[first.x][first.y] = true;
		this.create++;

		// TODO: need to update the property in between
		if (this.create == this.req) return;

		if (second != null) {
			this.MoveTo(i +'_' +j, second.x, second.y);
			this.matrix[i][j] = false;
			this.matrix[second.x][second.y] = true;
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
	}

	// Constructor
	$.fn.digitalwrite = function(options) {
		if (typeof options.char != 'string') {
			console.log('Charecter not specified or invalid format');
			return;
		}

		if ($(this).length == 0) {
			return;
		}

		// For each element call this
		$(this).each(function() {
			return new digitalwrite($(this), options);
		});
	}

} (jQuery));