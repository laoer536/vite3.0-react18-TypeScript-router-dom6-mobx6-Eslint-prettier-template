import { FC, useEffect } from 'react'

import { welcomeEmitter } from './event.ts'
import styles from './index.module.scss'

export interface WelcomeModalInfo {
  title?: string
  content?: string
  visible: boolean
}

const WelcomeModal: FC = () => {
  const [modalInfo, setModalInfo] = useState<WelcomeModalInfo>({ visible: false })

  useEffect(() => {
    welcomeEmitter.on('close', () => {
      setModalInfo({ ...modalInfo, visible: false })
    })
    welcomeEmitter.on('open', (info) => {
      console.log(info)
      setModalInfo({ ...modalInfo, ...info, visible: true })
    })
    return () => {
      welcomeEmitter.off('close')
      welcomeEmitter.off('open')
    }
  }, [])

  if (!modalInfo?.visible) {
    return null
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{modalInfo?.title}</h2>
          <button className={styles.closeButton} onClick={() => setModalInfo({ ...modalInfo, visible: false })}>
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
