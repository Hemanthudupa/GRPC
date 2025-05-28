const Schema = require("./todo_pb");
const hemanth = new Schema.Employee();
hemanth.setId("123");
hemanth.setMarks("30");
hemanth.setName("hemanth");
console.log(Schema.Employee.serializeBinary());
