$('#summernote').summernote({
  onMediaDelete: function (src) {
    // your code to remove the media file
  },
  toolbar: [
    ['insert', ['picture', 'link', 'video']],
    ['misc', ['onmediadelete']]
  ],
  buttons: {
    onmediadelete: function (context) {
      return $.summernote.ui.button({
        contents: '<i class="fa fa-trash"/>',
        tooltip: 'Delete media on selection',
        click: function () {
          context.invoke('onmediadelete.insert');
        }
      }).render();
    }
  }
});
