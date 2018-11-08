var score = 0
$("#btn").on('click', function() {
  if ($("#q1c").is(":checked")) {
    score++
  }
  if ($("#q2a").is(":checked")) {
    score++

  }
  if ($("#q3a").is(":checked")) {
    score++

  }
  if ($("#q4b").is(":checked")) {
    score++

  }
  if ($("#5qa").is(":checked")) {
    score++

  }
  if ($("#6a").is(":checked")) {
    score++

  }
  if ($("#7c").is(":checked")) {
    score++

  }
  if ($("#8a").is(":checked")) {
    score++

  }
  if ($("#9a").is(":checked")) {
    score++

  }
  if ($("#10submit").is(":checked")) {
    score++

  }
})

$("#next2").on('click', function() {
  $("#question2").css("display", "block")
})

$("#next3").on('click', function() {
  $("#question3").css("display", "block")
})
$("#next4").on('click', function() {
  $("#question4").css("display", "block")
})
$("#next5").on('click', function() {
  $("#question5").css("display", "block")
})
$("#next6").on('click', function() {
  $("#question6").css("display", "block")
})
$("#next7").on('click', function() {
  $("#question7").css("display", "block")
})
$("#next8").on('click', function() {
  $("#question8").css("display", "block")
})
$("#next9").on('click', function() {
  $("#question9").css("display", "block")
})
$("#next10").on('click', function() {
  $("#question10").css("display", "block")
})

$("#btn").on('click', function() {
  $("#result").html(score)
})
