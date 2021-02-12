const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => console.log(`Starting on port ${port}`))

app.get('/', (req, res) => res.send(`<body>
	<script src="https://unpkg.com/mithril/mithril.js"></script>

	<script>
		// variables
		var data = "" // to store input from textfield
		var count = 0 // to count how many items have been added or removed from the list
		var items = [] // list to store to-do items that were entered

		// this method is called when anything is typed into the textfield
		function update(e) {
		    data = e.target.value
		}

		// method to add a new item to list
		function updateList(data) {
			if(data=="") { // if there is nothing in the textfield (nothing was typed in), don't add anything to the list
				console.log("nothing to add")
			} else { // otherwise, if something was typed in
				// push the to-do item to the list, along with the current count value
				items.push({id:count, listitem:data})
				// increase the count value
				count=count+1	
				// clear the textfield
				document.getElementById("textfield").value= ' '	
				// clear the data variable so the same item cannot be added again without being typed in again 
				/* this does not work as wanted */
				data=""
			}
			
		}

		// method to remove an item from the list
		function removeList(ids) {
			// reduce count since an item is being removed
			count=count-1
			// find the index of the item (ids) in question 
			var index = findindex(ids)
			// remove one item at position of index
			items.splice(index,1)			
		}

		// method to move a to-do list item up in the list
		function up(ids) {
			// find the index of the item (ids) in question 
			var index = findindex(ids)
			// if the 0th list item, the list item at the very top of the list, is trying to be moved up, don't move it
			if(index==0) {
				console.log("cannot move up")
			// if it's not the very top item
			} else {
				// utilize a temporary variable to store the to-do list item at index
				temp=items[index]
				// swap the to-do list item at index with the one at index-1
				items.splice(index,1,items[index-1])
				// insert the temp variable at index-1
				items.splice(index-1,1,temp)
			}
		}

		// method to move a to-do list item down in the list
		function down(ids) {
			// find the index of the item (ids) in question 
			var index = findindex(ids)
			// if the the list item at the very bottom of the list is trying to be moved down, don't move it
			if(index==count-1) {
				console.log("cannot move down")
			// if it's not the very bottom item
			} else {
				// utilize a temporary variable to store the to-do list item at index
				temp=items[index]
				// swap the to-do list item at index with the one at index+1
				items.splice(index,1,items[index+1])
				// insert the temp variable at index+1
				items.splice(index+1,1,temp)
			}
		}

		// method to find the index of the item in question
		// ids is the value of the id of the button that is clicked
		function findindex(ids) {
			// utilizes the findIndex function as an iterator in place of looping through the items with a for loop
			var index = items.findIndex(function(o) {
				return o.id == ids.key
			})
			return index // returns the index of which the value of the id was found in
		}

		// method that generates the to-do list item entered and the corresponding buttons (up, down, remove)
		function itemsInput(items) {
			return items.map(function(u) {
				return [ 
					m('h3', {key: u.id}, u.listitem),
					m('button',{key:u.id, onclick: function() { up({key:u.id})}},'Up'),
					m('button',{key:u.id, onclick: function() { down({key:u.id})}},'Down'),
					m('button',{key:u.id, onclick: function() { removeList({key:u.id})}},'Remove')
				]
			})
		}

		// displays the interface elements
		var App = {
			view: function () {
				return [
					m('input', {id:"textfield", placeholder: 'Type list item here...', oninput: update}),
					m('button', {onclick: function() { updateList(data)}}, 'Add'),
					itemsInput(items)
				]
			}
		}
		m.mount(document.body, App)
	</script>
</body>`))