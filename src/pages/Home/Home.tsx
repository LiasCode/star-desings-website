import Header from "../../components/header/Header";
import ProjectCard from "../../components/projectCard/ProjectCard";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />

      <section id="presentacion">
        <h2>Bienvenidos a mi sitio web</h2>

        <ul>
          <li>Diseño portadas</li>
          <li>Programo</li>
          <li>Escribo novelas</li>
        </ul>
      </section>

      <div id="projects-container">
        <h2>Algunos de mis Projectos ⤵ </h2>
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
