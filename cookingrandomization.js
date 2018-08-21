//build an array of cooking methods
var cooking = [
	"slow cooked",
  "Barbequed",
  "Boiled",
  "Fried",
  "Baked",
  "Microwaved",
  "Deep fried",
  "Steamed"
]
//build an array of foods
var foods = [
	 "noodle",
   "musubi",
   "Steak",
   "pork",
   "carrot",
   "oreo",
   "bacon",
   "Spaghetti",
   "egg",
   "ham",
   "bby back ribs",
   "ice cream",
   "chicken",
   "pizza",
   "cake",
   "fish",
   "tomato",
   "rice"
]
//concot the cooking method and the food based on a random sequence
var methods = Math.floor(Math.random() * cooking.length);
var consume = Math.floor(Math.random() * foods.length);

window.alert(cooking[methods] + " " + foods[consume]);