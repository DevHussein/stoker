"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zodOpenapi = require("@hono/zod-openapi");
const examples = {
  uuid: "4651e634-a530-4484-9b09-9616a28f35e3",
  nanoid: "V1StGXR8_Z5jdHi6B-myT",
  cuid: "cjld2cjxh0000qzrmn831i7rn",
  cuid2: "tz4a98xxat96iws9zmbrgj3a",
  ulid: "01ARZ3NDEKTSV4RRFFQ69G5FAV"
};
const getParamsSchema = ({
  name = "id",
  validator = "uuid"
}) => {
  return _zodOpenapi.z.object({
    [name]: _zodOpenapi.z.string()[validator]().openapi({
      param: {
        name,
        in: "path",
        required: true
      },
      required: [name],
      example: examples[validator]
    })
  });
};
module.exports = getParamsSchema;