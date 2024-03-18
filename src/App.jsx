import Illistration from "./components/illistration/Illistration";
import Registratioin from "./components/registration/Registratioin";

function App() {
  return (
    <div>
      <div className="flex gap-8 items-center justify-center h-screen">
        <Illistration />
        <Registratioin />
      </div>
    </div>
  );
}

export default App;
