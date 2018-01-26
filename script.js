

new Vue({

			el:'#app',
			data: {
				
				newTask:'',
				toDoList: [ 
					{ description: 'Go to store'}, 
					{ description: 'Wash the car'},
					{ description: 'Clean the room'},
					{ description: 'Walk the dog'} ],
				isClicked: false,

			},

			computed: {
			    reverseList() {
			        return this.toDoList.slice().reverse();
			  	}     
			},

			methods: {
				
				addTask() {

					this.toDoList.push(this.newTask);
					this.newTask = '';

				},
			
				deleteTask( key ) {
					this.toDoList.splice(key, 1)
				},

				editTask() {

				}

			},
		
})