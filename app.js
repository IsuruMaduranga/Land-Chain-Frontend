'use strict';

const express = require('express');
const app = express();


app.use('/', express.static(__dirname + '/dist/LandChain-Frontend'));

app.listen(8080, () => {
    console.log(`server started on port 8080`);
});
