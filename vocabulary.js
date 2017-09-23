var dictionary = {};
var wronglist = [];

function createword(index) {
  var columns = $('<div class="columns"></div>');
  var div = $('<div class="column"></div>').html(index);
  var div1 = $('<div class="column"></div>').html($('<input type="text">').attr('id', index));
  div2 = div.append(div1);
  columns.html(div2);
  $('#words').append(columns);
}

function evaluation() {
  var right = 0;
  var wrong = 0;
    for (var key in dictionary) {
      var jqueryvar = '#' + key
      if ($(jqueryvar).val() == dictionary[key]) {
        right += 1;
      }
      else {
        wrong += 1;
        wronglist.push(dictionary[key]);
        console.log(wronglist);
      }
    }
  $('#right').html(right);
  $('#wrong').html(wrong);
  if (right == Object.keys(dictionary).length) {
    $('#restart').text('You did a great job');
    $('#restart').on('click', function() {location.reload();});
  }
  else {
    $('#restart').on('click', function(){restarttest();})
  }
  $('#testresult').css('visibility', 'visible');
}

function savevocabulary() {
  if ($('#vocabulary').val() == 0 || 0 == $('#translation').val()) {
    alert('Please provide all data');
  }
  else {
    dictionary[$('#vocabulary').val()] = $('#translation').val();
    console.log($('#vocabulary').val());
  }
  $('#vocabulary').val('');
  $('#translation').val('');
}

function starttest() {
  if (Object.keys(dictionary).length == 0) {
    alert('there is no test');
    return;
  }
  for (var key in dictionary) {
    createword(key);
  }
}

function restarttest() {
  for (i in dictionary) {
    var x = dictionary[i];
    if (wronglist.indexOf(x) == -1) {
      console.log('Problem');
      delete dictionary[i];
    }
  }
  $('#words').empty();
  $('#testresult').css('visibility', 'hidden');
  starttest();
}

$(document).ready(function(){
addtranslation = $('#addtranslation');
startingdocument = $('#starttest');
addtranslation.on('click', function(){savevocabulary();});
startingdocument.on('click', function(){starttest();});
$('#evaluation').on('click', function(){evaluation();});
});
