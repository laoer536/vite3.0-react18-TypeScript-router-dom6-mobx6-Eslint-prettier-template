import { WelcomeModalInfo } from '@components/Welcome/index.tsx'
import mitt, { Emitter } from 'mitt'

type Events = {
  open: Omit<WelcomeModalInfo, 'visible'>
  close: undefined
}

export const welcomeEmitter: Emitter<Events> = mitt<Events>()
