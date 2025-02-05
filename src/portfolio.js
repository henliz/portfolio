/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Henliz",
  title: "Hi, I'm Henrietta",
  subTitle: emoji("A human interaction designer & developer 🚀"),
  previousWork: "Previously @ HalalMeals & Sun Life",
  resumeLink: "https://drive.google.com/file/d/1mEsUoIU5ImeV4RJ6wqs2K3uFgiN0feaM/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/henliz",
  linkedin: "https://www.linkedin.com/in/henriettavanniekerk/",
  gmail: "hennielizzie@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
};

// Big Projects
const bigProjects = {
  title: "Case Studies",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/SeniorsConnect_Transparent.png"),
      projectName: "Seniors Connect",
      projectDesc: "Nurturing timeless bonds to fight the loneliness epedemic facing our seniors.",
      footerLink: [{ name: "View Project", url: "http://saayahealth.com/" }]
    },
    {
      image: require("./assets/images/Rheo_Thumbnail.png"),
      projectName: "Rheo Thompson",
      projectDesc: "Bringing a beloved brand into the 21st century with a modern twist.",
      footerLink: [{ name: "View Project", url: "http://saayahealth.com/" }]
    },
    {
      image: require("./assets/images/MagicMirror_Thumbnail.png"),
      projectName: "Magic Mirror",
      projectDesc: "Lorem ipsum dolor sit amet.",
      footerLink: [{ name: "View Project", url: "http://saayahealth.com/" }]
    }
  ],
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third-party services such as Firebase/ AWS / Digital Ocean")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Waterloo",
      logo: require("./assets/images/University_of_Waterloo_seal.png"),
      subHeader: "Bachelor's of Design (BDes)",
      duration: "September 2022 - present",
      desc: `Work Integrated Learning Award, CEWIL Scholarship (2024)
            Hack The North (2024)
            Peer Leader, UW Housing (2023)
            Project Manager, UW CUBE (2023)
            President’s Scholarship (2022)`
    },
    {
      schoolName: "Interational Baccalaureate Programme",
      logo: require("./assets/images/IB_Logo.png"),
      subHeader: "International Baccalaureate Diploma",
      duration: "September 2020 - May 2022",
      desc: "Honour Roll (2020-2022)"
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Achievements, Certifications, Award Letters, and more!",
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com" }
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "I love to write and share my knowledge.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://medium.com/",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building UI."
    }
  ],
  display: true
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE 😅"),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/"
    }
  ],
  display: true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: ["https://anchor.fm/codevcast/embed/episodes/"],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "https://drive.google.com",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "hennielizzie@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "henliz", // Replace with your Twitter handle
  display: true
};

// Hireability Status
const isHireable = true;

// Final Export
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
