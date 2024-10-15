import Card from "./Card";
import Student from "./Student";
import UserGreeting from './UserGreeting'
import List from "./List";
import EventButton from "./EventButton";
import Counter from "./Counter.jsx";

function App() {

	// For new-List component
	// const fruits = [];  // if list is empty, it will not appear
	const fruits = [
				{id: 1, name: "jackfruit", val: 49},
				{id: 1, name: "mango", val: 104},
				{id: 1, name: "banana", val: 203},
				{id: 1, name: "pineapple", val: 35},
				{id: 1, name: "orange", val: 423}
			];
	const vegetables = [
				{id: 6, name: "potato", val: 328},
				{id: 7, name: "corn", val: 90},
				{id: 8, name: "carrots", val: 128},
				{id: 9, name: "broccoli", val: 37},
				{id: 10, name: "onion", val: 25}
			];
	const oil = [
					{id: 11, name: "ricebran", val: 540}
				];

	// return (
		// <>
		// <Card name="Suvam Naskar" about="Turning Ideas into Pixel Perfect Web Apps | From Front-End to Back-End I bridge the gap" username="suvamnaskar" />
		// <Card />
		// <Student name="Spongebob" age={23} isStudent={true} />
		// </>

		// <>
		// 	<UserGreeting isLoggedIn={true} username="BroCode" />
		// 	<UserGreeting isLoggedIn={false} />
		// </>
	// );

	// return ( //list rendering
	// 	<>
	// 		{fruits.length > 0 && <List items={fruits} title="Fruits" />}
	// 		{vegetables.length > 0 && <List items={vegetables} title="Vegetables" /> }
	// 		{oil.length > 0 && <List title="Oil" /> }
	// 	</>
	// );

	// return (	// Event Handling
	// 	<>
	// 		<EventButton />
	// 	</>
	// );

	return (	// useState Hook
		<>
			<Counter />
		</>
	);
}

export default App
