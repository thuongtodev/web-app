import parse from 'html-react-parser'

export const reducer = (state, newState) => ({
  ...state,
  ...newState,
})

export const parseHtmlString = htmlStr => {
  if (!htmlStr) return ''
  return parse(htmlStr)
}
