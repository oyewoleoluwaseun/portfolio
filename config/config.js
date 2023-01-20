
import profile from './profile.png';
import {faAppStore, faGithub, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Oluwaseun",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Experiences",
			link: "#experiences",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Oluwaseun",
	description: "A Software Developer creating mobile apps, video games and static websites.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1DfdBJNThRUfjX2QhHaLGAC1OHGUbI4ga/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"My name is Oyewole Oluwaseun Gabriel. I am a graduate of 2016 from Obafemi Awolowo University, Ile-Ife, Nigeria.",
		"I am a meticulous, dedicated and a proactive person who loves to explore new technologies and passionate about learning. An optimistic person who is always energetic and hungry in learning new skills with eagerness to succeed and enthusiasm to compete.",
		"I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of Technology."
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create Andriod apps using Andriod Studio.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive static websites using Angular, Reactjs, Nodejs, Express and MongoDB.",
			icons: null,
		},
		{
			title: "Video Game Development",
			description: "I create pixel art video games using Godot Game Engine.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Lawyers' Guide",
			description: "An app to assist Practicing Lawyers, Law School Students and Undergraduate Law Students have easy access to Legal Resources.",
			icons: [
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.pinnacle.lawyersguide",
				},
			]
		},
		{
			title: "Nigeria Penal Code Act",
			description: "An easy to use app version of the Nigeria Penal Code Act.",
			icons: [
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.lumosstudio.penalcodeact",
				},
			]
		},
		{
			title: "Electoral Act 2022",
			description: "A highly accessible, easy to use app version of the Nigerian Electoral Act, 2022.",
			icons: [
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.lumosstudio.electoralact2022",
				},
			]
		},
		{
			title: "CAMA 2020",
			description: "An highly accessible app version of the Companies and Allied Matters Act, 2020.",
			icons: [
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.lumosstudio.cama",
				},
			]
		},
		{
			title: "The Adventures of Moremi",
			description: "A 2D pixel art Action Platformer video game about an African Female Warrior (Still in development).",
			icons: [
				{
					icon: faGooglePlay,
					link: "",
				},
			]
		},
	],
}


export const experiences = {
	title: "Experiences",
	cards: [
		{
			title: "Software Developer - Lumos Studio Integrated Ltd | June 2020 – Present",
			description: "I create Andriod apps using Andriod Studio.",
			icons: null,
		},
	],
}

export const contact = {
	title: "Contact Me",
	description: "Coffee Chat! Please do not hesitate to contact me. Alternatively, feel free to reach out directly by email at oyewoleseun22@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:oyewoleseun22@gmail.com",
			isPrimary: true,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/oyewole-oluwaseun-08611694/",
			isPrimary: false,
		},
	],
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Oyewole Oluwaseun | Software Developer | Reactjs & Angular developer | Andriod Studio | Godot Game Engine",
	description: "I create mobile apps, video games and static websites.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@oyewoleoluwaseun",
	description: "Software Developer | Reactjs & Angular developer | Andriod Studio | Godot Game Engine",
	cards: [
		{
			title: "My website",
			link: "https://oyewoleoluwaseun.github.io/",
		},
		{
			title: "Lawyers' Guide",
			link: "https://play.google.com/store/apps/details?id=com.pinnacle.lawyersguide",
		},
		{
			title: "Nigeria Penal Code Act",
			link: "https://play.google.com/store/apps/details?id=com.lumosstudio.penalcodeact",
		},
		{
			title: "My GitHub",
			link: "https://github.com/oyewoleoluwaseun/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/oyewole-oluwaseun-08611694/",
		},
	]
}