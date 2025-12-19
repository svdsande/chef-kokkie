from fastapi import APIRouter

api_router = APIRouter()

items = ["Apples", "Bananas", "Carrots"]

@api_router.get("/")
def get_shopping_list():
    return items
@api_router.post("/")
def add_item_to_shopping_list(item: str):
    items.append(item)

    return items

@api_router.delete("/{item}")
def remove_item_from_shopping_list(item: str):
    items.remove(item)

    return items


@api_router.put("/{old_item}")
def update_item_in_shopping_list(old_item: str, new_item: str):
    index = items.index(old_item)
    items[index] = new_item

    return items