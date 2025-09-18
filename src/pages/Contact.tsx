import React, { useMemo, useState } from "react";
import styled from "styled-components";
import {
	FiMail,
	FiPhone,
	FiMapPin,
	FiGithub,
	FiLinkedin,
	FiCopy,
	FiCheck,
} from "react-icons/fi";

const CONTACT = {
	name: "Le Van Dat",
	email: "lvdat1705@gmail.com",
	phone: "0368 142 412",
	location: "Nha Be, Ho Chi Minh City, Vietnam",
	github: "https://github.com/DatLe328",
	linkedin: "https://linkedin.com/in/đạt-lê-b10069319",
};

const Contact: React.FC = () => {
	const [copied, setCopied] = useState<string | null>(null);

	const handleCopy = async (text: string, key: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(key);
			setTimeout(() => setCopied(null), 1200);
		} catch (e) {
			console.error(e);
			alert("Copy failed. Please copy manually.");
		}
	};

	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const isValid = useMemo(() => {
		const okName = form.name.trim().length >= 2;
		const okEmail = /\S+@\S+\.\S+/.test(form.email);
		const okMsg = form.message.trim().length >= 10;
		return okName && okEmail && okMsg;
	}, [form]);

	const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (!isValid) return;

		const subject = encodeURIComponent(
			`[Portfolio] ${form.subject || "New message"} — ${form.name}`
		);
		const body = encodeURIComponent(
			`Hi Dat,\n\n${form.message}\n\n—\nFrom: ${form.name}\nEmail: ${form.email}`
		);
		window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
	};

	return (
		<Section id="contact">
			<Container>
				<Left>
					<Title>Let's work together</Title>
					<Subtitle>
						I’m seeking an entry-level / internship role where I can
						learn fast and contribute
					</Subtitle>

					<InfoList>
						<InfoItem>
							<IconWrap>
								<FiMail />
							</IconWrap>
							<div>
								<Label>Email</Label>
								<Value>
									<a href={`mailto:${CONTACT.email}`}>
										{CONTACT.email}
									</a>
									<CopyBtn
										onClick={() =>
											handleCopy(CONTACT.email, "email")
										}
									>
										{copied === "email" ? (
											<FiCheck />
										) : (
											<FiCopy />
										)}
									</CopyBtn>
								</Value>
							</div>
						</InfoItem>

						<InfoItem>
							<IconWrap>
								<FiPhone />
							</IconWrap>
							<div>
								<Label>Phone</Label>
								<Value>
									<a
										href={`tel:${CONTACT.phone.replace(
											/\s+/g,
											""
										)}`}
									>
										{CONTACT.phone}
									</a>
									<CopyBtn
										onClick={() =>
											handleCopy(CONTACT.phone, "phone")
										}
									>
										{copied === "phone" ? (
											<FiCheck />
										) : (
											<FiCopy />
										)}
									</CopyBtn>
								</Value>
							</div>
						</InfoItem>

						<InfoItem>
							<IconWrap>
								<FiMapPin />
							</IconWrap>
							<div>
								<Label>Location</Label>
								<Value>{CONTACT.location}</Value>
							</div>
						</InfoItem>
					</InfoList>

					<Socials>
						<a
							href={CONTACT.github}
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
						>
							<FiGithub />
							<span>GitHub</span>
						</a>
						<a
							href={CONTACT.linkedin}
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
						>
							<FiLinkedin />
							<span>LinkedIn</span>
						</a>
					</Socials>
				</Left>

				<Right>
					<Card>
						<Form onSubmit={onSubmit} noValidate>
							<Row>
								<Field>
									<label htmlFor="name">Your name</label>
									<input
										id="name"
										type="text"
										placeholder="Nguyen Van A"
										value={form.name}
										onChange={(e) =>
											setForm({
												...form,
												name: e.target.value,
											})
										}
										required
									/>
								</Field>

								<Field>
									<label htmlFor="email">Email</label>
									<input
										id="email"
										type="email"
										placeholder="you@example.com"
										value={form.email}
										onChange={(e) =>
											setForm({
												...form,
												email: e.target.value,
											})
										}
										required
									/>
								</Field>
							</Row>

							<Field>
								<label htmlFor="subject">Subject</label>
								<input
									id="subject"
									type="text"
									placeholder="Internship, collaboration..."
									value={form.subject}
									onChange={(e) =>
										setForm({
											...form,
											subject: e.target.value,
										})
									}
								/>
							</Field>

							<Field>
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									rows={6}
									placeholder="Message..."
									value={form.message}
									onChange={(e) =>
										setForm({
											...form,
											message: e.target.value,
										})
									}
									required
								/>
							</Field>

							<Submit
								disabled={!isValid}
								aria-disabled={!isValid}
							>
								Send email
							</Submit>


						</Form>
					</Card>
				</Right>
			</Container>
		</Section>
	);
};

