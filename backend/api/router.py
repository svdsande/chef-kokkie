from fastapi import APIRouter
from .routers import shopping_list, meal_plans

api_router = APIRouter()

api_router.include_router(shopping_list.api_router, prefix="/shopping-list", tags=["shopping-list"])
api_router.include_router(meal_plans.api_router, prefix="/meal-plans", tags=["meal-plans"])