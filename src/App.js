import "./App.css";
import CSRFInput from "./components/CSRFInput";

function App() {
	return (
		<div className="App">
			<CSRFInput token="gibberish" />
		</div>
	);
}

export default App;
