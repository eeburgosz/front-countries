import { useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";
import { useDispatch } from "react-redux";
import { getCountries } from "./redux-toolkit/thunks";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
