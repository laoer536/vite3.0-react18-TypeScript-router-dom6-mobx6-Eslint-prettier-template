import { Outlet } from 'react-router-dom'

import GlobalProvider from '@/components/GlobalProvider'
import { useVcosole } from '@/hooks/useVconsole'
// 这个是全局的页面 还可以做一些其他的操作

export default function RootLayout() {
  const [vc] = useVcosole()
  useEffect(() => {
    console.log('VConsole ?', vc)
    if (vc) {
      vc.show()
    }
  }, [])
  return (
    <GlobalProvider>
      <Outlet />
    </GlobalProvider>
  )
}
