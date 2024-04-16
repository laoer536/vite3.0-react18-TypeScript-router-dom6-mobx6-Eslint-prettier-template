import { useVcosole } from '@hooks/useVconsole'

import MyRoutes from '@/router'
// 这个是全局的页面 还可以做一些其他的操作

export default function App() {
  const [vc] = useVcosole()
  useEffect(() => {
    console.log('VConsole ?', vc)
    if (vc) {
      vc.show()
    }
  }, [])
  return (
    <div>
      <MyRoutes />
    </div>
  )
}
