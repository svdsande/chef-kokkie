class ShoppingListService:
    def add_item(self, item_name, quantity):
        print(f"Adding item: {item_name} with quantity: {quantity}")

    def remove_item(self, item_id):
        print(f"Removing item with ID: {item_id}")

    def get_items(self):
        print("Retrieving all items")
        return []
    
    def update_item(self, item_id, new_data):
        print(f"Updating item with ID: {item_id} with new data: {new_data}")    

