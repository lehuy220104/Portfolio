import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Typed from "typed.js";
import {
	FaFacebookSquare,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";
import imgMe from "../assets/mainPicture.jpg";

const Home: React.FC = () => {
	useEffect(() => {
		const typed = new Typed("#typed", {
			strings: ["Đạt Lê", "Full-stack Developer", "NLP and AI Learner"],
			typeSpeed: 100,
			backSpeed: 100,
			loop: true,
			smartBackspace: true,
			backDelay: 1200,
			showCursor: true,
			cursorChar: "|",
		});
		return () => typed.destroy();
	}, []);

	return (
		<Section id="home" aria-labelledby="home-title">
			<Hero>
				<Left>
					<Avatar role="img" aria-label="Avatar" />
				</Left>

				<Right>
					<Icons aria-label="Social Media">
						<a
							href="https://www.facebook.com/atle.670811"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
						>
							<FaFacebookSquare />
						</a>
						{/* <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a> */}
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<FaGithub />
						</a>
						<a
							href="https://linkedin.com/in/đạt-lê-b10069319"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<FaLinkedin />
						</a>
					</Icons>

					<Intro>
						<Small id="home-title">Hello, I'm</Small>
						<Name>Le Van Dat</Name>
					</Intro>

					<TypedLine>
						<span id="typed" />
					</TypedLine>
					<Buttons>
						<a href="https://www.overleaf.com/read/hwyjhsndpbgy#873b50" target="_blank">
							<Btn variant="outline">See my CV</Btn>
						</a>
						<a href="#contact">
							<Btn variant="primary">Contact Info</Btn>
						</a>
					</Buttons>
				</Right>
			</Hero>
		</Section>
	);
};

export default Home;

/* ================= styled ================ */

const Section = styled.section`
	scroll-margin-top: 80px;
	min-height: 92vh;
	display: grid;
	place-items: center;
`;

const Hero = styled.div`
	display: grid;
	grid-template-columns: 360px minmax(280px, 560px);
	gap: 32px;
	align-items: center;
	margin-top: -40px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		margin-top: 0;
	}
`;

const Left = styled.div`
	display: grid;
	place-items: center;

	@media (max-width: 420px) {
		display: none;
	}
`;

const floaty = keyframes`
  0% { transform: translateY(-6px); }
  50% { transform: translateY(6px); }
  100% { transform: translateY(-6px); }
`;

const Avatar = styled.div`
	width: 320px;
	height: 320px;
	border-radius: 50%;
	background-image: url(${imgMe});
	background-size: cover;
	background-position: 58% 50%;
	border: 1px solid rgba(109, 108, 108, 0.5);
	animation: ${floaty} 6s ease-in-out infinite;

	@media (min-width: 360px) and (max-width: 480px) {
		width: 260px;
		height: 260px;
	}
`;

const Right = styled.div`
	display: grid;
	justify-items: center;
	text-align: center;
	gap: 10px;
`;

const Icons = styled.div`
	display: flex;
	gap: 12px;

	a {
		line-height: 0;
	}
	svg {
		width: 28px;
		height: 28px;
		/* đổi màu ở đây nếu muốn */
		color: var(--icon-color, #111);
		filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.15));
		transition: transform 0.2s ease;
	}
	a:hover svg {
		transform: translateY(-2px);
	}
`;

const Intro = styled.div`
	display: grid;
	gap: 10px;
`;
const Small = styled.h2`
	font-size: 15px;
	font-weight: 600;
	opacity: 0.9;
`;
const Name = styled.h1`
	font-size: clamp(28px, 5vw, 36px);
	font-weight: 700;
	margin: 0;
`;
const TypedLine = styled.div`
	font-size: 20px;
	min-height: 28px;
`;


const Buttons = styled.div`
	display: flex;
	gap: 14px;
	margin-top: 12px;
	@media (max-width: 420px) {
		flex-direction: column;
		width: 100%;
		> a {
			width: 100%;
		}
	}
`;

const Btn = styled.button<{ variant?: "primary" | "outline" }>`
	width: 140px;
	height: 46px;
	border-radius: 24px;
	cursor: pointer;
	font-size: var(--fontSize-button, 16px);
	border: ${({ variant }) =>
		variant === "outline" ? "2px solid #111" : "none"};
	background: ${({ variant }) =>
		variant === "primary" ? "var(--button-right, #111)" : "#e9ecef"};
	color: ${({ variant }) =>
		variant === "primary" ? "var(--textbutton-right, #fff)" : "#111"};
`;
