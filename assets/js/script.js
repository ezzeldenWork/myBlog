$(document).ready(function () {
  const quotApi = "./assets/quots/quots.json",
    runApi = () => {
      $.getJSON(quotApi, function (data) {
        const randQuot = data[Math.floor(Math.random() * data.length)];
        $(".qout_box .quot_prag").text(randQuot.quot);
        $(".qout_box .quot_auther").text(randQuot.name);
      });
    };

  runApi();

  $(".quot_relode").click(function () {
    runApi();
  });


  $(".color_box ul li span").click(function(){
    const theme_color = $(this).data("color");
    $("html").attr('data-theme',theme_color)
  })

  $(".color_box .opne_icon").click(function(){
    $(".color_box").toggleClass("color_box--opne")
  })

});
