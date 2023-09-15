# **3 Project feature that i use in this project**
- ## **Selected course name on the cart:** 
At first if we click the select button then we have to see in the right side of the web page a list of selected items. There we can see which **Course Name** we are selected. Also we can see it in a list of numbers therefore we simply notice how many course we are added.

 ## **Total credit hour:** 
This is another project feature of mine that will show us how many hours of courses we have taken. When we click on the select button, we will see the course name as well as the duration of the course. If we click another button, another course will be added to the list and the duration of the new course will be added to the old course.

- ## **Total remaining hour:**

Total remaining hour, its feature is that when a course is selected, the time of the selected course will be subtracted from the total course time and the remaining time will be shown. In example, I can take a total course of 20 hours. Now if a 5 hour course is selected, I will have 15 hours left.

# **How i manage the state of the assignment project**
Here i use total five **State** to manage my project: 
- const [cards, setCards] = useState([]);
- const [course, setCourse] = useState([]);
- const [credit, setCredit] = useState(0);
- const [remaining, setRemaining] = useState(20);
- const [cost, setCost] = useState(0);
 

## State No. 1
- First state name is **cards**. This state are use for contain an array (json file) which is come from a hook called useEffect and it's initial value is an empty array. 

This state are used in a App components. The json file data are contain in cards and the cards value pass through a props using another component that's name is Carts and the carts component use the cards stored data.

## State No. 2 
- Second state name is **course**. This state are also use for contain an array which array come from a function and it's initial value is an empty array.

when we select any course by clicking select button then fire a function that name handleSelectButton, that function have a parameter and the parameter contains an object. By spread operator every time when the button clicked store the object value in an array to a variable and the variable value set to the course state base on some conditions. Now the state value pass as a parameter through a component to show selected course name in the cart. 

## State No. 3
- Third state name is **credit**. This state are use for contains a number and it's initial value is 0.

This state are manage the credit hour when we click any select button then the course credit hour add to the state and every time clicking the select button the state store the sum of the course durations.

## State No. 4
- Fourth state name is **remaining**. This state are also contains a number and it's initial value is total remaining time which is 20000.

This state are manage the remaining time when we click any select button then the remaining time will be minus from the total hour of credit was taken and then the value are set to the state.

## State No. 5
- Third state name is **cost**. This state are use for contains a number and it's initial value is 0.

This state are manage the total cost of these course when we click any select button then the total cost add to the state and every time clicking the select button the state store the sum of the course cost.