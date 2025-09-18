import styled from "styled-components";
import logo from "../assets/logo.png";
import logoVaip from "../assets/logoVaip.jpg";

type Award = {
	id: number;
	logo: string;
	name: string;
	where: string;
	date: string;
	link?: string;
};

const AWARDS: Award[] = [
	
];

export default function Achievement() {
	return (
		<Section id="achievement">
			<Wrap>
				<H2>Achievements</H2>
				<Grid>
					{AWARDS.map((a) => (
						<Item key={a.id}>
							<img src={a.logo} alt="" />
							<div>
								<strong>{a.name}</strong>
								<Meta>
									<span>{a.where}</span> ·{" "}
									<span>{a.date}</span>
									{a.link && (
										<>
											{" "}
											·{" "}
											<a
												href={a.link}
												target="_blank"
												rel="noreferrer"
											>
												Post
											</a>
										</>
									)}
								</Meta>
							</div>
						</Item>
					))}
				</Grid>
			</Wrap>
		</Section>
	);
}

const Section = styled.section`
	padding: 88px 0;
`;
const Wrap = styled.div`
	max-width: 1080px;
	margin: 0 auto;
	padding: 0 20px;
`;
const H2 = styled.h2`
	font-size: clamp(24px, 3.4vw, 36px);
	margin-bottom: 14px;
`;
const Grid = styled.div`
	display: grid;
	gap: 12px;
`;
const Item = styled.div`
	display: grid;
	grid-template-columns: 56px 1fr;
	gap: 12px;
	align-items: center;
	padding: 12px;
	border: 1px solid #e9ecef;
	border-radius: 12px;
	background: #fff;
	img {
		width: 56px;
		height: 56px;
		object-fit: cover;
		border-radius: 12px;
	}
`;
const Meta = styled.div`
	color: #495057;
	font-size: 14px;
	a {
		color: #111;
	}
`;
