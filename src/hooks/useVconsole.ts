import VConsole from 'vconsole'
export function useVcosole() {
  const vc = useRef<VConsole | null>(null)
  if (location.href.includes('#vc')) {
    vc.current = new VConsole({ theme: 'dark', maxLogNumber: 1000 })
  }
  return [vc.current] as const
}
