module.exports = function Loader(basepath, extension) {

	/**
	 * @description Another name for the loader itself.
	 */
	var loader = this;

	/**
	 * @name basepath
	 * @type {String}
	 * @description Path to the base of the loader.
	 */
	this.basepath = basepath;

	/**
	 * @name resolve
	 * @type {Function}
	 * @parameters {Array of Strings}
	 * @return {String}
	 * @description Resolves the path composed by an array of strings, passed as parameter.
	 */
	this.resolve = function() {
		return require("path").resolve.apply(null, [loader.basepath].concat(Array.prototype.slice.call(arguments)));
	};

	/**
	 * @name include
	 * @type {Function}
	 * @arguments {String...s}
	 * @return The module exported from the file composed by the list of strings passed as arguments.
	 */
	this.include = function() {
		return require(loader.resolve.apply(null, arguments));
	};

	/**
	 * @description Extend the loader, if demanded:
	 */
	if(typeof extension === "function") {
		extension(loader);
	}

	/**
	 * @description Return the loader.
	 */
	return this;
};