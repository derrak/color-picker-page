

$(document).ready(function () {
  $("#colorPicker").spectrum({
    type: "color",
    color: "#FDF4DC",
    showInput: true,
    showInitial: true,
    showAlpha: false,
    showButtons: false,
    allowEmpty: false,
    showPalette: true,

    move: function (color) {
      $("body").css("background-color", color.toRgbString());
      }
  });
});

// $(document).ready(function () {
//   $("#colorPicker").spectrum({
//     color: "#fff",
//     move: function (color) {
//       $("body").css(
//         "background-color",
//         color.toRgbString());
//     },
//   });
// });



//spectrumColor_A = $('#color-picker').spectrum({
  // type: "flat",
  // showInput: true,
  // showInitial: true,
  // showAlpha: false,
  // allowEmpty: false
// });

// $(flatSpectrum_a).on('move.spectrum', function(e, tinyColor) {
//   var hexVal = tinyColor.toHexString();
//   var color_a = document.getElementById('colorPickerA');
//   // body.backgroundColor = hexVal;
//   $(body).css("background-color",hexVal);
// });