"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_test_1 = require("./module-test");
var a = 1;
var b = 2;
function add(a, b) {
    return a + b;
}
console.log(add(a, b));
console.log((0, module_test_1.c)("강", "지민"));
