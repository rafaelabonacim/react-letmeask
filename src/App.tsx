// import { Button } from "./components/Button";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
	return (
		// <div>
		//   {/* enviando a propriedade text p component Button */}
		// 	{/* <Button text={['1','2']}/> */}

		// </div>
		// <Home />
		// <NewRoom />
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/rooms/new" element={<NewRoom />} />
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
