import { FC, useEffect } from 'react'

import { eventBus } from '@/utils'

import styles from './index.module.scss'

export interface WelcomeModalInfo {
  title?: string
  content?: string
}

const WelcomeModal: FC = () => {
  const [modalInfo, setModalInfo] = useState<WelcomeModalInfo>({})
  const [isVisible, setIsVisible] = useState(false)

  const close = () => {
    setModalInfo({})
    setIsVisible(false)
  }

  const open = (info: WelcomeModalInfo) => {
    setModalInfo(info)
    setIsVisible(true)
  }

  useEffect(() => {
    eventBus.on('WelcomeModal:close', close)
    eventBus.on('WelcomeModal:open', open)
    return () => {
      eventBus.off('WelcomeModal:close')
      eventBus.off('WelcomeModal:open')
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{modalInfo?.title}</h2>
          <button className={styles.closeButton} onClick={close}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>
          <p>{modalInfo?.content}</p>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal
