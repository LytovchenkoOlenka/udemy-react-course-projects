import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";
import DefaultMain from "./components/DefaultMain";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <SideBar />
      <AddProject />
      {/* <DefaultMain /> */}
    </main>
  );
}

export default App;