export default Contact;

/* ================== styled ================== */
const Section = styled.section`
	width: 100%;
	padding: 88px 0;
	background: radial-gradient(
			80% 120% at 10% -10%,
			#f1f3f5 0,
			transparent 60%
		),
		radial-gradient(70% 100% at 110% 10%, #f8f9fa 0, transparent 60%);
`;

const Container = styled.div`
	margin: 0 auto;
	max-width: 1080px;
	padding: 0 20px;
	display: grid;
	grid-template-columns: 1.1fr 1fr;
	gap: 32px;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const Left = styled.div``;

const Title = styled.h2`
	font-size: clamp(24px, 3.4vw, 36px);
	letter-spacing: -0.02em;
	margin: 0 0 8px 0;
`;

const Subtitle = styled.p`
	color: #495057;
	margin: 0 0 24px 0;
	max-width: 560px;
`;

const InfoList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: grid;
	gap: 14px;
`;

const InfoItem = styled.li`
	display: grid;
	grid-template-columns: 44px 1fr;
	align-items: center;
	gap: 12px;
`;

const IconWrap = styled.div`
	width: 44px;
	height: 44px;
	display: grid;
	place-items: center;
	border-radius: 12px;
	background: #e9ecef;
	svg {
		width: 22px;
		height: 22px;
	}
`;

const Label = styled.div`
	font-size: 13px;
	color: #868e96;
`;

const Value = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: 600;
	a {
		color: inherit;
		text-decoration: none;
	}
`;

const CopyBtn = styled.button`
	display: grid;
	place-items: center;
	width: 28px;
	height: 28px;
	border-radius: 8px;
	border: 1px solid #dee2e6;
	background: #fff;
	cursor: pointer;
`;

const Socials = styled.div`
	display: flex;
	gap: 12px;
	margin-top: 18px;
	a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 12px;
		border-radius: 12px;
		background: #e9ecef;
		color: #111;
		text-decoration: none;
	}
	svg {
		width: 18px;
		height: 18px;
	}
`;

const Right = styled.div`
	display: grid;
	align-items: start;
`;

const Card = styled.div`
	background: #fff;
	border: 1px solid #e9ecef;
	border-radius: 16px;
	padding: 18px;
	box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
`;

const Form = styled.form`
	display: grid;
	gap: 12px;
`;

const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
	@media (max-width: 520px) {
		grid-template-columns: 1fr;
	}
`;

const Field = styled.div`
	display: grid;
	gap: 6px;
	label {
		font-size: 14px;
		color: #495057;
	}
	input,
	textarea {
		width: 100%;
		padding: 12px 14px;
		border-radius: 12px;
		border: 1px solid #dee2e6;
		outline: none;
		font-size: 15px;
		background: #f8f9fa;
	}
	input:focus,
	textarea:focus {
		background: #fff;
		border-color: #adb5bd;
	}
`;

const Submit = styled.button`
	height: 44px;
	border-radius: 12px;
	border: none;
	cursor: pointer;
	background: var(--button-right, #111);
	color: var(--textbutton-right, #fff);
	font-weight: 600;
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;