import parse from 'html-react-parser'

export const reducer = (state, newState) => ({
  ...state,
  ...newState,
})

export const parseHtmlString = htmlStr => {
  return parse(htmlStr)
}
