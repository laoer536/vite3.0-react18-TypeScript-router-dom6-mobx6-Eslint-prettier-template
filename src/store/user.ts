import { create } from 'zustand'

interface UserStore {
  userName: string
  num: number
  changeName: () => void
  changeNum: () => void
}
export const useUserStore = create<UserStore>((set) => ({
  userName: 'LiuJie1998',
  num: 0,
  changeName: () => set({ userName: 'laoer536' }),
  changeNum: () => set((state) => ({ num: state.num + 1 })),
}))
