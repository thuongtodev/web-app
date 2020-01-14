export const isWeb = () => {
  return window && window.matchMedia('(min-width: 768px)').matches
}
