/**
 * Created by Hank on 5/27/17.
 */

// Credit to Stack Overflow user SoEzPZ for pinned navbar
$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 0) {
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 1) {
            $('#nav_bar').removeClass('navbar-fixed');
        }
    });
});

var $animation_elements = $('.animation-element');
var $window = $(window);
$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var offset = $element.offset();
        var element_top_position = offset.top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            console.log('element in view')
        } else {
            $element.removeClass('in-view');
        }
    });
}