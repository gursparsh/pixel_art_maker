alert('Welcome!')
const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

function makeGrid() {
  $tableElement.html("");
  let height = $inputHeight.val();
  let width = $inputWidth.val();
  for (i = 0; i <height; i++) {
    $tableElement.append("<tr></tr>");
    for (j = 0; j <width; j++) {
      $tableElement
        .children()
        .last()
        .append("<td></td>");
    }
  }
}
$("form#sizePicker").on("submit", function(evt) {
  evt.preventDefault();
  makeGrid();
});
$tableElement.on("click", "td", function() {
  $(this).css("background-color", $colorPicker.val());
});
