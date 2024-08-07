const express = require ("express");

const app = express ();

const port = 3700;

const firstHandler = (req, res, next) => {
    if (10 < 20) {
        next();
    } else {
        res.send("Condition not met in first handler");
    }
};

const secondHandler = (req, res, next) => {
    if (10 < 20) {
        next();
    } else {
        res.send("Condition not met in second handler");
    }
};

const thirdHandler = (req, res, next) => {
    if (10 < 20) {
        next();
    } else {
        console.log("Sorry, you are not allowed");
        res.send("Sorry, you are not allowed");
    }
};

app.get('/home', firstHandler, (req, res) => {
    res.send("Hello, this is home  page");
});

app.get('/about', secondHandler, (req, res) => {
    res.send(" This is the about page");
});

app.get('/user', thirdHandler, (req, res) => {  // <--- Corrected line
    res.send("You searched for 121");
});

app.listen(port, () => {
    console.log(`Server started and running successfully on port ${port}`);
});
