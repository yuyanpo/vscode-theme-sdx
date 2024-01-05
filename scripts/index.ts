import process from 'node:process'
import fs from 'fs-extra'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/sdx-light.json',
      getTheme({
        color: 'light',
        name: 'SDX Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/sdx-dark.json',
      getTheme({
        color: 'dark',
        name: 'SDX Dark',
      }),
      { spaces: 2 },
    ),
  ]))
