(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
}(function ($) {
  $.extend($.summernote.options, {
    onMediaDelete: null
  });

  // add plugin
  $.extend($.summernote.plugins, {
    'onmediadelete': function (context) {
      var self = this;

      // add event listener to remove media when deleted
      context.$note.on('summernote.keyup summernote.mouseup summernote.change', function () {
        var $deletedMedia = context.$note.find('.note-editor [data-toggle="media"]');
        if ($deletedMedia.length) {
          $deletedMedia.each(function () {
            var $media = $(this);
            if (!$media.closest('.note-editor').length) {
              $media.remove();
              if ($.isFunction(context.options.onMediaDelete)) {
                context.options.onMediaDelete($media.attr('src'));
              }
            }
          });
        }
      });
    }
  }));
}));
