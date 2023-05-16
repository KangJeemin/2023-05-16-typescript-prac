function exampleOne(object) {
    var value = "";
    for (var key in object) {
        value += object[key];
    }
    return value;
}
var test = {
    name: "kongukjae",
    age: 20,
    job: "minam"
};
