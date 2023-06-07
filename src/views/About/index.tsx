import React from 'react'
import { useUserStore } from '@store/user'

function About() {
  const [pageTitle] = useState('laoer536-关于页面')
  const { num, changeNum } = useUserStore()
  return (
    <div>
      <h1>{pageTitle}</h1>
      <h2>userSore.num:{num}</h2>
      <button onClick={changeNum}>点击使用zustand提供的store改变数字</button>
    </div>
  )
}

export default About
