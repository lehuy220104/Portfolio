import styled from "styled-components";
import { useState } from "react";
import imgMe from "../assets/mainPicture.jpg";

function AboutMe() {
	const [highlightText] = useState([
		{ context: "Front-end with React & TypeScript" },
		{ context: "Back-end with Python (Django) & Java" },
		{ context: "Designing and documenting RESTful APIs" },
		{ context: "CI/CD and Docker" },
		{ context: "Mobile apps with React Native" },
		{
			context:
				"AI/NLP",
		},
	]);

	return (
		<>
			<section id="aboutme" className="element-wrapper">
				<SAboutMe>About Me</SAboutMe>
				<WhyChooseMe>Why Choose Me?</WhyChooseMe>
				<div id="line"></div>
				<IntroduceBookWrapper>
					<IntroduceBookLeft
						style={{ backgroundImage: `url(${imgMe})` }}
					></IntroduceBookLeft>
					<IntroduceBookRight>
						<ItemWrapper>
							<TextRight>
								I’m <b>Le Van Dat</b>, a third-year{" "}
								<b>Computer Science</b> student at
								<b> Ho Chi Minh City Open University</b>. I
								enjoy turning ideas into simple, reliable
								products and can take a feature from planning to
								launch. I’m seeking an{" "}
								<b>entry-level / internship</b> role where I can
								learn fast and contribute. I’ve completed the
								core coursework and built several project
								prototypes. Roles of interest:{" "}
								<b>Full-Stack Developer</b>,{" "}
								<b>Software Engineer</b>.
							</TextRight>

							<TextRight>
								2023–2025: Member of the university programming
								team for the
								<b>
									{" "}
									Vietnam National Olympiad in Informatics
								</b>{" "}
								— strengthening my algorithmic thinking and
								problem-solving skills.
							</TextRight>

							<TextRight>
								I’m currently building an <b>AI/NLP</b> capstone
								— an assistant that helps connect employers with
								candidates by analyzing job descriptions and
								resumes (skills extraction, semantic matching
								with embeddings, and ranking).
							</TextRight>

							<FewHighlightWrapper>
								<FewHighlight>
									Here are a few highlights
								</FewHighlight>
								<HightLight>
									{highlightText.map((text, index) => {
										return (
											<HightLightWrapperItem key={index}>
												<HightLightDot></HightLightDot>
												<HightLightText>
													{text.context}
												</HightLightText>
											</HightLightWrapperItem>
										);
									})}
								</HightLight>
							</FewHighlightWrapper>
							<ButtonWrapper>
								<a
									href="https://www.overleaf.com/read/hwyjhsndpbgy#873b50"
									target="_blank"
								>
									<ButtonLeft>See my CV</ButtonLeft>
								</a>
								<a
									href="https://github.com/DatLe328"
									target="_blank"
								>
									<ButtonRight>View my Github</ButtonRight>
								</a>
							</ButtonWrapper>
						</ItemWrapper>
					</IntroduceBookRight>
				</IntroduceBookWrapper>
			</section>
		</>
	);
}

const SAboutMe = styled.h2`
	display: flex;
	font-size: 35px;
	font-weight: bold;
	justify-content: center;
`;
const WhyChooseMe = styled.h2`
	display: flex;
	justify-content: center;
	font-size: 16px;
	font-weight: 500;
	margin-top: 20px;
`;
const IntroduceBookWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 60%;
	margin: 0 auto;
	margin-top: 20px;
	min-height: 800px;

	box-shadow: 0 0 20px -2px #1f2235;

	@media (min-width: 1200px) and (max-width: 1600px) {
		width: 80%;
		min-height: 870px;
	}
	@media (min-width: 600px) and (max-width: 1200px) {
		width: 80%;
		min-height: 870px;
	}
`;

const IntroduceBookLeft = styled.div`
	background-color: blue;
	flex: 1;
	@media (max-width: 390px) {
		display: none;
	}

	background-position-x: 50%;
	background-position-y: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	transition: 0.3s ease-in-out;
	&:hover {
		transform: scale(1.05);
	}
`;

const IntroduceBookRight = styled.div`
	flex: 1;
`;

const TextRight = styled.h2`
	font-size: var(--fontSize-normal);
	font-weight: 500;
	line-height: 35px;
`;

const ButtonWrapper = styled.div`
	justify-self: flex-end;
	display: flex;
	justify-content: space-around;

	button {
		width: 100%;
		padding-left: 25px;
		padding-right: 25px;
		border-radius: 25px;
		outline: none;
		border: none;
		font-size: var(--fontSize-button);
		height: 50px;
	}

	@media (max-width: 390px) {
		flex-direction: column;
		button {
			margin-top: 20px;
			padding: 0;
		}
	}
`;

const ButtonLeft = styled.button`
	width: 100%;
`;

const ButtonRight = styled.button`
	background-color: #211f1f;
	color: #e3ffff;
`;

const ItemWrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	margin-top: 20px;
`;

const FewHighlightWrapper = styled.div`
	margin-top: 18%;
	margin-bottom: 10%;
`;

const FewHighlight = styled.div``;

const HightLight = styled.div``;

const HightLightWrapperItem = styled.div`
	display: flex;
	align-items: center;
`;

const HightLightDot = styled.div`
	border-radius: 50%;
	margin-right: 10px;
	height: 10px;
	width: 10px;
	background-color: var(--color-dot, #154d71);
`;

const HightLightText = styled.h2`
	font-size: var(--fontSize-normal);
`;

export default AboutMe;
