// カバー写真変更ボタンの表示
$(function() {
  $('#cover-image').on("mouseover", function(){
    $('.change-header-cover').show();
  });
  $('#cover-image').on("mouseout", function(){
    $('.change-header-cover').hide();
  });
});

$(function() {
  $(document).on("click", ".change-header-cover", function() {
    $('.change-header-cover-list').slideDown('fast');
  });
  $(document).on("mouseout", ".change-header-cover-list", function() {
    $('.change-header-cover-list').hide();
  });
})

$(function() {
  $('#cover-image').after('<span></span>');

  // アップロードするファイルを選択
  $('#cover-image').change(function(e) {
    var file = $(this).prop('files')[0];

    // 画像以外は処理を停止
    if (! file.type.match('image.*')) {
      // クリア
      $(this).val('');
      $('span').html('');
      return;
    }

    // 画像表示
    var reader = new FileReader();
    reader.onload = function() {
      var img_src = $('<img class= avatar_review, width= >').attr('src', reader.result);
      $(e.target).next().html(img_src);
    }
    reader.readAsDataURL(file);
  });
});
