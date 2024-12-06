import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import dockerLogo from '@/assets/Docker.svg'
import { button } from '@/assets/motion'
import reactLogo from '@/assets/react.svg'
import { useUserStore } from '@/store/user'
import { eventBus } from '@/utils'
import { cs } from '@/utils'

import HomeStyle from './index.module.scss'

const publicPath = import.meta.env.VITE_PUBLIC_PATH
function Home() {
  const { num, changeNum } = useUserStore()
  const navigate = useNavigate()
  const goAboutPage = () => {
    navigate('/about')
  }

  return (
    <div className={HomeStyle.home}>
      <motion.div initial={{ translateY: -300 }} whileInView={{ translateY: 0 }} transition={{ type: 'spring' }}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={publicPath + 'vite.svg'} className={HomeStyle.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={cs(HomeStyle.logo, HomeStyle.react)} alt="React logo" />
        </a>
        <a href="https://forums.docker.com/" target="_blank" rel="noreferrer">
          <img src={dockerLogo} className={HomeStyle.logo} alt="Docker logo" />
        </a>
      </motion.div>
      <motion.div initial={{ translateY: 300 }} whileInView={{ translateY: 0 }} transition={{ type: 'spring' }}>
        <h1>Vite + React</h1>
        <div className={HomeStyle.card}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <motion.button {...button} onClick={changeNum}>
            UserStore&apos;s count is {num}
          </motion.button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        <motion.button {...button} onClick={goAboutPage}>
          click to jump to the about page
        </motion.button>
        <br />
        <motion.button
          style={{ marginTop: '80px' }}
          onClick={() => eventBus.emit('WelcomeModal:open', { title: 'welcome', content: 'Vite + React + Docker' })}
        >
          welcome
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Home
