
//synchronous
function game(name) {
    console.log(name);
}
game( "cricket" );

function name(name) {
    console.log(name);
}
name( "virat" );


//callback function
function hockey(){
    var x=6;
    var y= 9;
    var result= x+y;
    console.log(result);
}

function key(){
    var n= 50;
    var s= 90;
    var result= n-s;
    console.log(result);
    hockey();
}
key();


//promise function
function catname() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate fetching data
            const data = {
                name: "mounika",
                email: "mailto:mouni@gmail.com"
            };
           resolve(data); 
        }, 8000);
    });
}

// Consuming the Promise
catname()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });


    // Function that returns a Promise
function dogname() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "harshitha", 
                           email: "mailto:harshitha@gmail.com" };
            resolve(data);
        }, 1000);
    });
}

// Asynchronous function to get data
async function animal() {
    try {
        // Wait for fetchData to resolve
        const data = await dogname();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}


animal();

