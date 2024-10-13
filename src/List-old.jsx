
function List() {

    const fruits = [{_id: 1, name: "apple", calories: 95},
                    {_id: 2, name: "orange", calories: 23},
                    {_id: 3, name: "banana", calories: 234},
                    {_id: 4, name: "mango", calories: 105},
                    {_id: 5, name: "coconut", calories: 37}]
    // fruits.sort((a,b) => a.name.localeCompare(b.name))  // Alphabetical Name
    // fruits.sort((a,b) => b.name.localeCompare(a.name))  // Reverse Alphabetical Name
    
    // fruits.sort((a,b) => a.calories - b.calories)  // Numerical Calories
    // fruits.sort((a,b) => b.calories - a.calories)  // Reverse Numerical Calories

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

    const listItems = fruits.map(fruit => <li key={fruit._id}>
                        {fruit.name}: &nbsp;
                        <b>{fruit.calories}</b></li>)
    
    const lowListItems = lowCalFruits.map(fruit => <li key={fruit._id}>
                        {fruit.name}: &nbsp;
                        <b>{fruit.calories}</b></li>)
    
    const highListItems = highCalFruits.map(fruit => <li key={fruit._id}>
                        {fruit.name}: &nbsp;
                        <b>{fruit.calories}</b></li>)

    return (
        <>
            <h2>Fruits:</h2>
            <ol>
                {listItems}
            </ol>

            <hr />
            <h2>Low Calories Fruits:</h2>
            <ol>
                {lowListItems}
            </ol>

            <hr />
            <h2>High Calories Fruits:</h2>
            <ol>
                {highListItems}
            </ol>
        </>
    )
}

export default List