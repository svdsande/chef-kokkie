from typing import List
from models.grocery import Grocery

class ShoppingListService:
    def __init__(self):
        self.grocery_items: List[Grocery] = [Grocery(name="item1"), Grocery(name="item2"), Grocery(name="item3")]

    def add_item(self, item: str) -> None:
        self.grocery_items.append(Grocery(name=item))

    def remove_item(self, item: str) -> None:
        self.grocery_items = [grocery for grocery in self.grocery_items if grocery.name != item]

    def get_items(self) -> List[Grocery]:
        return self.grocery_items

    def cross_off_item(self, item: str) -> None:
        for grocery in self.grocery_items:
            if grocery.name == item:
                grocery.crossed_off = True
                return
        raise ValueError("Item not found")