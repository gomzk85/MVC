function TaskController(model,view){
	this.model = model;
	this.view = view;
	this.init();
}

TaskController.prototype = {
	init:function(){
		this.createChildren()
		.setupHandler()
		.enable();
	},

	createChildren:function(){
		return this;
	},
	setupHandler:function(){
		this.addTaskHandler = this.addTask.bind(this);
		this.removeTaskHandler = this.removeTask.bind(this);
		return this;
	},
	enable:function(){
		this.view.addTaskEvent.attach(this.addTaskHandler);
		this.view.removeTaskEvent.attach(this.removeTaskHandler);
	},
	addTask:function(args,obj){
		console.log(obj,"Args Passed");
		this.model.addTask(obj);
	},
	removeTask:function(args){
		this.model.removeTask(args);
	}
}