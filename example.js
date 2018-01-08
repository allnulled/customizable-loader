var Loader = require("./src/custom-loader");
var MyLoader = new Loader(__dirname, function(loader) {
	loader.someExtraMethod = function() {
		return "extra method";
	}
});
var path1 = MyLoader.resolve("example.js");
var path2 = MyLoader.resolve("README.md");
var path3 = MyLoader.resolve("src", "custom-loader.js");
var data1 = MyLoader.someExtraMethod();
console.log(path1); // ~/example.js
console.log(path2); // ~/README.md
console.log(path3); // ~/src/custom-loader.js
console.log(data1); // extra method