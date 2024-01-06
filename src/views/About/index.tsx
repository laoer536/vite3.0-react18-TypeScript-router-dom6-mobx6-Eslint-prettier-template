import { button } from '@assets/motion'
import { useUserStore } from '@store/user'
import { motion } from 'framer-motion'

function About() {
  const [pageTitle] = useState('laoer536-About Page')
  const { num, changeNum } = useUserStore()
  return (
    <div>
      <h1>{pageTitle}</h1>
      <h2>userSore.num:{num}</h2>
      <motion.button {...button} onClick={changeNum}>
        click on the store provided by zustand to change the number
      </motion.button>
    </div>
  )
}

export default About
