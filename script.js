new Vue({

			el:'#app',
			data: {
				
				newName:'',
				names: [ 'Joe', 'John', 'Mark', 'Jack' ]

			},

			methods: {
				
				addName(){

					this.names.push(this.newName);
					this.newName = '';

				}
			

			},
		
		})
