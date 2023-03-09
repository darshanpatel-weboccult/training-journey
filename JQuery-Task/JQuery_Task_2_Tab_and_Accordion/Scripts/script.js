$(document).ready(function () {
  // TABS
  $(".tab").on("click", function () {
    const target = this;
    $("#tab-data").html($($(target).attr("href")).html());

    $(".tab").each(function () {
      $(this).attr("href") === $(target).attr("href")
        ? $(this).addClass("active")
        : $(this).removeClass("active");
    });

  });

  //   PANE
  $(".pane").click(function () {
    const target = this;
    $(".pane").each(function () {
      $(this).attr("href") === $(target).attr("href")
        ? $(this).addClass("visible")
        : $(this).removeClass("visible");

      $($(".pane").not(".visible").attr("href")).fadeOut(300);
      $($(".pane").filter(".visible").attr("href")).delay(300).fadeIn(300);
    });
  });

  //   Accordion
  $(".title-acrdn").click(function () {
    const target = this;
    $(".title-acrdn").each(function () {
      $(this).attr("id") === $(target).attr("id") &&
      $(this).parent().hasClass("collapse")
        ? $(this).parent().removeClass("collapse")
        : $(this).parent().addClass("collapse");

      $(".content-accordion").filter(".collapse").children("p").slideUp(500);
      $(".content-accordion").not(".collapse").children("p").slideDown(500);
    });
  });
});
