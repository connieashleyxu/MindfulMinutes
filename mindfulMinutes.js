setScreen("welcomeScreen1");
onEvent("nextButton1", "click", function() {
  setScreen("welcomeScreen2");
});
onEvent("nextButton2", "click", function() {
  setScreen("welcomeScreen3");
});
onEvent("skipButton1", "click", function() {
  setScreen("homeScreen");
});
onEvent("skipButton2", "click", function() {
  setScreen("homeScreen");
});
onEvent("startButton1", "click", function() {
  setScreen("homeScreen");
});
onEvent("calorieCount", "click", function(){
  setScreen("calorieAddScreen");
});
onEvent("exerciseCounter", "click", function(){
  setScreen("exerciseAddScreen");
});
onEvent("meditationCounter", "click", function() {
  setScreen("meditationAddScreen");
});
onEvent("studyCounter", "click", function() {
  setScreen("studyAddScreen");
});
onEvent("habitCounter", "click", function() {
  setScreen("habitAddScreen");
});
onEvent("customCounter", "click", function( ) {
  setScreen("customAddScreen");
});
onEvent("addButton", "click", function(){
  setScreen("addCounterScreen");
});
onEvent("calorieCount", "click", function(){
  setScreen("calorieCounterScreen");
});
onEvent("menuCalorie", "click", function(){
  showElement("menuCalorie");
  var choice = getProperty("menuCalorie", "value");
  if (choice == "add") {
    setScreen("calorieAddScreen");
  } else if (choice == "remove") {
    setScreen("calorieRemoveScreen");
  } else if (choice == "history") {
    setScreen("calorieHistoryScreen");
  } else if (choice == "edit"){
    setScreen("calorieEditScreen");
  }
});
onEvent("dropdown3", "click", function(){
  showElement("dropdown3");
  var choice = getProperty("dropdown3", "value");
  if (choice == "add") {
    setScreen("calorieAddScreen");
  } else if (choice == "remove") {
    setScreen("calorieRemoveScreen");
  } else if (choice == "history") {
    setScreen("calorieHistoryScreen");
  } else if (choice == "edit"){
    setScreen("calorieEditScreen");
  }
});
onEvent("calorieMenuButton","click", function(){
  setScreen("addCounterScreen");
});
onEvent("calorieContinueCount","click", function(){
  setScreen("calorieCounterScreen");
});
onEvent("dropdown5", "click", function(){
  showElement("dropdown5");
  var choice = getProperty("dropdown5", "value");
  if (choice == "add") {
    setScreen("calorieAddScreen");
  } else if (choice == "remove") {
    setScreen("calorieRemoveScreen");
  } else if (choice == "history") {
    setScreen("calorieHistoryScreen");
  } else if (choice == "edit"){
    setScreen("calorieEditScreen");
  }
});
onEvent("dropdown6", "click", function(){
  showElement("dropdown6");
  var choice = getProperty("dropdown6", "value");
  if (choice == "add") {
    setScreen("calorieAddScreen");
  } else if (choice == "remove") {
    setScreen("calorieRemoveScreen");
  } else if (choice == "history") {
    setScreen("calorieHistoryScreen");
  } else if (choice == "edit"){
    setScreen("calorieEditScreen");
  }
});
onEvent("addCalorie", "click", function(){
  onEvent("enterButton2", "click", function( ) {
      var calorieAmt = getProperty("addCalorie", "value");
      setScreen("calorieCounterScreen");
      setText(calorieCounterNum, calorieAmt);;
  });
});
onEvent("dropdown32", "click", function(){
  showElement("dropdown32");
  var choice = getProperty("dropdown32", "value");
  if (choice == "add") {
    setScreen("customAddScreen");
  } else if (choice == "remove") {
    setScreen("customRemoveScreen");
  } else if (choice == "history") {
    setScreen("customHistoryScreen");
  } else if (choice == "edit"){
    setScreen("customEditScreen");
  }
});
onEvent("dropdown30", "click", function(){
  showElement("dropdown30");
  var choice = getProperty("dropdown30", "value");
  if (choice == "add") {
    setScreen("customAddScreen");
  } else if (choice == "remove") {
    setScreen("customRemoveScreen");
  } else if (choice == "history") {
    setScreen("customHistoryScreen");
  } else if (choice == "edit"){
    setScreen("customEditScreen");
  }
});
onEvent("dropdown33", "click", function(){
  showElement("dropdown33");
  var choice = getProperty("dropdown33", "value");
  if (choice == "add") {
    setScreen("customAddScreen");
  } else if (choice == "remove") {
    setScreen("customRemoveScreen");
  } else if (choice == "history") {
    setScreen("customHistoryScreen");
  } else if (choice == "edit"){
    setScreen("customEditScreen");
  }
});
onEvent("dropdown34", "click", function(){
  showElement("dropdown34");
  var choice = getProperty("dropdown34", "value");
  if (choice == "add") {
    setScreen("customAddScreen");
  } else if (choice == "remove") {
    setScreen("customRemoveScreen");
  } else if (choice == "history") {
    setScreen("customHistoryScreen");
  } else if (choice == "edit"){
    setScreen("customEditScreen");
  }
});
onEvent("dropdown7", "click", function(){
  showElement("dropdown7");
  var choice = getProperty("dropdown7", "value");
  if (choice == "add") {
    setScreen("exerciseAddScreen");
  } else if (choice == "remove") {
    setScreen("exerciseRemoveScreen");
  } else if (choice == "history") {
    setScreen("exerciseHistoryScreen");
  } else if (choice == "edit"){
    setScreen("exerciseEditScreen");
  }
});
onEvent("dropdown1", "click", function(){
  showElement("dropdown1");
  var choice = getProperty("dropdown1", "value");
  if (choice == "add") {
    setScreen("exerciseAddScreen");
  } else if (choice == "remove") {
    setScreen("exerciseRemoveScreen");
  } else if (choice == "history") {
    setScreen("exerciseHistoryScreen");
  } else if (choice == "edit"){
    setScreen("exerciseEditScreen");
  }
});
onEvent("dropdown8", "click", function(){
  showElement("dropdown8");
  var choice = getProperty("dropdown8", "value");
  if (choice == "add") {
    setScreen("exerciseAddScreen");
  } else if (choice == "remove") {
    setScreen("exerciseRemoveScreen");
  } else if (choice == "history") {
    setScreen("exerciseHistoryScreen");
  } else if (choice == "edit"){
    setScreen("exerciseEditScreen");
  }
});
onEvent("dropdown9", "click", function(){
  showElement("dropdown9");
  var choice = getProperty("dropdown9", "value");
  if (choice == "add") {
    setScreen("exerciseAddScreen");
  } else if (choice == "remove") {
    setScreen("exerciseRemoveScreen");
  } else if (choice == "history") {
    setScreen("exerciseHistoryScreen");
  } else if (choice == "edit"){
    setScreen("exerciseEditScreen");
  }
});
onEvent("dropdown26", "click", function(){
  showElement("dropdown26");
  var choice = getProperty("dropdown26", "value");
  if (choice == "add") {
    setScreen("habitAddScreen");
  } else if (choice == "remove") {
    setScreen("habitRemoveScreen");
  } else if (choice == "history") {
    setScreen("habitHistoryScreen");
  } else if (choice == "edit"){
    setScreen("habitEditScreen");
  }
});
onEvent("dropdown25", "click", function(){
  showElement("dropdown25");
  var choice = getProperty("dropdown25", "value");
  if (choice == "add") {
    setScreen("habitAddScreen");
  } else if (choice == "remove") {
    setScreen("habitRemoveScreen");
  } else if (choice == "history") {
    setScreen("habitHistoryScreen");
  } else if (choice == "edit"){
    setScreen("habitEditScreen");
  }
});
onEvent("dropdown28", "click", function(){
  showElement("dropdown28");
  var choice = getProperty("dropdown28", "value");
  if (choice == "add") {
    setScreen("habitAddScreen");
  } else if (choice == "remove") {
    setScreen("habitRemoveScreen");
  } else if (choice == "history") {
    setScreen("habitHistoryScreen");
  } else if (choice == "edit"){
    setScreen("habitEditScreen");
  }
});
onEvent("dropdown29", "click", function(){
  showElement("dropdown29");
  var choice = getProperty("dropdown29", "value");
  if (choice == "add") {
    setScreen("habitAddScreen");
  } else if (choice == "remove") {
    setScreen("habitRemoveScreen");
  } else if (choice == "history") {
    setScreen("habitHistoryScreen");
  } else if (choice == "edit"){
    setScreen("habitEditScreen");
  }
});
onEvent("dropdown13", "click", function(){
  showElement("dropdown13");
  var choice = getProperty("dropdown13", "value");
  if (choice == "add") {
    setScreen("meditationAddScreen");
  } else if (choice == "remove") {
    setScreen("meditationRemoveScreen");
  } else if (choice == "history") {
    setScreen("meditationHistoryScreen");
  } else if (choice == "edit"){
    setScreen("meditationEditScreen");
  }
});
onEvent("dropdown12", "click", function(){
  showElement("dropdown12");
  var choice = getProperty("dropdown12", "value");
  if (choice == "add") {
    setScreen("meditationAddScreen");
  } else if (choice == "remove") {
    setScreen("meditationRemoveScreen");
  } else if (choice == "history") {
    setScreen("meditationHistoryScreen");
  } else if (choice == "edit"){
    setScreen("meditationEditScreen");
  }
});
onEvent("dropdown14", "click", function(){
  showElement("dropdown14");
  var choice = getProperty("dropdown14", "value");
  if (choice == "add") {
    setScreen("meditationAddScreen");
  } else if (choice == "remove") {
    setScreen("meditationRemoveScreen");
  } else if (choice == "history") {
    setScreen("meditationHistoryScreen");
  } else if (choice == "edit"){
    setScreen("meditationEditScreen");
  }
});
onEvent("dropdown15", "click", function(){
  showElement("dropdown15");
  var choice = getProperty("dropdown15", "value");
  if (choice == "add") {
    setScreen("meditationAddScreen");
  } else if (choice == "remove") {
    setScreen("meditationRemoveScreen");
  } else if (choice == "history") {
    setScreen("meditationHistoryScreen");
  } else if (choice == "edit"){
    setScreen("meditationEditScreen");
  }
});
onEvent("dropdown19", "click", function(){
  showElement("dropdown19");
  var choice = getProperty("dropdown19", "value");
  if (choice == "add") {
    setScreen("studyAddScreen");
  } else if (choice == "remove") {
    setScreen("studyRemoveScreen");
  } else if (choice == "history") {
    setScreen("studyHistoryScreen");
  } else if (choice == "edit"){
    setScreen("studyEditScreen");
  }
});
onEvent("dropdown18", "click", function(){
  showElement("dropdown18");
  var choice = getProperty("dropdown18", "value");
  if (choice == "add") {
    setScreen("studyAddScreen");
  } else if (choice == "remove") {
    setScreen("studyRemoveScreen");
  } else if (choice == "history") {
    setScreen("studyHistoryScreen");
  } else if (choice == "edit"){
    setScreen("studyEditScreen");
  }
});
onEvent("dropdown20", "click", function(){
  showElement("dropdown20");
  var choice = getProperty("dropdown20", "value");
  if (choice == "add") {
    setScreen("studyAddScreen");
  } else if (choice == "remove") {
    setScreen("studyRemoveScreen");
  } else if (choice == "history") {
    setScreen("studyHistoryScreen");
  } else if (choice == "edit"){
    setScreen("studyEditScreen");
  }
});
onEvent("dropdown21", "click", function(){
  showElement("dropdown21");
  var choice = getProperty("dropdown21", "value");
  if (choice == "add") {
    setScreen("studyAddScreen");
  } else if (choice == "remove") {
    setScreen("studyRemoveScreen");
  } else if (choice == "history") {
    setScreen("studyHistoryScreen");
  } else if (choice == "edit"){
    setScreen("studyEditScreen");
  }
});
onEvent("backButton1", "click", function(){
  setScreen("homeScreen");
});
onEvent("button46", "click", function(){
  setScreen("homeScreen");
});
onEvent("button4", "click", function(){
  setScreen("homeScreen");
});
onEvent("button36", "click", function(){
  setScreen("homeScreen");
});
onEvent("button14", "click", function(){
  setScreen("homeScreen");
});
onEvent("button24", "click", function(){
  setScreen("homeScreen");
});
onEvent("cancelButton1", "click", function(){
  setScreen("calorieCounterScreen");
});
onEvent("backButton4", "click", function(){
  setScreen("calorieCounterScreen");
});
onEvent("backButton3", "click", function(){
  setScreen("calorieCounterScreen");
});
onEvent("backButton2", "click", function(){
  setScreen("calorieCounterScreen");
});
onEvent("button48", "click", function(){
  setScreen("customCounterScreen");
});
onEvent("button46", "click", function(){
  setScreen("customCounterScreen");
});
onEvent("button10", "click", function(){
  setScreen("customCounterScreen");
});
onEvent("button11", "click", function(){
  setScreen("customCounterScreen");
});
onEvent("button6", "click", function(){
  setScreen("exerciseCounterScreen");
});
onEvent("button5", "click", function(){
  setScreen("exerciseCounterScreen");
});
onEvent("button10", "click", function(){
  setScreen("exerciseCounterScreen");
});
onEvent("button11", "click", function(){
  setScreen("exerciseCounterScreen");
});
onEvent("button34", "click", function(){
  setScreen("habitCounterScreen");
});
onEvent("button38", "click", function(){
  setScreen("habitCounterScreen");
});
onEvent("button42", "click", function(){
  setScreen("habitCounterScreen");
});
onEvent("button43", "click", function(){
  setScreen("habitCounterScreen");
});