import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagenav from "../Nav/Pagenav";
import "./About.scss";
import { gsap } from "gsap";
import file from "../../Resume/ArnavResume2024.pdf";
const navData = [{ work: "Home" }];
const About = () => {
  const doAnimate = () => {
    const tl = gsap.timeline();
    tl.to(".about-overlay", {
      bottom: "100%",
      duration: 0.8,
      ease: "expo.in",
    }).to(".header", {
      y: 0,
      duration: 1,
      ease: "expo.inOut",
    });
  };

  useEffect(() => {
    doAnimate();
  }, []);
  return (
    <div className="about">
      <Pagenav navData={navData} color={"#1a1919"} />
      <div className="about-overlay"></div>
      <div className="about-wrapper">
        <div className="section-left">
          <div className="header-mask">
            <h1 className="header">About</h1>
          </div>
          <div className="description-mask">
            <p className="title">
              I'm Arnav, a Java Backend Developer and DSA enthusiast.
              <br />
            </p>
            <br />
            <p>
              I contributed the migration of the legacy{" "}
              <span className="makebold">
                OmniDocs Enterprise Content Management
              </span>{" "}
              system from a Java{" "}
              <span className="makebold">EJB architecture</span> to a modern{" "}
              <span className="makebold">
                Spring Boot microservices framework @Newgen Software
              </span>
              , leveraging my expertise in the field. I optimized database
              procedures across{" "}
              <span className="makebold">
                PostgreSQL, MSSQL, and Oracle SQL
              </span>{" "}
              to ensure smooth integration with the new microservices
              architecture while adhering to best practices. Additionally, I
              developed and{" "}
              <span className="makebold">
                automated integration test cases{" "}
              </span>
              using <span className="makebold">JUnit</span> to enhance
              interaction accuracy between software components. I also managed
              and addressed various vulnerability scan reports, including{" "}
              <span className="makebold">
                Checkmarx, Ready API, and SCA Dependency Analysis
              </span>
              , throughout all stages of the project lifecycle to maintain
              continuous security compliance.
            </p>
            <br />
            <p>
              Since my college years, I have been actively honing my{" "}
              <span className="makebold">algorithmic problem-solving</span>{" "}
              skills on platforms such as{" "}
              <span className="makebold">
                LeetCode, HackerRank, and Codeforces
              </span>
              . With a deep understanding of{" "}
              <span className="makebold">data structures and algorithms</span>,
              I have tackled a substantial number of challenges, having solved
              over{" "}
              <span className="makebold">
                {" "}
                1,100+ problems on LeetCode, 290+ on Codeforces
              </span>
              , and several more on various other platforms such as HackerRank.
              Notably, I rank in the{" "}
              <span className="makebold">
                {" "}
                top 8% on LeetCode with a rating of 1789
              </span>
              .
            </p>
            <br />
            <p>
              On the backend, I have extensive experience working with{" "}
              <span className="makebold"> Spring Boot</span> to develop{" "}
              <span className="makebold"> REST APIs</span>, crafting robust and
              scalable server-side solutions. Additionally, during my
              internship, I worked on a standalone{" "}
              <span className="makebold"> Spring MVC </span>project where I
              managed the frontend using{" "}
              <span className="makebold"> Thymeleaf </span>and followed the{" "}
              <span className="makebold"> MVC</span> model. This involved
              creating well-structured{" "}
              <span className="makebold"> Controller, Service,</span> and{" "}
              <span className="makebold">DAO layers</span> to ensure a clean
              separation of concerns and maintainable code.
            </p>
            <br />
            <span className="title">
              Sometimes it is the people who no one imagines anything of who do
              the things that no one can imagine.
            </span>
            <br />
            <br />

            <p>
              As a frontend developer, my experience includes extensive working
              with{" "}
              <span className="makebold"> React, the JavaScript library</span>,
              including expertise in{" "}
              <span className="makebold"> hooks, Context API,</span> and{" "}
              <span className="makebold">State management</span> using{" "}
              <span className="makebold">Redux</span>. I am adept at
              implementing sophisticated{" "}
              <span className="makebold"> animations </span> with{" "}
              <span className="makebold">GSAP</span>, enhancing user
              interactions and experience. Additionally, I am proficient in
              HTML, CSS, and advanced CSS techniques using{" "}
              <span className="makebold"> SASS</span>, enabling me to create
              visually compelling and responsive web designs.
            </p>
            <br />
            <p>
              Beyond my development work, I regularly contribute to the
              community by writing discussion articles on problem-solving
              techniques on <span className="makebold"> LeetCode</span> and
              sharing small development projects on
              <span className="makebold"> CodePen</span>, reflecting my
              commitment to both personal growth and knowledge sharing.
            </p>
            <span className="header">
              <br />
              Experience
            </span>
            <p className="exp">
              SDE @Newgen Software :{" "}
              <span className="duration">July(2023)-Present</span>
            </p>
            <p className="exp">
              SDE Intern @HEALTHKART :{" "}
              <span className="duration">Jan(2023) - July(2023)</span>
            </p>
            <p className="exp">Intern @WIPRO TALENTNEXT</p>
            <br />
            <br />
            <br />
            <span className="header">Skills</span>
            <br />
            <br />
            <p className="skills">
              React / Spring Boot / Core Java / Javascript / Thymeleaf / Data
              Structures / Algorithms <br /> / Problem Solving/ MongoDB / SQL /
              SASS / CSS / HTML5/ Spring DATA JPA /Spring Security
              Spring Web / Postgres SQL / Oracle SQL.
            </p>
            <br />
            <br />
          </div>
          <div className="work-button-container">
            <a href={file} className="work-button" download>
              My CV
            </a>
          </div>
          <div className="description-mask">
            <br />
            <br />
            <br />
            <span className="header">KUDOS</span>
            <br />
            <br />
            <p>
              Most of what my portfolio contains are the endeavours that I have
              worked on during this recent year of college.{" "}
              <span className="work-status">
                I am open to exploring new opportunities and working with
                companies
              </span>
              . Feel free to contact me. THANK YOU.
            </p>
            <br />
            <br />
          </div>
          <div className="work-button-container">
            <Link to="/contact" className="work-button">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
