$(document).ready(function() {
  
	//Hit enter key to add taks
	document.onkeydown=function(){
		if(window.event.keyCode=='13'){
			addTask();
			update();
		}
	}
  // To save and reload
  function update() { 
    var toDoList = [];
    $("ul").each(function(){
       toDoList.push(this.innerHTML);
    })
    localStorage.setItem('todoList', JSON.stringify(toDoList));
  }

  
  
  $("#clearTasks").click(function(e) {
    e.preventDefault();
    localStorage.clear();
    location.reload();
  });
  
  

  loadAfterRefresh();

  function loadAfterRefresh() {
    if (localStorage.getItem('todoList')){
        var toDoList = JSON.parse(localStorage.getItem('todoList'));
        $("ul").each(function(listItem){
          this.innerHTML = toDoList [listItem];
        })
    }
  }
// });





// Create a new task list
$("#addTask").click(function(){
  addTask();
  update();
});

function addTask() {
  var li = document.createElement("li");
  var h3 = document.createElement("h3");
  var h3 = document.createElement("h4");
  var h3 = document.createElement("h5");
  var inputValue = document.getElementById("taskInput").value;
  var inputVal = document.getElementById("reminder").value;
  var input = document.getElementById("select").value;
  var t = document.createTextNode(inputValue);
  var s = document.createTextNode(inputVal);
  var u = document.createTextNode(input);
  
  //document.getElementsByTagName("li")[0].appendChild(h2)
  $(li).append('<h3>');
  $(li).append('<h3>');
  $(li).append('<h3>');

  h3.appendChild(t);
  h3.appendChild(s);
  h3.appendChild(u);
  
  
  if (inputValue === '') {
    $('#alert').html("To do List cannot be empty");
    $('#alert').fadeIn().delay(1000).fadeOut();
  } else {
    document.getElementById("taskUL").appendChild(h3);
    document.getElementById("taskUL").appendChild(h3);
    document.getElementById("taskUL").appendChild(h3);
  }
  document.getElementById("taskInput").value = "";
  document.getElementById("reminder").value = "";
  

}


});

