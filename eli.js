$(function(){
  $(".nav-list li").click(function(event) {
    var contentId = $(event.currentTarget).attr("data-id");
    var $newContent = $("[data-link-id='" + contentId + "']");
    var $oldContent = $(".active")
    $oldContent.toggleClass("active hidden")
    $newContent.toggleClass("active hidden");
  })
})
