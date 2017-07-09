/**
 * Created by Hank on 7/9/17.
 */

var $window = $(window);
var $skill_box = $('.skill-box');
$window.on('scroll resize', change_box_layout);


function change_box_layout() {
    var window_width = $window.width();
    // console.log(window_width);
    $.each($skill_box, function () {
        var $element = $(this);

        if (window_width < 450) {
            // $element.removeClass('nest-view');
            $element.addClass('vertical-view');
            // console.log('switched views');
        }
        else {
            $element.removeClass('vertical-view');
            // console.log('switched views');
            // $element.addClass('nest-view');
        }
    });
}
