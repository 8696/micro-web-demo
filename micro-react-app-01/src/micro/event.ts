
import { EventEmitter as Type } from 'events'

type EventEmitterType = Type | null

let microEvent: EventEmitterType = null

export const setMicroEvent = (_: EventEmitterType) => {
  microEvent = _
}

export const getMicroEvent = (): EventEmitterType => microEvent
