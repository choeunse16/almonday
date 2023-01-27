$(document).ready(function () {


    /*
    <모달팝업>
    자세히보기버튼(.more a)를 클릭하니까, 팝업(.popup)이 나타나고(fadeIn되고),
    x버튼(.close)을 클릭하니까, 팝업(.popup)이 사라진다(fadeOut).
      */

    //레시피 팝업
    $(".milktea").click(function () {
        $("#popup").fadeIn();
    });//more a를 클릭했을 때
    $(".close").click(function () {
        $("#popup").fadeOut();
    });//close를 클릭했을 때

});//제이쿼리 기본 구조 끝