"use strict";
exports.__esModule = true;
var http_1 = require("http");
http_1["default"].createServer(function (request, response) {
    response.end('hello world');
})
    .listen(4000, function () {
    console.log("server started well");
});
