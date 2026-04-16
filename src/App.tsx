import "./App.css";
import { useRef } from 'react';
import {
  languages,
  projects,
  experience,
  courses,
  education,
  programmingLanguages,
  frameworks, backend, tools, other
} from './data/data-cv.ts';
import type { ProjectBlockProps, ExperienceBlockProps, CourseBlockProps, EducationBlockProps } from './types/types';
import profile from "./assets/profile-photo.png";
import { BsLinkedin, BsGeoAltFill, BsHouseFill, BsDot } from 'react-icons/bs';
import { FaGithub} from "react-icons/fa";


const ProjectBlock = ({ item }: ProjectBlockProps) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h4 className="mb-2">{item.nameProject} - <a href={item.linkProject} className="text-primary mb-0" target="_blank" rel="noopener noreferrer">{item.linkProject}</a></h4>
          <p className="mb-2">{item.desc}</p>
          <ol className="list-unstyled mx-2">
            {item.descList.map((el: { desc: string }, index: number) => (
                <li key={`${el.desc}-${index}`} className="fs-6">
                  <BsDot /> {el.desc}
                </li>
            ))}
          </ol>
          <p><span className="fw-bold mb-0">{item.nameRepo}</span></p>
          {item.linkRepo1 && (<p><a href= {item.linkRepo1} className="text-primary" target="_blank" rel="noopener noreferrer">{item.linkRepo1}</a></p>)}
          {item.linkRepo2 && (<p><a href= {item.linkRepo2} className="text-primary" target="_blank" rel="noopener noreferrer">{item.linkRepo2}</a></p>)}
          {item.linkRepo3 && (<p><a href= {item.linkRepo3} className="text-primary" target="_blank" rel="noopener noreferrer">{item.linkRepo3}</a></p>)}
        </div>
      </div>
    </div>
);

const ExperienceBlock = ({ item }: ExperienceBlockProps) => (
    <div className="mb-4">
      <h4 className="mb-1">{item.role}</h4>
      <b className="mb-0 text-primary">{item.company}</b>
      <p className="text-secondary">{item.period}</p>
      <p className="mt-1 mb-0">{item.desc}</p>
    </div>
);

const CourseBlock = ({ item }: CourseBlockProps) => (
    <div className="mb-4">
      <h4 className="mb-1">{item.name}</h4>
      <b className="mb-0 text-primary">{item.company}</b>
      <p className="text-secondary">{item.period}</p>
      <p className="mt-1 mb-0">{item.desc}</p>
    </div>
);

const EducationBlock = ({ item } : EducationBlockProps) => (
    <div className="mb-4">
      <h4 className="mb-1">{item.degree}</h4>
      <b className="mb-0 text-primary">{item.school}</b>
      <p className="text-secondary">{item.period}</p>
    </div>
);


const App = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  return (
      <div ref={cvRef} className="cv-wrapper d-flex flex-column flex-lg-row">
        <aside className="sidebar text-white">

          <div className="text-center align-content-center align-items-center mb-4">
            <img src={profile} alt="profile" className="profile-photo" />
            <h2 className="mb-1">Agnieszka Makowej</h2>
            <h5><i>Junior Software Developer</i></h5>
          </div>

          <div className="m-4">
            <h3 className="d-flex align-items-center gap-2 mt-5">Profile</h3>
            <hr className="mb-4 mt-0" />

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <BsGeoAltFill /> <span>Poland</span>
            </p>

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <BsHouseFill />
              <a href="https://agnieszka.makowej.pro" className="text-white text-decoration-none">
                agnieszka.makowej.pro
              </a>
            </p>

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <BsLinkedin />
              <a href="https://linkedin.com/in/agnieszkamk" className="text-white text-decoration-none">
                linkedin.com/in/agnieszkamk/
              </a>
            </p>

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <FaGithub />
              <a
                  href="https://github.com/AgisanMk"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                github.com/AgisanMk
              </a>
            </p>
          </div>

          <div className="m-4">
            <h3 className="d-flex align-items-center gap-2 mt-5">Technical Skills</h3>
            <hr className="mb-4 mt-0" />
            <h4>Languages</h4>
            <ul className="list-unstyled mx-2">
              {programmingLanguages.map((s) => (
                  <li key={s.name} className="mb-2 fs-5"><BsDot />{s.name}</li>
              ))}
            </ul>
            <h4>Frameworks & Libraries:</h4>
            <ul className="list-unstyled mx-2">
              {frameworks.map((s) => (
                  <li key={s.name} className="mb-2 fs-5"><BsDot />{s.name}</li>
              ))}
            </ul>
            <h4>Backend & APIs:</h4>
            <ul className="list-unstyled mx-2">
              {backend.map((s) => (
                  <li key={s.name} className="mb-2 fs-5"><BsDot />{s.name}</li>
              ))}
            </ul>
            <h4>Tools & Platforms:</h4>
            <ul className="list-unstyled mx-2">
              {tools.map((s) => (
                  <li key={s.name} className="mb-2 fs-5"><BsDot />{s.name}</li>
              ))}
            </ul>
            <h4>Other:</h4>
            <ul className="list-unstyled mx-2">
              {other.map((s) => (
                  <li key={s.name} className="mb-2 fs-5"><BsDot />{s.name}</li>
              ))}
            </ul>
          </div>

          <div className="m-4">
            <h3 className="d-flex align-items-center gap-2 mt-5">Languages</h3>
            <hr className="mb-4 mt-0" />
            <ul className="list-unstyled mx-2">
              {languages.map((name) => (
                  <li key={name} className="mb-2 fs-5"><BsDot />{name}</li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="content flex-grow-1">
          <section className="text-center">
            <h3>Summary</h3>
            <hr className="mb-4 mt-0" />
            <p className="fs-5 fst-italic">
              Junior Software Developer specializing in React, TypeScript, and REST API integration.
            </p>
            <p className="fs-5 fst-italic">
              Experience in building full-stack web applications using React and ASP.NET Web API. Skilled in developing responsive user interfaces, managing
              application state, and integrating frontend with backend services.
            </p>
            <p className="fs-5 fst-italic">
              Motivated to grow within a development team and continuously expand technical expertise.
            </p>
          </section>

          <section className="mb-5">
            <h3 className="mt-5">Projects</h3>
            <hr className="mb-4 mt-0" />
            {projects.map((p, i) => (
                <ProjectBlock key={i} item={p} />
            ))}
          </section>

          <section className="mb-5">
            <h3 className="mt-5">Work Experience</h3>
            <hr className="mb-4 mt-0" />
            {experience.map((e, i) => (
                <ExperienceBlock key={i} item={e} />
            ))}
          </section>

          <section className="mb-5">
            <h3 className="mt-5">Education</h3>
            <hr className="mb-4 mt-0" />
            {education.map((e, i) => (
                <EducationBlock key={i} item={e} />
            ))}
          </section>

          <section className="mb-5">
            <h3 className="mt-5">Courses & Certifications</h3>
            <hr className="mb-4 mt-0" />
            {courses.map((e, i) => (
                <CourseBlock key={i} item={e} />
            ))}
          </section>

          <section className="mb-5">
            <h4 className="mt-5">GDPR consent</h4>
            <hr className="mb-3 mt-0" />
            <p>I hereby consent to my personal data being processed for the purposes of the recruitment process.</p>
          </section>

        </main>
      </div>
  );
};

export default App;
