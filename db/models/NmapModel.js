import { Model } from "mongoose"
import NmapSchema from "../schemas/NmapSchema"

const NmaptModel = model("Nmap", NmapSchema)

export default NmaptModel