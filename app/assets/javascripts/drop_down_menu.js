$(function(){
  $(".fas.fa-sort-down").click(function(){
    $(".notification-sort__box").hide();
    $(".notification-sort__box",this).slideDown("fast");
  },function(){
    console.log("over！！！！");
    $(".notification-sort__box",this).slideUp();
  });
});

$(function(){
  $(".fas.fa-sort-down").click(function(){
    $(".setting-list").hide();
    $(".setting-list",this).slideDown("fast");
  },function(){
    console.log("over！！！！");
    $(".setting-list",this).slideUp();
  });
});