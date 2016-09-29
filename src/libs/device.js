export default function () {
  let device = {}
  let ua = navigator.userAgent
  let android = ua.match(/(Android)\s([\d_]+)/)
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
  let ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
  let iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
  device.ios = device.android = device.iphone = device.ipad = device.androidChrome = device.pc = false
  // Android
  if (android) {
    device.os = 'android'
    device.osVersion = android[2]
    device.android = true
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios'
    device.ios = true
  }
  if (!android && !ipad && !iphone && !ipod) {
    device.pc = true
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.')
    device.iphone = true
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.')
    device.ipad = true
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null
    device.iphone = true
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0]
    }
  }

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i)

  // Minimal UI
  if (device.os && device.os === 'ios') {
    let osVersionArr = device.osVersion.split('.')
    device.minimalUi = !device.webView &&
      (ipod || iphone) &&
      (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
      document.getElementsByTagName('meta[name="viewport"]').length > 0 && document.getElementsByTagName('meta[name="viewport"]').attr('content').indexOf('minimal-ui') >= 0
  }

  // Classes
  let classNames = []

  // Pixel Ratio
  device.pixelRatio = window.devicePixelRatio || 1
  classNames.push('pixel-ratio-' + Math.floor(device.pixelRatio))
  if (device.pixelRatio >= 2) {
    classNames.push('retina')
  }

  // OS classes
  if (device.os) {
    classNames.push(device.os, device.os + '-' + device.osVersion.split('.')[0], device.os + '-' + device.osVersion.replace(/\./g, '-'))
    if (device.os === 'ios') {
      let major = parseInt(device.osVersion.split('.')[0], 10)
      for (let i = major - 1; i >= 6; i--) {
        classNames.push('ios-gt-' + i)
      }
    }
  }

  // Add html classes
  if (classNames.length > 0) document.body.className = classNames.join(' ')

  // Export object
  return device
}
