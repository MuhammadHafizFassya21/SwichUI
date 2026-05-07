const sizeOf = require('image-size');
try {
  const sebelum = sizeOf('c:/Users/user/Documents/USAHA/Digital website/public/assets/sebelumupdate.jpeg');
  console.log('Sebelum:', sebelum.width, 'x', sebelum.height, 'ratio:', sebelum.width / sebelum.height);
  const sesudah = sizeOf('c:/Users/user/Documents/USAHA/Digital website/public/assets/sesudahupdate.jpeg');
  console.log('Sesudah:', sesudah.width, 'x', sesudah.height, 'ratio:', sesudah.width / sesudah.height);
} catch (e) {
  console.error(e);
}
