interface Item {
    id: number;
    topic: string;
}

class Todo {
    private items: Item[] = [];
    // Create: Add a new item to the list
    addItem(item: Item) {
        this.items.push(item);
    }
    // Read: Get all todo items
    getTodo(): Item[] {
        return this.items;
    }
    // Update: Update an existing item by its id
    updateItem(id: number, updatedTopic: string) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items[index].topic = updatedTopic;
            // Update the topic of the found item
        } else {
            console.log('Item not found');
        }
    }

    // Delete: Remove an item by its id
    removeItem(id: number) {
        const findIndex = this.items.findIndex(item => item.id === id);
        if (findIndex !== -1) {
            this.items.splice(findIndex, 1); // Remove the item from the array
        } else {
            console.log('Item not found');
        }
    }
}

// Create a new instance of Todo
const task = new Todo();

// Create items
task.addItem({ id: Date.now(), topic: "First" });
task.addItem({ id: Date.now(), topic: "Second" });
task.addItem({ id: Date.now(), topic: "Third" });

console.log("Items after creation:");
console.log(task.getTodo());

// Update an item (we'll use the first item's id)
const firstItemId = task.getTodo()[0].id;
task.updateItem(firstItemId, "Updated First");

console.log("Items after update:");
console.log(task.getTodo());

// Remove an item (we'll remove the second item)
const secondItemId = task.getTodo()[1].id;
task.removeItem(secondItemId);

console.log("Items after removal:");
console.log(task.getTodo());




// Todo : Key Points:
// ? Create: Adds new items with addItem.
// ? Read: Retrieves the entire list using getTodo.
// ? Update: Updates the topic of an item using updateItem by its id.
// ? Delete: Deletes an item by its id using removeItem.
