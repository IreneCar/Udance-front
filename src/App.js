import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LessonListPage from "./pages/LessonListPage";
import LessonDetailsPage from "./pages/LessonDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import RecLessonsPage from "./pages/RecLessonsPage";
import GivLessonsPage from "./pages/GivLessonsPage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AddLesson from "./components/AddLesson";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/lessons" element={<LessonListPage />} />

          <Route
            exact
            path="/lessons/:id"
            element={
              <PrivateRoute>
                <LessonDetailsPage />
              </PrivateRoute>
            }
          />
          {/* <Route
            exact
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path="/profile/given"
            element={
              <PrivateRoute>
                <GivLessonsPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/profile/received"
            element={
              <PrivateRoute>
                <RecLessonsPage />
              </PrivateRoute>
            }
          /> */}

          <Route element={<ProfilePage />}>
            <Route path="/profile/given" element={<GivLessonsPage />} />
            <Route path="/profile" element={<AddLesson />} />
            <Route path="/profile/received" element={<RecLessonsPage />} />
          </Route>

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
