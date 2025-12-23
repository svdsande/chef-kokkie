from services.shopping_list import ShoppingListService

# Create a single instance
_shopping_list_service = ShoppingListService()

def get_shopping_list_service():
    return _shopping_list_service