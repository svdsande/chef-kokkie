from fastapi import APIRouter, Depends
from services.shopping_list import ShoppingListService
from dependencies import get_shopping_list_service
from typing import List
from models.grocery import Grocery

api_router = APIRouter()

@api_router.get("")
def get_shopping_list(shopping_list_service: ShoppingListService = Depends(get_shopping_list_service)) -> List[Grocery]:
    return shopping_list_service.get_items()

@api_router.post("", status_code=201)
def add_item_to_shopping_list(item: str, shopping_list_service: ShoppingListService = Depends(get_shopping_list_service)):
    shopping_list_service.add_item(item)

    return shopping_list_service.get_items()

@api_router.delete("/{item}", status_code=204)
def remove_item_from_shopping_list(item: str, shopping_list_service: ShoppingListService = Depends(get_shopping_list_service)):
    shopping_list_service.remove_item(item)


@api_router.put("/{item}", status_code=204)
def cross_off_item(item: str, shopping_list_service: ShoppingListService = Depends(get_shopping_list_service)) -> None:
    shopping_list_service.cross_off_item(item)