function Events(sender){
	this._sender = sender;
	this._listeners = [];
}

Events.prototype = {
	attach:function(fn){
		this._listeners.push(fn);
	},
	notify:function(args){
		for(var i=0;i<this._listeners.length;i++){
			this._listeners[i](this._sender,args);
		}
	}
}