$(document).ready(function () {
    $(".tab_content").hide();//tab_content 부분을 모두 숨김
    $("ul.tabs li:first").addClass("active").show();//첫번째 탭이 active 클래스를 붙이고, 보여줌
    $(".tab_content:first").show();//tab_contents 중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");//Remove any "active" class
        $(this).addClass("active");//선택한 탭에만 active클래스 붙임
        $(".tab_content").hide();//모든 contents들 숨김

        var activeTab = $(this).find("a").attr("href");
        //find the href attribute value to identify the active tab + content
        /* .attr(attributeName) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()sms 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다*/
        $(activeTab).fadeIn();
        //fade in the active ID content(active 되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });//어바웃 탭 제이쿼리 끝




});//제이쿼리 기본 구조 끝