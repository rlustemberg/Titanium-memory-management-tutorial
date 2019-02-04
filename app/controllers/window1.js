// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openGallery(buttonEvt) {
  Ti.Media.openPhotoGallery({
    mediaTypes : [ Titanium.Media.MEDIA_TYPE_PHOTO ],
    success : function(e) {
      console.log('media.width: ' + e.media.width + '\nmedia.height: ' + e.media.height +
                  '\nmedia.length: ' + e.media.length + '\nmedia.mimeType: ' + e.media.mimeType +
                  '\nmedia.nativePath: ' + e.media.nativePath);

      openDetail(buttonEvt.source.id, e.media);
    },
    error : function(e) {
      alert('error opening image: ' + e);
    }
  });
}
function openDetail(id, blob) {
  const controllerPrefix = '/imageDetails';
  Alloy.Globals.TabGroup.activeTab.open(
      Alloy.createController(`${controllerPrefix}${id.slice(-1)}`, {image : blob}).getView());
}
