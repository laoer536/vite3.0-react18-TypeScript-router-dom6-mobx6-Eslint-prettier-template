import React from 'react'
import { observer } from 'mobx-react'
// import user from '@/store/user'  因为加入了unplugin-auto-import 所以不用在手动导入

function About() {
  const [pageTitle] = useState('laoer536-关于页面') //因为加入了unplugin-auto-import 所以不用在手动导入

  return (
    <div>
      <h1>{pageTitle}</h1>
      <h2>{user.num}</h2>
      <button onClick={() => user.changeNum()}>点击使用mobx改变数字</button>
    </div>
  )
}

export default observer(About)
