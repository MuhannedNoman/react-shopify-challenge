import MovieList from "./components/MovieList";
import NominateProvider from "./components/Store/nominateStore";
function App() {
  return (
    <div>
      <NominateProvider>
        <MovieList />
      </NominateProvider>
    </div>
  );
}

export default App;
