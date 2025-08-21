/**
 * inlineImg
 * @param {Array} args - Image name and height
 * @param {string} args[0] - Image name
 * @param {number} args[1] - Image height
 * @returns {string} - Image tag
 */

'use strict'

const urlFor = require('hexo-util').url_for.bind(hexo)

const inlineImg = ([img, height = '', alt]) => {
  const heightStyle = height ? `style="height:${height}"` : ''
  alt = alt ? alt : '';
  const src = urlFor(img)
  return `<img class="inline-img" src="${src}" ${heightStyle} alt="${alt}" />`
}

hexo.extend.tag.register('inlineImg', inlineImg, { ends: false })
