const grpc = require("@grpc/grpc-js");
const loader = require("@grpc/proto-loader");
const packageDef = loader.loadSync("./todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const { createReadStream } = require("fs");
const Stream = require("stream");
const toDoPackage = grpcObject.Todo;

const server = new grpc.Server();

server.addService(toDoPackage.service, {
  getName: (call, callback) => {
    console.log(call.request);
    callback(null, call.request.text);
  },
  login: loginFun,
  testStream: testStream,
});

function loginFun(call, callback) {
  const { username, password } = call.request;
  callback(null, {
    jwtToken: username + password,
  });
}
function testStream(call) {
  const rs = createReadStream("./todo.proto", { encoding: "utf-8" });
  rs.on("data", (chunk) => {
    call.write({ message: chunk });
  });
  rs.on("end", () => {
    call.end();
  });
}
server.bindAsync(
  "0.0.0.0:4000",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server running on port ${port}`);
    server.start();
  }
);
