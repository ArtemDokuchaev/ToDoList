var toDoComponent = Vue.extend({
	data: function() {
		return {
			inEditMode: false
		}
	},
	props: ['task'],
	template: `
	<div>
		<span class="text" v-on:click="Clicked" v-show="!inEditMode"><slot></slot></span>
		<input class ="text" v-on:keyup.enter="Saved" v-show="inEditMode" v-model="task.description"></input>
	</div>`,
	methods: {
		Clicked() {
			this.inEditMode = true;
		},
		Saved() {
			this.inEditMode = false;
		}
	}
});

Vue.component('task', toDoComponent);

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

					this.toDoList.push({description:this.newTask});
					this.newTask = '';

				},
			
				deleteTask( key ) {
					this.toDoList.splice(key, 1)
				},

				editTask() {

				}

			},
		
})