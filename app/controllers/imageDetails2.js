const {args} = $;
let {image} = args;
(function() {
setImages(image);
})();
function setImages(image) {
  const compressionSettings = [ 1, 0.5, 0.1 ];
  compressionSettings.forEach((setting, index) => {
    const compressedBlob = image.imageAsCompressed(setting);
    console.log('media.width: ' + compressedBlob.width + '\nmedia.height: ' +
                compressedBlob.height + '\nmedia.length: ' + compressedBlob.length +
                '\nmedia.mimeType: ' + compressedBlob.mimeType +
                '\nmedia.nativePath: ' + compressedBlob.nativePath);
    $[`image${index}`].image = compressedBlob;

  });
}
function cleanup(e) {
  image = null;
}
