import Waterline from "waterline"
import DiskAdapter from "sails-disk"
import MongoAdapter from "sails-mongo"

//Import Models
import airplane from "./graph/mutations/airplanes/model"
import department from "./graph/mutations/departments/model"
import user from "./graph/mutations/users/model"
import defect from "./graph/mutations/defects/model"
import rotable from "./graph/mutations/rotables/model"
import status from "./graph/mutations/status/model"
import manual from "./graph/mutations/manuals/model"

const { NODE_ENV, DB_URL } = process.env

var waterline = new Waterline()

waterline.registerModel(airplane)
waterline.registerModel(department)
waterline.registerModel(user)
waterline.registerModel(defect)
waterline.registerModel(rotable)
waterline.registerModel(status)
waterline.registerModel(manual)

var config = {
  adapters: {
    mongo: MongoAdapter,
    disk: DiskAdapter,
  },
  datastores: {
    default: !['development', "test"].includes(NODE_ENV) ? {
      adapter: 'mongo',
      url: DB_URL
    } : {
      adapter: "disk",
      // filePath: '/tmp'
    }
  }
};

export default new Promise((resolve, reject) => {
  waterline.initialize(config, (err, db) => {
    if (err) {
      console.log(err)
      reject(err)
    }
    resolve(db)
  })
})