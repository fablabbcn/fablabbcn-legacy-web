$( document ).ready(function() {
  console.log('Document ready')

  // When you land on /#thanks after submitting modal
  if(window.location.hash === '#modal-thanks'){
    $('#finishModal').modal({ });
  }
});
