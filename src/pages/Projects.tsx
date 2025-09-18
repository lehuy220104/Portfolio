import React, { useState } from "react";
import styled from "styled-components";
import imgQLST from "../assets/qlst.png";
// import imgTest from "../assets/test.jpg";
import imgCourse from "../assets/courseLogin.jpg"
import imgClinic from "../assets/clinicManagement.png"
import imgHolder from "../assets/placeHolder.jpg"

type Tech = { nameTech: string };


type Project = {
	img: string;
	name: string;
	des: string;
	tech: Tech[];
	linkLive?: string;
	linkGit?: string;
	member: string;
	role: string;
	result: string;
};

const PROJECTS: Project[] = [
	{
		img: imgHolder,
		name: "AI Powered Recruitment Platform",
		des: "Solo-built web app that matches recruiters and candidates via a two-stage search: extract/normalize skills → retrieve with BM25 → re-rank using SBERT similarity + LightGBM.",
		tech: [
			{ nameTech: "Django REST" },
			{ nameTech: "Sentence-Transformers (SBERT)" },
			{ nameTech: "React" },
			{ nameTech: "LightGBM (learning-to-rank)" },
			{ nameTech: "Elasticsearch (BM25)" },
			{ nameTech: "Swagger" },
			{ nameTech: "Git" },
		],
		linkLive: "",
		linkGit: "https://github.com/DatLe328/AI-Powered-Recruitment-Platform",
		member: "2",
		role: "End-to-end owner—data processing, model training, API/backend, simple UI, and deployment.",
		result: "Working prototype that outperforms a BM25-only baseline in offline tests; reproducible ML pipeline and dockerized services.",
	},
	{
		img: imgCourse,
		name: "Course Management Mobile App",
		des: "Cross-platform mobile app to manage online courses with scheduling and secure user authentication. I led the backend with Django REST, integrated OAuth 2.0, and connected the React Native frontend. Backend deployed on PythonAnywhere; we ran sprints and code reviews.",
		tech: [
			{ nameTech: "Django REST" },
			{ nameTech: "React Native" },
			{ nameTech: "MySQL" },
			{ nameTech: "OAuth 2.0" },
			{ nameTech: "Swagger" },
			{ nameTech: "Git" },
		],
		linkLive: "https://garotif3.pythonanywhere.com/",
		linkGit: "https://github.com/DatLe328/courseapp",
		member: "2",
		role: "Backend lead + mobile integration. Designed REST APIs, auth, and deployment.",
		result: "Deepened skills in Django REST, OAuth 2.0, API documentation with Swagger, CI/CD basics, and coordinating sprints with code reviews.",
	},
	{
		img: imgClinic,
		name: "Clinic Management Web App",
		des: "Web system for managing patient appointments, medical records, and admin tasks. Designed the MySQL schema, implemented real-time API endpoints with Flask, and built an admin panel for efficient clinic operations.",
		tech: [
			{ nameTech: "Flask" },
			{ nameTech: "MySQL" },
			{ nameTech: "HTML" },
			{ nameTech: "CSS" },
			{ nameTech: "Bootstrap" },
			{ nameTech: "Cloudinary" },
			{ nameTech: "Git" },
		],
		linkLive: "https://datlevipprono1.pythonanywhere.com/",
		linkGit: "https://github.com/DatLe328/ClinicManagement",
		member: "2",
		role: "Full-stack with focus on backend and database design; built admin UI.",
		result: "Improved database design and Flask API development; implemented basic real-time endpoints and admin workflows.",
	},
	{
		img: imgQLST,
		name: "Supermarket Internal Management System",
		des: "A desktop application for supermarket back-office operations: sign-in & role-based access control; shift-based timekeeping; management of products, warehouse inventory, lots/batches, invoices, and purchase orders; payroll calculation and statistical reporting.",
		tech: [
			{ nameTech: "C#/.NET" },
			{ nameTech: "WinForms" },
			{ nameTech: "SQL Server" },
			{ nameTech: "ADO.NET" },
		],
		linkLive: "",
		linkGit: "https://github.com/DatLe328/Quan-ly-noi-vu-sieu-thi.git",
		member: "2",
		role: "Analysis & development: designed the ERD/RD; built modules for login/authorization, warehouse–lots–invoices, timekeeping–payroll, and reporting.",
		result: "Completed the core subsystems; centralized data; role-based permissions.",
	},
];

