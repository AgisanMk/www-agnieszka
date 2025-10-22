import "./App.css";
import { useRef } from 'react';
import {skills, languages, projects, experience, courses, education} from './data/data-cv.ts';
import type { TechStackListItemProps, Technology, ProjectBlockProps, ExperienceBlockProps, CourseBlockProps, EducationBlockProps } from './types/types';
import profile from "./assets/profile-photo.png";
import { BsEnvelopeFill, BsTelephoneFill, BsLinkedin, BsGeoAltFill, BsHouseFill, BsDot, BsDash } from 'react-icons/bs';
import { FaRegCalendarAlt, FaGithub, FaRegStar, FaStar } from "react-icons/fa";

export const TechStackListItem = ({ name, level }: TechStackListItemProps) => {
  const totalStars = 5;
  return (
      <li className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center gap-1">
          <span className="fs-5">{name}</span>
        </div>
        <div> {[...Array(totalStars)].map((_, i) =>
            i < level ? (
                <FaStar key={i} color="#e5a948" className="fs-4"/>
            ) : (
                <FaRegStar key={i} color="gray" className="fs-4"/>
            )
        )}
        </div>
      </li>
    );
};

const ProjectBlock = ({ item }: ProjectBlockProps) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="mb-2">{item.nameProject} - <a href={item.linkProject} className="text-primary mb-0">{item.linkProject}</a></h4>
            </div>
            <div className="text-secondary">
              <p>{item.period}<FaRegCalendarAlt className="ms-3 mb-2"/></p>
            </div>
          </div>
          <p className="mb-2">{item.desc}</p>
          <b className="mb-1">{item.nameList}</b>
          <ul className="list-unstyled mx-2">
            {item.list.map((tech: Technology) => (
                <li key={tech.name} className="fs-6" >
                  <BsDash /> <b>{tech.name}</b>: {tech.desc}
                </li>
            ))}
          </ul>
          <p><span className="fw-bold mb-0">{item.nameRepo}</span><a href={item.linkRepo} className="text-primary">{item.linkRepo}</a></p>

        </div>
      </div>
    </div>
);

const ExperienceBlock = ({ item }: ExperienceBlockProps) => (
    <div className="mb-4">
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="mb-1">{item.role}</h4>
          <b className="mb-0 text-primary">{item.company}</b>
        </div>
        <div className="text-end">
          <p className="text-secondary">{item.period}<FaRegCalendarAlt className="ms-3 mb-2"/></p>
        </div>
      </div>
      <p className="mt-1 mb-0">{item.desc}</p>
    </div>
);

const CourseBlock = ({ item }: CourseBlockProps) => (
    <div className="mb-4">
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="mb-1">{item.name}</h4>
          <b className="mb-0 text-primary">{item.company}</b>
        </div>
        <div className="text-end">
          <p className="text-secondary">{item.period}<FaRegCalendarAlt className="ms-3 mb-2"/></p>
        </div>
      </div>
      <p className="mt-1 mb-0">{item.desc}</p>
    </div>
);

const EducationBlock = ({ item } : EducationBlockProps) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="mb-1">{item.degree}</h4>
          <b className="mb-0 text-primary">{item.school}</b>
        </div>
        <div className="text-end">
          <p className="text-secondary">{item.period}<FaRegCalendarAlt className="ms-3 mb-2"/></p>
        </div>
      </div>
    </div>
);


const App = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  return (
      <div ref={cvRef} className="cv-wrapper d-flex flex-column flex-lg-row">
        <aside className="sidebar p-4 text-white">

          <div className="text-center align-content-center align-items-center mb-4">
            <img src={profile} alt="profile" className="profile-photo" />
            <h2 className="mb-1">Agnieszka Makowej</h2>
            <h5><i>Junior Frontend Developer</i></h5>
          </div>

          <div className="m-4">
            <h3 className="d-flex align-items-center gap-2 mt-5">Profile</h3>
            <hr className="mb-4 mt-0" />

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <BsGeoAltFill /> <span>Tarnów, Poland</span>
            </p>

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <BsTelephoneFill /> <span>+48 600 147 188</span>
            </p>

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <BsEnvelopeFill /> <span>agnieszka@makowej.pro</span>
            </p>

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <BsHouseFill />
              <a href="https://agnieszk.amakowej.pro" className="text-white text-decoration-none">
                agnieszka.makowej.pro
              </a>
            </p>

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <BsLinkedin />
              <a href="https://linkedin.com/in/agnieskamk" className="text-white text-decoration-none">
                linkedin.com/in/agnieszkamk
              </a>
            </p>

            <p className="mb-1 d-flex align-items-center mx-3 gap-3">
              <FaGithub />
              <a
                  href="https://github.com/agnieszkamk"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                github.com/agnieszkamk
              </a>
            </p>
          </div>

          <div className="m-4">
            <h3 className="d-flex align-items-center gap-2 mt-5">Tech Stack</h3>
            <hr className="mb-4 mt-0" />
            <ul className="list-unstyled mx-2">
              {skills.map((s) => (
                  <TechStackListItem key={s.name} name={s.name} level={s.level} />
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

        <main className="content flex-grow-1 p-5">
          <section className="fs-5 fst-italic text-center">
            <p>
              I'm a beginner frontend developer motivated to learn and develop through hands-on projects. I&nbsp;work with React, TypeScript, and Vite, and I'm also learning about backend integration based on ASP.NET Web API and PHP.
            </p>
            <p>
              I'm looking for my first commercial role to grow within a team, gradually expand my skills and create real value for users.
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
            <h3 className="mt-5">Experience</h3>
            <hr className="mb-4 mt-0" />
            {experience.map((e, i) => (
                <ExperienceBlock key={i} item={e} />
            ))}
          </section>

          <section className="mb-5">
            <h3 className="mt-5">Courses</h3>
            <hr className="mb-4 mt-0" />
            {courses.map((e, i) => (
                <CourseBlock key={i} item={e} />
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
            <h4 className="mt-5">GDPR consent</h4>
            <hr className="mb-3 mt-0" />
            <p>I hereby consent to my personal data being processed for the purposes of the recruitment process.</p>
          </section>

        </main>
      </div>
  );
};

export default App;
