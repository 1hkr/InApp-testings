


function moveToSecondScreen() {
    appboyBridge.closeMessage()
}


function finish(){
    // TODO
}

// Adds a new event listener
function addEventListeners(el, eventHandlers) {
    Object.keys(eventHandlers).forEach(function (event) {
        el.addEventListener(event, eventHandlers[event]);
    });
}

$(document).click(function(){
    $("#comment").blur();
})

$('textarea').click(function(event){
    $("#comment").focus();
    event.stopPropagation();
});

/*======================================================*/
// First page on submit button click
// $('#next-btn').on('click', function(e){
//   event.preventDefault();
//   sendRatingValue();  
//   hide(firstScreen);      
//   show(secondScreen);  
// });

// function getVotingValue(form) {
//     var value = form.elements.options.value; 
//     return value;
// }

// What happens when you click on the close button at the second screen
// $('#close-btn').on('click', function(e){
//   event.preventDefault();
//   phiture.closeMessage();
//   console.log("Submit!");  
// });

// function sendRatingValue() {
//   var attributes = {};
//   var selectionValue = getVotingValue(firstScreen); 
//   // Fire for genre options
//   var eventName = 'survey_result_' + selectionValue;
//   attributes['selection_value'] = selectionValue;
//   attributes['survey_result'] = selectionValue;
//   appboyBridge.getUser().setCustomUserAttribute("survey_answer", selectionValue);
//   phiture.tagEvent(eventName, attributes);
// }

// function updateFirstScreen(form) {
//     form.elements.submit.disabled = getVotingValue(form) < 0;
// }

// Generic for all screens
// No need to change anything below
