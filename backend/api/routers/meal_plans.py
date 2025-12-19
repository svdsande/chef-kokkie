from fastapi import APIRouter

api_router = APIRouter()

@api_router.get("/")
def get_meal_plans():
    return ["Meal Plan 1", "Meal Plan 2"]

@api_router.post("/")
def add_meal_plan(meal_plan: str):
    return {"message": f"Meal plan '{meal_plan}' added."}

@api_router.delete("/{meal_plan}")
def remove_meal_plan(meal_plan: str):
    return {"message": f"Meal plan '{meal_plan}' removed."}


@api_router.put("/{old_meal_plan}")
def update_meal_plan(old_meal_plan: str, new_meal_plan: str):
    return {"message": f"Meal plan '{old_meal_plan}' updated to '{new_meal_plan}'."}