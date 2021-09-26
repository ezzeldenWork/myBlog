const quotApi = "./assets/quots/quots.json",
  runApi = () => {
    $.getJSON(quotApi, function (data) {
      const randQuot = data[Math.floor(Math.random() * data.length)];
      $(".qout_box .quot_prag").text(randQuot.quot);
      $(".qout_box .quot_auther").text(randQuot.name);
    });
  };

$(document).ready(function () {
  runApi();
  $("html").attr("data-theme", localStorage.getItem("pageColor"));

  // body Click

  $("body").click(function () {
    $(".color_box").removeClass("color_box--opne");
  });

  // random the quot
  $(".quot_relode").click(function () {
    runApi();
  });

  // opne Setting Box
  $(".color_box .opne_icon").click(function (e) {
    e.stopPropagation();
    $(".color_box").toggleClass("color_box--opne");
  });
  $(".color_box").click(function (e) {
    e.stopPropagation();
  });

  // Chenge Theme color
  $(".color_box .color-list li span").click(function () {
    const theme_color = $(this).data("color");
    $("html").attr("data-theme", theme_color);
    $(".sulod_sun").addClass("sulod_sun--animation");
    setTimeout(function () {
      $(".sulod_sun").removeClass("sulod_sun--animation");
    }, 1500);

    // for localStorage
    localStorage.setItem("pageColor", theme_color);
  });

  $(".color_box .font_list li").click(function () {
    const theme_color = $(this).attr("class");
    $("html").attr("data-font", theme_color);
  });

  // opne Menu
  $(".ez_header .opne_icon i").click(function (e) {
    e.preventDefault();
    $(".ez_header .nav_list").slideToggle();
  });
});
