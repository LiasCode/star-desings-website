import Header from "../../components/header/Header";
import ProjectCard from "../../components/projectCard/ProjectCard";

import "./Projects.css";

export default function Projects() {
  return (
    <>
      <Header />

      <div id="projects-container">
        <h2>Todos Mis Projectos</h2>

        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
