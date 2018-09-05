<script>
    function populateStyle(vari, sty) {
      var vari = document.getElementById(vari);
      var sty = document.getElementById(sty);
      sty.innerHTML = "";
      if (vari.value == "-") {
        var optionArray = ["select|Select"];
      } else if (vari.value == "Monterey Jack" | vari.value == "Mild Cheddar") {
        var optionArray = ["select|Select", "Chunk|Chunk", "Shred|Shred", "Sliced|Sliced", ];
      } else if (vari.value == "Marble Jack" | vari.value == "Pepper Jack" | vari.value == "Medium Cheddar") {
        var optionArray = ["select|Select", "Chunk|Chunk", "Shingle|Shingle"];
      } else if (vari.value == "Cream Cheese") {
        var optionArray = ["select|Select", "Chunk|Chunk"];
      } else if (vari.value == "Sharp Cheddar") {
        var optionArray = ["select|Select", "Chunk|Chunk", "Shred|Shred"];
      } else if (vari.value == "Marbled Cheddar") {
        var optionArray = ["select|Select", "Chunk|Chunk", "Shred|Shred", "Sliced|Sliced"];
      } else if (vari.value == "Muenster") {
        var optionArray = ["select|Select", "Sliced|Sliced"];
      } else if (vari.value == "Swiss") {
        var optionArray = ["select|Select", "Chuck|Chuck", "Sliced|Sliced"];
      } else if (vari.value == "Provolone" | vari.value == "Variety Pack") {
        var optionArray = ["select|Select", "Sliced|Sliced"];
      } else if (vari.value == "Part Skim Mozz" | vari.value == "Whole Milk Mozz") {
        var optionArray = ["select|Select", "Ball|Ball"];
      } else if (vari.value == "Mozz") {
        var optionArray = ["select|Select", "Chunk|Chunk"];
      } else if (vari.value == "String") {
        var optionArray = ["select|Select", "String|String"];
      }

      for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        sty.options.add(newOption);
      }
    }

    function populateSize(vari, siz) {
      var vari = document.getElementById(vari);
      var siz = document.getElementById(siz);
      siz.innerHTML = "";
      if (vari.value == "-") {
        var optionArray = ["select|Select"];
      } else if (vari.value == "Monterey Jack" && sty.value == "Shingle") {
        var optionArray = ["0|0", "8 oz|8 oz"];
       } //else if (vari.value == "Monterey Jack" && sty.value == "Shingle") {
    //     var optionArray = ["0|0", "8 oz|8 oz", "1 lb|1 lb", "2 lb|2 lb", "4 lb|4 lb"];
    //   }

      }
      for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        siz.options.add(newOption);
      }
    }

    function populateQty(siz, qt) {
      var siz = document.getElementById(siz);
      var qt = document.getElementById(qt);
      qt.innerHTML = "";
      // if(siz.value) == "select") {
      //   var optionArray = ["select|Select"];
      // }
      if (siz.value == "12 oz") {
        var optionArray = ["0|0", "3|3", "6|6", "9|9", "12|12", "15|15"];
      } else {
        var optionArray = ["0|0", "1|1", "2|2", "3|3", "4|4", "5|5", "6|6", "7|7", "8|8", "9|9", "10|10", "11|11",
          "12|12", "13|13", "14|14", "15|15"
        ];
      }

      for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        qt.options.add(newOption);
      }
    }
  </script>




//OLD ONE
// //siz.innerHTML = "";
// if (vari.value == "-") {
//     var optionArray = ["select|Select"];
//   } else if (vari.value == "Monterey Jack" | vari.value == "Mild Cheddar" | vari.value == "Medium Cheddar") {
//     var optionArray = ["0|0", "8 oz|8 oz", "1 lb|1 lb", "2 lb|2 lb", "4 lb|4 lb"];
//   } else if (vari.value == "Marble Jack" | vari.value == "Sharp Cheddar") {
//     var optionArray = ["0|0", "8 oz|8 oz", "1 lb|1 lb", "2 lb|2 lb", "4 lb|4 lb"];
//   } else if (vari.value == "Pepper Jack" | vari.value == "Marbled Cheddar") {
//     var optionArray = ["0|0", "8 oz|8 oz", "1 lb|1 lb", "2 lb|2 lb"];
//   } else if (vari.value == "Cream Cheese") {
//     var optionArray = ["0|0", "8 oz|8 oz"];
//   } else if (vari.value == "Muenster") {
//     var optionArray = ["0|0", "8 oz|8 oz"];
//   } else if (vari.value == "Provolone") {
//     var optionArray = ["0|0", "8 oz|8 oz"];
//   } else if (vari.value == "Swiss") {
//     var optionArray = ["0|0", "8 oz|8 oz", "1 lb|1 lb", "4 lb|4 lb"];
//   } else if (vari.value == "Variety Pack") {
//     var optionArray = ["0|0", "2 lb|2 lb"];
//   } else if (vari.value == "Part Skim Mozz" | vari.value == "Whole Milk Mozz") {
//     var optionArray = ["0|0", "1 lb|1 lb", "2 lb|2 lb"];
//   } else if (vari.value == "Mozz") {
//     var optionArray = ["0|0", "8 oz|8 oz", "1 lb|1 lb", "2 lb|2 lb", "4 lb|4 lb"];
//   } else if (vari.value == "String") {
//     var optionArray = ["0|0", "1 lb|1 lb"];
//   }

