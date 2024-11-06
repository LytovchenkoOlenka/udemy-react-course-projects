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

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleProjectSelect(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
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
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  console.log(projectsState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleProjectSelect}
      />
      {projectsState.selectedProjectId === null && (
        <AddProject
          onAdd={handleAddProject}
          onCancel={handleCancelAddProject}
        />
      )}
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onAddProject={handleStartAddProject} />
      )}
      {projectsState.selectedProjectId && (
        <ProjectCard project={selectedProject} />
      )}

      {/**/}
    </main>
  );
}

export default App;
