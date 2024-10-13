import Card from "./Card";
import Student from "./Student";
import UserGreeting from './UserGreeting'

function App() {
	return (
		// <>
		// <Card name="Suvam Naskar" about="Turning Ideas into Pixel Perfect Web Apps | From Front-End to Back-End I bridge the gap" username="suvamnaskar" />
		// <Card />
		// <Student name="Spongebob" age={23} isStudent={true} />
		// </>

		<>
			<UserGreeting isLoggedIn={true} username="BroCode" />
			<UserGreeting isLoggedIn={false} />
		</>
	);
}

export default App
