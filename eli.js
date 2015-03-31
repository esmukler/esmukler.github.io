$(function(){
  $(".nav-list li").click(function(event) {
    var contentId = $(event.currentTarget).attr("data-id");
    var $newContent = $("[data-link-id='" + contentId + "']");
    var oldId = $(".active").attr("data-link-id");
    var $oldContent = $("[data-link-id='" + oldId + "']")
    $oldContent.toggleClass("active transitioning");



    $oldContent.one("transitionend", function(event) {
      $oldContent.toggleClass("transitioning hidden")

      $newContent.toggleClass("hidden active transitioning")

      setTimeout(function() {
        $newContent.removeClass("transitioning");
      }, 0);
    })


  })
})
