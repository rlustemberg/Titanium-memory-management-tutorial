const {args} = $;
let {image} = args;

(function(image) {
setImages(image);
})(image);
function setImages(image) {
  const compressionSettings = [ 1, 0.5, 0.1 ];
  compressionSettings.forEach((setting, index) => {
    $[`image${index}`].image = image.imageAsCompressed(setting);
  });
}
function cleanup(e) {
  image = $.image0.image = $.image1.image = $.image2.image = null;
  $.window.removeAllChildren();
}
