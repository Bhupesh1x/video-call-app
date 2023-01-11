import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./app/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        addUser({ displayName: user?.displayName, photoUrl: user?.photoURL })
      );
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomID" element={<Room />} />
    </Routes>
  );
}

export default App;
