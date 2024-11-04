import { useState } from "react";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [projectsState, setProjectsState] = useState({
    currentAction: "",
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddProject={handleAddProject} />
      {projectsState.selectedProjectId === null && <AddProject />}
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onAddProject={handleAddProject} />
      )}

      {/* <ProjectCard /> */}
    </main>
  );
}

export default App;
