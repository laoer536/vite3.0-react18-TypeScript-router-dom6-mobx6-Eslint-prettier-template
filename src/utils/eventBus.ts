import mitt, { Emitter } from 'mitt'

import { WelcomeModalInfo } from '@/components/Welcome/index.tsx'

export type Events = {
  'WelcomeModal:open': WelcomeModalInfo
  'WelcomeModal:close': void
}

export const eventBus: Emitter<Events> = mitt<Events>()
