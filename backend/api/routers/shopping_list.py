from fastapi import APIRouter, Depends
from services.shopping_list import ShoppingListService
from dependencies import get_shopping_list_service

api_router = APIRouter()

@api_router.get("/")
def get_shopping_list(shopping_list_service: ShoppingListService = Depends(get_shopping_list_service)):
    return shopping_list_service.get_items()

@api_router.post("/")
def add_item_to_shopping_list(item: str, shopping_list_service: ShoppingListService = Depends(get_shopping_list_service)):
    shopping_list_service.add_item(item, 1)

    return shopping_list_service.get_items()

@api_router.delete("/{item}")
def remove_item_from_shopping_list(item: str, shopping_list_service: ShoppingListService = Depends(get_shopping_list_service)):
    shopping_list_service.remove_item(item)
    return shopping_list_service.get_items()


@api_router.put("/{old_item}")
def update_item_in_shopping_list(old_item: str, new_item: str, shopping_list_service: ShoppingListService = Depends(get_shopping_list_service)):
    shopping_list_service.update_item(old_item, new_item)

    return shopping_list_service.get_items()