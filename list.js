window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
 	let todos = [];

	var input = prompt("What would you like to do?");


	while(input !== 'quit'){
	//handle input
	if (input === "list"){
		listTodos();
	} else if (input === 'new'){
		addTodo();
	} else if (input === 'delete'){
		deleteTodo();
	}
	//ask again for new input
	input = prompt("What would you like to do?");
	}

	console.log("You quit the app");

	function listTodos(){
		console.log("**********");
		todos.forEach(function(todo, idx){
			console.log(idx + ": " + todo);
		});
		console.log("**********");
	} 
	
	function addTodo(){
		//ask for a new todo
		let newTodo = prompt("Enter new todo");
		//add todos to array
		todos.push(newTodo);
		console.log('Added todo');
	}

	function deleteTodo(){
		//ask for idx of item to delete
		var index = prompt("Enter index of todo to delete.");
		//delet that todo
		todos.splice(index, 1);
		console.log("Deleted todo.");
	}
	
}, 500);


// https://we.tl/t-e9Nu4RoNRS


