function TaskModel(){
	this.tasks = [];
	this.addTaskEvent = new Events(this);
	this.removeTaskEvent = new Events(this);
}

TaskModel.prototype = {
	addTask:function(task){
		this.tasks.push(task);
		console.log(this.tasks);
		this.addTaskEvent.notify();
	},
	removeTask:function(){
		this.tasks.pop();
		this.removeTaskEvent.notify();
	},
	getTasks:function(){
		return this.tasks;
	}
}


