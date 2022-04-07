// This is an old-school stand-alone function
function helloWorld(){
    var a = 123;
    var b = 'abc';
    var c = 'xyz';

    console.log('Testing');         // Logging output to console
    console.warn('Hello World');    // Warning output to console (typically red or yellow and denoted by a hazard icon)
    console.info(b);                // Information output to console using the local variable 'b'

    return a,b,c;
}


/*  
    This is a clearly defined function that is cast into a variable
    which allows us to do a bit more with it down the road.

    We can also send a value to it (mapped to local variable 'a')
    which can be used within the function 
*/
global.testOne = function(a){
    console.log(a);
}


/*
    This is an example of a javascript object.
    We'll discuss this in much greater detail later.

    This also allows a TON of stuff to be done within
    the object.  This is HIGHLY useful.

    We also need to discuss metadata and I'll provide
    an example of that within this object at a later
    date.
*/
global.myObj = {
    a: 'What is this',
    b: 'It is an object',
    c: function(a){
        console.log(a);
    },
    loop: function(x){              // Passing in the number of times to loop: x times
        for(i=0;i<=x;i++){          // Example of a for loop
            if(i<x){
                console.log(i);
            } else {
                console.warn(i);
            }
        }
        return this;                // Example of chaining
    },
    clear: function(){
        console.clear();

        return this;                // Example of chaining
    },
    error: function(msg){
        console.error(msg);

        return this;
    }
}

global.textChange = {
    move: function(cls, pos){

        return this;
    },
    color: function(cls, clr) {
        if(clr == '' || clr === undefined){          // randomly change the color (clr) if it's not passed into the function
            clr = this.colorList[this.getRandomInt(Object.keys(this.colorList).length)];
        }

        document.getElementsByClassName(cls)[0].style.color = clr;

        return this;
    },
    weight: function(cls, wt){

        return this;
    },
    colorList: {
        0: '#FF0000',
        1: '#00FF00',
        2: '#0000FF',
        3: '#ECECEC',
        4: '#C0C0C0',
        5: '#3060F0',
        6: '#33FF99'
    },
    previousColor: 4,
    getRandomInt: function(max) {
        for(i=Math.floor(Math.random()*max); i == this.previousColor; i++){
            if(i>(Object.keys(this.colorList).length-1)){
                i = 0;
            }
        };
        this.previousColor = i;
        return i;
    },
    changeIt: function(){
        setInterval(() => {this.color('centerText')}, 2000);    // Example of an arrow function
    }
}
