'use strict'

const isUnix = require('is-unix')
const path = require('path')

const PLATFORM_WIN = 'win32'
const PLATFORM_UNIX = 'unix'

function get (key) {
  if (!key) return undefined
  return process.env[key] || process.env[`npm_config_${key.toLowerCase()}`]
}

const YOUTUBE_DL_HOST = get('YOUTUBE_DL_HOST') || 'https://api.github.com/repos/ytdl-org/youtube-dl/releases?per_page=1'

const YOUTUBE_DL_DIR = get('YOUTUBE_DL_DIR') || path.join(__dirname, '..', 'bin')

const YOUTUBE_DL_PLATFORM = get('YOUTUBE_DL_PLATFORM') || isUnix(process.platform)
  ? PLATFORM_UNIX
  : PLATFORM_WIN

const YOUTUBE_DL_FILENAME = get('YOUTUBE_DL_FILENAME') || 'youtube-dl'

const YOUTUBE_DL_FILE = !YOUTUBE_DL_FILENAME.endsWith('.exe') && YOUTUBE_DL_PLATFORM === 'win32' ? `${YOUTUBE_DL_FILENAME}.exe` : YOUTUBE_DL_FILENAME

const YOUTUBE_DL_PATH = path.join(YOUTUBE_DL_DIR, YOUTUBE_DL_FILE)

module.exports = {
  YOUTUBE_DL_DIR,
  YOUTUBE_DL_FILENAME,
  YOUTUBE_DL_FILE,
  YOUTUBE_DL_HOST,
  YOUTUBE_DL_PATH,
  YOUTUBE_DL_PLATFORM
}
