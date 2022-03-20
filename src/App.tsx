// import { Button } from "./components/Button";
import { BrowserRouter, Route, Routes   } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
	return (
		// <div>
    //   {/* enviando a propriedade text p component Button */}
		// 	{/* <Button text={['1','2']}/> */}
      
		// </div>
		// <Home />
		// <NewRoom />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/rooms/new" element={<NewRoom/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
