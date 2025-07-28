const HOST_CDN = 'https://content.pancake.vn'
const BUCKET = process.env.NODE_ENV == 'production' ? 'web-media' : 'web_content'
const BUCKET_MAPPING = {
  'web-media': '1',
  web_content: '1.1',
  'user-content.pancake.vn': '2',
  'user-content-23.pancake.vn': '2-23',
}

export const resizeLinkFixed = ({ link = '', width = 300, height = 300, keep_resolution = false }) => {
  try {
    if (!link || typeof link !== 'string') return {}
    const w = width
    const h = height

    const resizeFlag = keep_resolution ? 'fwebp0' : 'fwebp'

    const H = Math.ceil(Math.max(h, (w / width) * height))
    const W = Math.ceil(Math.max(w, (h / height) * width))

    let splitted
    let bucket = BUCKET

    if (link.includes('web-media')) bucket = 'web-media'
    if (link.includes('web_content')) bucket = 'web_content'
    if (link.includes('user-content.pancake.vn')) bucket = 'user-content.pancake.vn'
    if (link.includes('user-content-23.pancake.vn')) bucket = 'user-content-23.pancake.vn'

    splitted = link.split(bucket)

    if (link.includes('ANIM')) return { cdn: link }

    if (splitted.length === 2) {
      const isGif = /\.gif$/.test(link)
      if (isGif) {
        const cdn = `${HOST_CDN}/${BUCKET_MAPPING[bucket]}/dlc${splitted[1]}`
        return { cdn }
      }

      const [ext] = splitted[1]
        .split('.')
        .reverse()
        .map((e) => (e || '').toLowerCase())

      if (['png', 'jpg', 'jpeg', 'webp', 'jfif'].includes(ext)) {
        const cdn = `${HOST_CDN}/${BUCKET_MAPPING[bucket]}/s${W}x${H}${splitted[1]}`
        const webp = `${HOST_CDN}/${BUCKET_MAPPING[bucket]}/s${W}x${H}/${resizeFlag}${splitted[1]}`

        return { cdn, webp }
      }
    }

    if (splitted.length === 1 && link.includes('https://content.pancake.vn')) {
      //const webp = link.replace(/(https:\/\/content.pancake.vn\/[12](-[0-9]{2})?\/)(.+)/, (x, x1, _, x3) => {
      const webp = link.replace(
        /(https:\/\/content.pancake.vn\/[12](\.[0-9])?(-[0-9]{2})?\/)(.+)/,
        (x, x1, x2, x3, x4) => {
          return `${x1}s${w}x${h}/${resizeFlag}/${x4}`
        }
      )
      //})

      return { webp }
    }

    return { cdn: link }
  } catch (error) {
    console.error('[ERROR_RESIZE_LINK_FIXED]', error)
  }
}

export const resizeLink = (link = '', width = 300, height = 300, keep_resolution = false) => {
  if (!link || typeof link !== 'string') return {}
  if (width == 0 || !isFinite(width)) width = 300
  if (height == 0 || !isFinite(height)) height = 300

  width = Math.ceil(width / 50) * 50
  height = Math.ceil(height / 50) * 50

  const resize = width < 500 && height < 500 ? 600 : 0

  const w = resize ? width + resize : width * 3
  const h = resize ? height + resize : height * 3

  const resizeFlag = keep_resolution ? 'fwebp0' : 'fwebp'

  const H = Math.ceil(Math.max(h, (w / width) * height))
  const W = Math.ceil(Math.max(w, (h / height) * width))

  let splitted
  let bucket = BUCKET

  if (link.includes('web-media')) bucket = 'web-media'
  if (link.includes('web_content')) bucket = 'web_content'
  if (link.includes('user-content.pancake.vn')) bucket = 'user-content.pancake.vn'
  if (link.includes('user-content-23.pancake.vn')) bucket = 'user-content-23.pancake.vn'

  splitted = link.split(bucket)

  if (link.includes('ANIM')) return { cdn: link }

  if (splitted.length === 2) {
    const isGif = /\.gif$/.test(link)
    if (isGif) {
      const cdn = `${HOST_CDN}/${BUCKET_MAPPING[bucket]}/dlc${splitted[1]}`
      return { cdn }
    }

    const [ext] = splitted[1]
      .split('.')
      .reverse()
      .map((e) => (e || '').toLowerCase())

    if (['png', 'jpg', 'jpeg', 'webp', 'jfif'].includes(ext)) {
      const cdn = `${HOST_CDN}/${BUCKET_MAPPING[bucket]}/s${W}x${H}${splitted[1]}`
      const webp = `${HOST_CDN}/${BUCKET_MAPPING[bucket]}/s${W}x${H}/${resizeFlag}${splitted[1]}`

      return { cdn, webp }
    }
  }

  if (splitted.length === 1 && link.includes('https://content.pancake.vn')) {
    //const webp = link.replace(/(https:\/\/content.pancake.vn\/[12](-[0-9]{2})?\/)(.+)/, (x, x1, _, x3) => {
    const webp = link.replace(
      /(https:\/\/content.pancake.vn\/[12](\.[0-9])?(-[0-9]{2})?\/)(.+)/,
      (x, x1, x2, x3, x4) => {
        return `${x1}s${w}x${h}/${resizeFlag}/${x4}`
      }
    )
    //})

    return { webp }
  }

  return { cdn: link }
}

export const getImagePreview = ({ url, width = 300, height = 300, keep_resolution = false, fixedSize = false }) => {
  const { webp, cdn } = fixedSize
    ? resizeLinkFixed({ link: url, width, height, keep_resolution })
    : resizeLink(url, width, height, keep_resolution)
  return webp || cdn || url
}
