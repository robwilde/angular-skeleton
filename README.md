# angular-skeleton
---

## Intro
This is a experiment of starting with the [angular-seed](https://github.com/angular/angular-seed) repository and modifying it into an **angular only** skeleton that is well strucutred and TDD ready.

## Dependencies
There are four dependencies your machine will need installed to use this skeleton:
* npm - ```npm -v```
* java - ```java -version```
* ruby - ```ruby -v```
* sass - ```sass -v```

## Folder Structure
The main folder hierarchy is strucutred in this way:

```
|-- app
    |-- modules
        |-- module1
            |-- js
                |-- cotrollers
                |-- services
                ...
            |-- partials
            |-- sass
        |-- module2
        ...
    app.module.js
    app.routes.js
    index.html
|-- test
    |-- e2e
        |-- scenario.test.js
    |-- unit
    	|-- modules
            |-- module1
                |-- controllers
                |-- services
                ...
            |-- module2
            ...
|-- build             [gitignore]
|-- node_modules      [gitignore]
```

## Angular File Naming Convention
* Modules are prefixed with the module name and postfixed with `module.js`
* Components are postfixed with the component type. eq. `home.controller.js`.

## Angular Module Layout
The main App and each module are required to have a module file in their base directory.  This file will initialize the module and declare its dependencies using the angular module syntax.

## Testing

### Unit
1. Execute the ```npm run test-unit``` command in the project root directory to run all the unit tests inside the **test/unit** directory. This uses **karma** to execute the tests written with the **jasmine** testing framework.

### End-to-End
1. Start the **http-server** by executing the ```npm run start-server``` comamnd in the project root directory.
2. Run the tests by executing ```npm run test-e2e``` in the project root directory. This will run all the tests in the **test/e2e** directory. It will also warn you if the server is not started.  The tests are run with **protractor** with the **jasmine** testing framework.

## Development Environment
1. Start the **http-server** by executing the ```npm run start-server``` comamnd in the project root directory.
2. Go to **localhost:8000/build/** to see your angular app in action!
3. Run ```npm run watch``` to start the grunt watch task that will recompile your js/sass/html changes once saved.  Then all you need to do is refresh your browser!
4. To see if the server is currently running, execute ```npm run check-server```.
5. To shutdown the server, execute ```npm run stop-server```.

## Grunt Tasks
The **build** task for this web application has these steps:

1. **concat** to concatinate all the sass files
2. **sass** to compile the sass into css
3. **cssmin** to minify the compiled css
4. **html2js** to convert the partials into an angular module and into angular's template cache
5. **jshint** to check all the javascript syntax and global variable usage
6. **uglify** to bundle and minify pieces of the javascript code.
7. **copy** to move the index.html file into the build folder
8. **clean** to remove the tmp/ folder

Once completed, all the necessary files will be in the **build/** folder to run the angular only app.