const Projects: React.FC = () => {
	const [flipped, setFlipped] = useState<boolean[]>([]);

	const toggle = (i: number) =>
		setFlipped((prev) => {
			const next = [...prev];
			next[i] = !next[i];
			return next;
		});

	return (
		<Section id="projects" aria-labelledby="projects-title">
			<Title id="projects-title">Featured Projects</Title>
			<Subtitle>Few project featured by me</Subtitle>
			<Line aria-hidden="true" />

			<Grid className="project-gallery">
				{PROJECTS.map((p, i) => (
					<Card key={p.name} data-flipped={!!flipped[i]}>
						<Face className="front">
							<Thumb src={p.img} alt={p.name} loading="lazy" />
							<Content>
								<h3>{p.name}</h3>
							</Content>
							<Buttons>
								{p.linkGit && (
									<a
										href={p.linkGit}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Btn variant="outline">Github</Btn>
									</a>
								)}
								<Btn onClick={() => toggle(i)}>Description</Btn>
							</Buttons>
						</Face>

						<Face className="back">
							<Info>
								<p>
									<b>Description:</b> {p.des}
								</p>
								<p>
									<b>Member:</b> {p.member}
								</p>
								<p>
									<b>My role:</b> {p.role}
								</p>
								<p>
									<b>Result:</b> {p.result}
								</p>
							</Info>

							<TechList aria-label="Technologies">
								{p.tech.map((t, k) => (
									<li key={k}>
										<Dot /> <span>{t.nameTech}</span>
									</li>
								))}
							</TechList>

							<Buttons>
								{p.linkLive ? (
									<a
										href={p.linkLive}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Btn variant="outline">Live</Btn>
									</a>
								) : (
									<Btn variant="ghost" disabled>
										Live
									</Btn>
								)}
								<Btn onClick={() => toggle(i)}>Back</Btn>
							</Buttons>
						</Face>
					</Card>
				))}
			</Grid>
		</Section>
	);
};

export default Projects;

/* ==================== styled ==================== */

const Section = styled.section`
	scroll-margin-top: 80px;
	padding: 56px 0 24px;
`;

const Title = styled.h2`
	display: flex;
	justify-content: center;
	font-size: 35px;
	font-weight: 700;
`;

const Subtitle = styled.p`
	display: flex;
	justify-content: center;
	font-size: 16px;
	font-weight: 500;
	margin-top: 16px;
`;

const Line = styled.div`
	width: 120px;
	height: 3px;
	margin: 16px auto 0;
	background: var(--color-dot, #6c63ff);
	border-radius: 999px;
`;

const Grid = styled.div`
	--card-w: clamp(280px, 31vw, 380px);
	--card-h: 580px;

	width: min(1100px, 92vw);
	margin: 28px auto 0;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(var(--card-w), 1fr));
	gap: 22px;
`;

const Card = styled.article`
	position: relative;
	height: var(--card-h);
	border-radius: 20px;
	box-shadow: 0 0 20px -2px #cacaca;
	border: 1px solid #e9ecef;
	perspective: 1000px;
	display: flex;
	flex-direction: column;

	.front,
	.back {
		position: absolute;
		inset: 0;
		padding: 16px;
		display: flex;
		flex-direction: column;
		border-radius: inherit;
		background: #fff;
		backface-visibility: hidden;
		height: 100%;
	}

	.back {
		transform: rotateY(180deg);
	}

	&[data-flipped="true"] {
		transform: rotateY(180deg);
	}

	transition: transform 0.6s;
	transform-style: preserve-3d;
`;

const Face = styled.div``;

const Thumb = styled.img`
	width: 100%;
	height: 300px;
	border-radius: 16px;
	object-fit: cover;
	transition: transform 0.5s ease-in-out;
	&:hover {
		transform: scale(1.06);
		transform-origin: center;
	}
`;

const Content = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #111;
	h3 {
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		margin: 0;
	}
`;

const Info = styled.div`
	display: grid;
	gap: 8px;
	width: 100%;
	font-size: 16px;
`;

const TechList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	gap: 6px;
	li {
		display: flex;
		align-items: center;
	}
	span {
		margin-left: 10px;
		font-size: 16px;
	}
`;

const Dot = styled.span`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #000;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;
	margin-top: auto;
	margin-bottom: 0;

	a {
		text-decoration: none;
	}
`;

const Btn = styled.button<{ variant?: "outline" | "ghost" }>`
	width: 120px;
	height: 45px;
	border-radius: 25px;
	cursor: pointer;
	font-size: var(--fontSize-button, 15px);
	border: ${({ variant }) =>
		variant === "outline" ? "2px solid #000" : "none"};
	background: ${({ variant }) =>
		variant === "ghost" ? "#f1f3f5" : "var(--button-right, #6c63ff)"};
	color: ${({ variant }) =>
		variant === "outline" ? "#000" : "var(--textbutton-right, #fff)"};
	opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
