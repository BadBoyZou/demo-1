$(document).ready(function () {
    $(window).scroll(function () {
        var items = $("#content").find(".item");
        var menu = $("#menu");
        var top = $(document).scrollTop();
        var currentId = ""; //滚动条现在所在位置的item id
        items.each(function () {
            var m = $(this);
            //注意：m.offset().top代表每一个item的顶部位置
            if (top > m.offset().top - 300) {
                currentId = "#" + m.attr("id");
            } else {
                return false;
            }
        });

        var currentLink = menu.find(".current");
        if (currentId && currentLink.attr("href") != currentId) {
            currentLink.removeClass("current");
            menu.find("[href=" + currentId + "]").addClass("current");
        }
    });
});