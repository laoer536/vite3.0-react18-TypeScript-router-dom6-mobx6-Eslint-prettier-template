import { WelcomeModalInfo } from '@components/Welcome/index.tsx'
import mitt, { Emitter } from 'mitt'

export type Events = {
  'WelcomeModal:open': WelcomeModalInfo
  'WelcomeModal:close': void
}

export const eventBus: Emitter<Events> = mitt<Events>()
