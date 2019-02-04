const {args} = $, {image} = args;

(function() {
setImages(image);
})();
function setImages(image) {
  const compressionSettings = [ 1, 0.5, 0.1 ];
  compressionSettings.forEach((setting, index) => {
    let compressedBlob = image.imageAsCompressed(setting);
    console.log('media.width: ' + compressedBlob.width + '\nmedia.height: ' +
                compressedBlob.height + '\nmedia.length: ' + compressedBlob.length +
                '\nmedia.mimeType: ' + compressedBlob.mimeType +
                '\nmedia.nativePath: ' + compressedBlob.nativePath);
    $[`image${index}`].image = compressedBlob;
    compressedBlob = null;
  });
}
