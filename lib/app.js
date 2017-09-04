$(document).ready(function() {
  setBindings();
});

function setBindings() {
  $('ul li a').click(function(e) {
    e.preventDefault();
    var sectionID = e.currentTarget.id + 'Section';

  $('html, body')
  .animate({scrollTop: $('#' + sectionID).offset().top}, 1200);
  });
}

$(document).ready(function() {
    $('ul > li').click(function(){
      $('ul > li').each(function(){
      $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
});
