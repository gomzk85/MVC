function TaskView(model){
	this.model = model;
	this.addTaskEvent = new Events(this);
	this.removeTaskEvent = new Events(this);
	this.init();
}

TaskView.prototype = {
	init:function(){
		this.createChildren()
		.setUpHandler()
		.enable()		
	},
	createChildren:function(){
		this.$jscontainer = $('.js-container');
		this.$tasktextbox = $('.js-task-textbox');
		this.$jsaddtaskbutton = $('.js-add-task-button');
		this.$jsremovetaskbutton = $('.js-remove-task-button');
		this.$jstaskscontainer = $('.js-tasks-container');	
		return this;
	},
	setUpHandler:function(){
		this.addTaskHandler = this.addTaskButton.bind(this);
		this.addTaskModelHandler = this.addTask.bind(this);
		this.removeTaskHandler = this.removeTaskButton.bind(this);
		this.removeTaskModelHandler = this.removeTask.bind(this);
		return this;

	},
	enable:function(){
		this.$jsaddtaskbutton.on('click',this.addTaskHandler);
		this.$jsremovetaskbutton.on('click',this.removeTaskHandler);
		this.model.addTaskEvent.attach(this.addTaskModelHandler);
		this.model.removeTaskEvent.attach(this.removeTaskModelHandler);
	},

	addTaskButton:function(){
		this.addTaskEvent.notify({
			"name":this.$tasktextbox.val()
		})
	},
	removeTaskButton:function(){
		this.removeTaskEvent.notify();
	},

	addTask:function(){
		this.show();
	},
	removeTask:function(){
		this.show();
	},
	show:function(){
		this.buildList();
	},
	buildList:function(){
		var tasks = this.model.getTasks();
		var html = "";
		var taskcontainer = this.$jstaskscontainer;
		taskcontainer.html('');
		for(var i = 0; i < tasks.length;i++){
			html = html + '<div>'+tasks[i].name+'</div>'
		}
		taskcontainer.append(html);
		
	}

}

