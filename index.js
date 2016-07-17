const backgroundColor = '#16161B'
const foregroundColor = '#FFFFFF'
const cursorColor = '#13C7FE'

const colors = [
  backgroundColor,
  '#FF0040', // red
  '#00DA90', // green
  '#F8FB3C', // yellow
  '#009CE6', // blue
  '#EC26CD', // pink
  '#13C7FE', // cyan
  '#D0D0D0', // light gray
  '#808080', // medium gray
  '#FF0040', // red
  '#00DA90', // green
  '#F8FB3C', // yellow
  '#009CE6', // blue
  '#EC26CD', // pink
  '#13C7FE', // cyan
  '#FFFFFF', // white
  foregroundColor
]

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = cursorColor
      action.config.colors = colors
      action.config.css = '.tabs .tabs_list .tabs_text {color: #13C7FE}'
  }
  next(action)
}
