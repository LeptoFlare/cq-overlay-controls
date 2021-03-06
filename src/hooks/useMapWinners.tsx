import { useReplicant } from "./useReplicant"
import schema from "../../schemas/currentMapWinners.json"

export type MapWinners = Array<"A" | "B">

export default () =>
  useReplicant(
    "currentMapWinners",
    schema.default,
    (state: MapWinners, action) => action.payload
  )
