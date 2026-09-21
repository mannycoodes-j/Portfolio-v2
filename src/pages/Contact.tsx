import React, { ReactElement, useState } from "react";
import { BiEnvelope, BiLinkExternal } from "react-icons/bi";
import Container from "../components/sections/Container";
import ScrollContainers from "../components/sections/ScrollContainers";
import DisplayContainer from "../components/UI/displayContainers";
import Title from "../components/UI/Title";
import { Github, Linkedin } from "../components/Icons";

type socialProps = {
  href: string;
  icon: ReactElement;
  name: string;
};

const socials: socialProps[] = [
  {
    href: "https://www.linkedin.com/in/mannycodes-j/",
    icon: <Linkedin fill="#000" size={27} />,
    name: "LinkedIn",
  },
  {
    href: "https://github.com/mannycodes-j",
    icon: <Github fill="#000" size={27} />,
    name: "GitHub",
  },
  {
    href: "https://mannycodes-portfolio.vercel.app/",
    icon: <BiLinkExternal />,
    name: "Mannycodes",
  },
  {
    href: "mailto:feranmioladele04@gmail.com",
    icon: <BiEnvelope />,
    name: "E-Mail",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:feranmioladele04@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Container nextPageLink="/" nextPageText="Back to home">
      <>
        <Title
          text="Contact me."
          topOfPage={true}
          subtitle="Have a product, role, or collaboration in mind? Reach out 👋"
        />
        <ScrollContainers width={100} displayWidgets={false}>
          {socials.map((social) => (
            <DisplayContainer key={social.name} {...social} />
          ))}
        </ScrollContainers>
        <form onSubmit={submit} className="my-8 w-full max-w-[600px]">
          <input
            type="text"
            className="w-full p-3 bg-white rounded-[10px] placeholder:text-mainDarkColor text-mainDarkColor outline-none border-2 focus:border-mainDarkColor mb-6"
            placeholder="Your name..."
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="email"
            className="w-full p-3 bg-white rounded-[10px] placeholder:text-mainDarkColor text-mainDarkColor outline-none border-2 focus:border-mainDarkColor mb-6"
            placeholder="Your email..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <textarea
            className="w-full p-3 bg-white rounded-[10px] placeholder:text-mainDarkColor text-mainDarkColor outline-none border-2 focus:border-mainDarkColor mb-6 h-[200px] resize-none"
            placeholder="Tell me about your message or project..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-mainDarkColor text-white active:scale-[0.97] rounded-[10px]"
          >
            Send message
          </button>
        </form>
      </>
    </Container>
  );
};

export default Contact;
