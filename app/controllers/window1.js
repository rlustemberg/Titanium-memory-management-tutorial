// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openGallery(e) {
  Ti.Media.openPhotoGallery({
    mediaTypes : [ Titanium.Media.MEDIA_TYPE_PHOTO ],
    success : function(e) {
      console.log('media.width: ' + e.media.width + '\nmedia.height: ' + e.media.height +
                  '\nmedia.length: ' + e.media.length + '\nmedia.mimeType: ' + e.media.mimeType +
                  '\nmedia.nativePath: ' + e.media.nativePath);

      openDetail(e.media);
    },
    error : function(e) {
      alert('error opening image: ' + e);
    }
  });
}
function openDetail(blob) {
  Alloy.Globals.TabGroup.activeTab.open(
      Alloy.createController('/imageDetails', {image : blob}).getView());
}
