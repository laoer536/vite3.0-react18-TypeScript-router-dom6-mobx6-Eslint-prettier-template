import { button } from '@assets/motion'
import { useUserStore } from '@store/user'
import { motion } from 'framer-motion'

function About() {
  const [pageTitle] = useState('laoer536-关于页面')
  const { num, changeNum } = useUserStore()
  return (
    <div>
      <h1>{pageTitle}</h1>
      <h2>userSore.num:{num}</h2>
      <motion.button {...button} onClick={changeNum}>
        点击使用zustand提供的store改变数字
      </motion.button>
    </div>
  )
}

export default About
