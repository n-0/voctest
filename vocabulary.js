var dictionary = {};

function createword(index) {
  var word = $('#words');
  var div = $('<div class="column"></div>').html(index);
  word.append(div);
  var words1 = $('#words1');
  var div1 = $('<div class="column"></div>').html($('<input type="text">').attr('id', index));
  words1.append(div1);
}

function evaluation() {
  var right = 0;
  var wrong = 0;
  var wronglist = [];
    for (var key in dictionary) {
      var jqueryvar = '#' + key
      if ($(jqueryvar).val() == dictionary[key]) {
        right += 1;
      }
      else {
        wrong += 1;
        wronglist.push(dictionary[key]);
      }
    }
  console.log(right);
}

function savevocabulary() {
  if ($('#vocabulary').val() == 0 || 0 == $('#translation').val()) {
    alert('Please provide all data');
  }
  else {
    dictionary[$('#vocabulary').val()] = $('#translation').val();
    console.log($('#vocabulary').val());
  }
}

function starttest() {
  if (Object.keys(dictionary).length == 0) {
    alert('there is no test');
    return;
  }
  for (var key in dictionary) {
    createword(key);
    $('#evaluation').on('click', function(){evaluation();});
  }
}

$(document).ready(function(){
addtranslation = $('#addtranslation');
startingdocument = $('#starttest');
addtranslation.on('click', function(){savevocabulary();});
startingdocument.on('click', function(){starttest();});
});
