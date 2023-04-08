import { Schema, Types } from "mongoose"  

const NmapSchema = new Schema(
  {
    options: {
      type : String,
    },
    results: {
      type : String,
    },
    plublished: {
      type: Date,
      default: Date.now
    },
  }
)

export default NmapSchema