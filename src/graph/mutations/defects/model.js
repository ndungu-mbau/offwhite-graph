var Waterline = require("waterline");
const { name: identity } = require("./about.js")

export default Waterline.Collection.extend({
  identity,
  datastore: "default",
  primaryKey: "id",

  attributes: {
    id: { type: "string", required: true },
    pilot: { type: "string", required: true },
    description : { type: "string", required: true },
    ata_chapter: { type: "string" },
    ata_subchapter: { type: "string" },
    airplane: { type: "string", required: true },
    isDeleted: { type: "boolean", defaultsTo: false }
  }
});