import { FC, Fragment, ReactNode } from 'react'

import WelcomeModal from '@/components/Welcome'

interface GlobalProviderProps {
  children: ReactNode
}

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  return (
    <Fragment>
      {children}
      {/* The global components of the album are mostly controlled with eventBus. */}
      <WelcomeModal />
    </Fragment>
  )
}

GlobalProvider.displayName = 'GlobalProvider'

export default GlobalProvider
