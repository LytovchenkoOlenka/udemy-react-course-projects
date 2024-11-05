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

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {projectsState.selectedProjectId === null && (
        <AddProject onAdd={handleAddProject} />
      )}
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onAddProject={handleStartAddProject} />
      )}

      {/* <ProjectCard /> */}
    </main>
  );
}

export default App;
