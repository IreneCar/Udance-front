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
import EditProfile from "./components/EditProfile/EditProfile";
import MailForm from "./components/MailForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/lessons" element={<LessonListPage />} />

          <Route exact path="/lessons/:id" element={<LessonDetailsPage />} />

          <Route
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          >
            <Route path="/profile/given" element={<GivLessonsPage />} />
            <Route path="/profile" />
            <Route path="/profile/received" element={<RecLessonsPage />} />
            <Route path="/profile/newLesson" element={<AddLesson />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route exact path="/:id/mail" element={<MailForm />} />
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

// exact
// path="/login"
// element={
// 	<AnonRoute>
// 		<LoginPage />
// 	</AnonRoute>
// }
// />
