import React from "react";
import { Container } from "react-bootstrap";
import TeamCard from "components/team-card";

const teamImage1 = "/images/team/team-1-1.jpg";
const teamImage2 = "/images/team/team-1-2.jpg";
const teamImage3 = "/images/team/team-1-3.jpg";
const teamImage4 = "/images/team/team-1-4.jpg";
const teamImage5 = "/images/team/team-1-5.jpg";
const teamImage6 = "/images/team/team-1-6.jpg";

const TEAM_DATA = [
  {
    extraClass: "content-bg-1",
    name: "Jayden Haynes",
    designation: "Student",
    image: teamImage1,
  },
  {
    extraClass: "content-bg-2",
    name: "Jean Webster",
    designation: "Student",
    image: teamImage2,
  },
  {
    extraClass: "content-bg-3",
    name: "Lilly Taylor",
    designation: "Student",
    image: teamImage3,
  },
  {
    extraClass: "content-bg-4",
    name: "Jayden Knight",
    designation: "Student",
    image: teamImage4,
  },
  {
    extraClass: "content-bg-5",
    name: "Leroy Palmer",
    designation: "Student",
    image: teamImage5,
  },
  {
    extraClass: "content-bg-6",
    name: "Jim Vargas",
    designation: "Student",
    image: teamImage6,
  },
];

const TeamPage = () => {
  return (
    <section className="team-page pt-120 pb-120">
      <Container>
        <div className="team-3-col">
          {TEAM_DATA.map(({ extraClass, name, designation, image }, index) => (
            <TeamCard
              key={index}
              extraClass={extraClass}
              name={name}
              designation={designation}
              image={image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamPage;
