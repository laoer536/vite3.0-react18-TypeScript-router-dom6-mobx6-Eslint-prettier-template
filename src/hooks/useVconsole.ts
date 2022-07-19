import VConsole from 'vconsole'
export function useVcosole() {
  if (location.href.includes('#vc')) {
    new VConsole({ theme: 'dark', maxLogNumber: 1000 })
  }
}
