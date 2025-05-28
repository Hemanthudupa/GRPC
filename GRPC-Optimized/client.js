const grpc = require("@grpc/grpc-js");
const loader = require("@grpc/proto-loader");
const packageDef = loader.loadSync("./todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const toDoPackage = grpcObject.Todo;
const { createWriteStream, mkdir } = require("fs");

const client = new toDoPackage(
  "localhost:4000",
  grpc.credentials.createInsecure()
);
// client.getName({ name: "hemanth" }, (err, res) => {
//   if (err) {
//     console.error("gRPC Error:", err.message);
//     return;
//   }

//   console.log("Response from server:", res.text);
// });

// const data = client.login(
//   {
//     username: "hemanth",
//     password: "12345678",
//   },
//   (err, res) => {
//     if (err) return console.log(" error came man ", err);
//     console.log(res);
//   }
// );

const checkStream = client.testStream({});

checkStream.on("data", (chunk) => {
  console.log(chunk.message, " is the chunk");
});
