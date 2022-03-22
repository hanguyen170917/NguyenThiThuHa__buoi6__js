/**
 * Bài 1
 */

function minNumber() {
  var number = 0;
  var count = 0;
  while (number < 10000) {
    count++;
    number += count;
  }

  document.getElementById("footerMinNumber").innerHTML =
    "Số nguyên dương nhỏ nhất: " + count;
  document.getElementById("footerMinNumber").style.fontSize = "20px";
}

minNumber();

/**
 * Bài 2
 */

document.getElementById("btnSubmit").onclick = function () {
  var txtNumberx = document.getElementById("txtNumberx").value * 1;
  var txtNumbern = document.getElementById("txtNumbern").value * 1;

  var content = totalNumber(txtNumberx, txtNumbern);

  document.getElementById("footerTotal").innerHTML = "Tổng là: " + content;
  document.getElementById("footerTotal").style.fontSize = "20px";
};

function totalNumber(txtNumberx, txtNumbern) {
  var squared = 0;
  var number = 0;
  var total = 0;
  do {
    squared++;
    number = Math.pow(txtNumberx, squared);
    total += number;
  } while (squared < txtNumbern);
  return total;
}

/**
 * Bài 3
 */

document.getElementById("btnFactorial").onclick = function () {
  var txtNumber = document.getElementById("txtNumber").value * 1;
  var count = 0;
  var factorial = 1;

  for (var i = 0; i < txtNumber; i++) {
    count++;
    factorial *= count;
  }

  document.getElementById("footerFactorial").innerHTML =
    txtNumber + "!" + " = " + factorial;
  document.getElementById("footerFactorial").style.fontSize = "20px";
};

/**
 * Bài 4
 */

document.getElementById("btnPrintDiv").onclick = function () {
  var count = 1;
  var result = "";
  var envenNumber = "";
  var oddNumber = "";
  for (var i = 0; i < 10; i++) {
    if (count % 2 != 0) {
      envenNumber = "Div lẻ " + count;
      result +=
        "<div style='background-color:#1718f9'>" + envenNumber + "</div>";
    } else {
      oddNumber = "Div chẵn " + count;
      result += "<div style='background-color:#f33c3c'>" + oddNumber + "</div>";
    }
    count++;
  }
  document.getElementById("printDiv").innerHTML = result;
  document.getElementById("printDiv").style.fontSize = "20px";
};
