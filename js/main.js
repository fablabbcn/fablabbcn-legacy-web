$( document ).ready(function() {
  console.log('Document ready')

  $('#video-gallery').lightGallery({
    loadYoutubeThumbnail: true,
    youtubeThumbSize: 'default',
  });


  // When you land on /#thanks after submitting modal
  if(window.location.hash === '#modal-thanks'){
    $('#finishModal').modal({ });
  }
});
