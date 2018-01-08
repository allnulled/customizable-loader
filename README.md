# customizable-loader

Simple utility to customize your own scripts loader (for Node.js only).

It lets you...:

1. Set your own basepath for each loader you instantiate.

2. Extend each loader to add new capabilities to it.

3. Specify the paths through an array of strings, or through a string.

### 1. Installation

      ~$ npm install customizable-loader

### 2. Usage

#### 1. Import it in your code:

      var Loader = require("customizable-loader");

#### 2. Create your own custom loader

You must specify the basepath of each loader, and optionally, a function that tells how to extend this custom loader:

        var MyLoader = new Loader(__dirname, function(loader) {

          loader.newFunctionality = "...";

        });

#### 3. Use your own customized loader freely:

1. You can resolve paths from strings:

        // This will return a string only:

        MyLoader.resolve("path", "to", "my", "script");

2. Or you can directly include Node.js modules from strings:

       // This will return the Node.js module exported from the specified file:

       MyLoader.include("path", "to", "my", "script"); // This returns the Node.js module

3. Also, you can pass directly the path you want in a string, and it will work the same:

       MyLoader.include("path/to/my/script");


That is it.







