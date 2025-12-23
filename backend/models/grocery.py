from pydantic import BaseModel

class Grocery(BaseModel):
    name: str
    crossed_off: bool = False