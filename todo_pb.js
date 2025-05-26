// GENERATED CODE -- DO NOT EDIT!

"use strict";
const jspb = require("google-protobuf");

const { Message, BinaryReader, BinaryWriter } = jspb;

// ----------- Employee message -----------
class Employee extends Message {
  constructor(opt_data) {
    super();
    Message.initialize(this, opt_data, 0, -1, null, null);
  }

  getId() {
    return /** @type {number} */ (Message.getFieldWithDefault(this, 1, 0));
  }

  setId(value) {
    Message.setProto3IntField(this, 1, value);
  }

  getName() {
    return /** @type {string} */ (Message.getFieldWithDefault(this, 2, ""));
  }

  setName(value) {
    Message.setProto3StringField(this, 2, value);
  }

  getMarks() {
    return /** @type {number} */ (Message.getFieldWithDefault(this, 3, 0.0));
  }

  setMarks(value) {
    Message.setProto3FloatField(this, 3, value);
  }
}

Employee.deserializeBinary = function (bytes) {
  const reader = new BinaryReader(bytes);
  const msg = new Employee();
  return Employee.deserializeBinaryFromReader(msg, reader);
};

Employee.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) break;
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        msg.setId(reader.readInt32());
        break;
      case 2:
        msg.setName(reader.readString());
        break;
      case 3:
        msg.setMarks(reader.readFloat());
        break;
      default:
        reader.skipField();
    }
  }
  return msg;
};

Employee.serializeBinary = function () {
  const writer = new BinaryWriter();
  Employee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

Employee.serializeBinaryToWriter = function (message, writer) {
  const id = message.getId();
  if (id !== 0) writer.writeInt32(1, id);
  const name = message.getName();
  if (name.length > 0) writer.writeString(2, name);
  const marks = message.getMarks();
  if (marks !== 0.0) writer.writeFloat(3, marks);
};

// ----------- Employees message -----------
class Employees extends Message {
  constructor(opt_data) {
    super();
    Message.initialize(this, opt_data, 0, -1, Employees.repeatedFields_, null);
  }

  getEmployeesList() {
    return /** @type {!Array<!Employee>} */ (
      Message.getRepeatedWrapperField(this, Employee, 1)
    );
  }

  setEmployeesList(value) {
    Message.setRepeatedWrapperField(this, 1, value);
  }

  addEmployees(opt_value, opt_index) {
    return Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      Employee,
      opt_index
    );
  }

  clearEmployeesList() {
    this.setEmployeesList([]);
  }
}

Employees.repeatedFields_ = [1];

Employees.deserializeBinary = function (bytes) {
  const reader = new BinaryReader(bytes);
  const msg = new Employees();
  return Employees.deserializeBinaryFromReader(msg, reader);
};

Employees.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) break;
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        const employee = new Employee();
        reader.readMessage(employee, Employee.deserializeBinaryFromReader);
        msg.addEmployees(employee);
        break;
      default:
        reader.skipField();
    }
  }
  return msg;
};

Employees.serializeBinary = function () {
  const writer = new BinaryWriter();
  Employees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

Employees.serializeBinaryToWriter = function (message, writer) {
  const employees = message.getEmployeesList();
  if (employees.length > 0) {
    writer.writeRepeatedMessage(1, employees, Employee.serializeBinaryToWriter);
  }
};

module.exports = {
  Employee,
  Employees,
};
