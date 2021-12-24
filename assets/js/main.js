(function ($) {
  setTimeout(function () {
    $(".coverBg").addClass("inactive");
    $(".contentBg").addClass("active");
  }, 3000);
  $(".coverBg").on("click", function () {
    $(".coverBg").addClass("inactive");
    $(".contentBg").addClass("active");
  });
})(jQuery);
