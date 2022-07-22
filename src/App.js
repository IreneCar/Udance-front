import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />

			<Routes>
				<Route exact path="/" element={<HomePage/>} />
				<Route
					exact
					path="/lessons"
					element={
					<ProjectListPage />
				
					}
				/>

				<Route
					exact
					path="/lessons/:id"
					element={
						<PrivateRoute>
							<ProjectDetailsPage />
						</PrivateRoute>
					}
				/>

          <Route
            exact
            path="/signup"
            element={
              <AnonRoute>
                <SignupPage />
              </AnonRoute>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <AnonRoute>
                <LoginPage />
              </AnonRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

{
  /* <PrivateRoute>
	<ProjectListPage />
</PrivateRoute> */
}

// exact
// path="/login"
// element={
// 	<AnonRoute>
// 		<LoginPage />
// 	</AnonRoute>
// }
// />
