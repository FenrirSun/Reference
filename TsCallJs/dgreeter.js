"use strict";
exports.__esModule = true;
var DGreeter = /** @class */ (function () {
    function DGreeter(name) {
        this.name = name;
    }
    DGreeter.prototype.greet = function () {
        console.log("Hi, " + this.name + "!");
    };
    return DGreeter;
}());
exports.DGreeter = DGreeter;
