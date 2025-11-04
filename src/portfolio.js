/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Rafli Limandijaya",
  title: "Hi all, I'm Rafli",
  subTitle: emoji(
    "A Tech-Savvy Administrative Assistant and Computer Engineering Graduate with hands-on experience in IoT systems, backend web development, and project coordination. Skilled in documentation, remote collaboration, and communication within team environments."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/raflinoob132",
  linkedin: "https://linkedin.com/in/rafli-limandijaya-7871a4251",
  gmail: "limandijaya@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Tech-Savvy Administrative Assistant & Computer Engineering Graduate with expertise in various domains",
  skills: [
    emoji(
      "📋 Manage administrative tasks efficiently including email handling, scheduling, and reporting"
    ),
    emoji("💻 Develop backend web applications and REST APIs using JavaScript, Go, and Python"),
    emoji(
      "🤖 Work with IoT systems and robotics, implementing smart solutions with ESP32 and machine learning"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fab fa-golang" // Using official Go logo
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Google Workspace",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-paper-plane" // Using paper plane as an alternative
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "ESP32",
      fontAwesomeClassname: "fas fa-microchip" // Using microchip as an alternative
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Telkom University",
      logo: require("./assets/images/telkomuniv.png"), // Updated to your image
      subHeader: "Bachelor of Computer Engineering",
      duration: "2021 - 2025",
      desc: "Graduated with GPA 3.34. Took courses about IoT Systems, Robotics, Web Development, and System Design.",
      descBullets: [
        "Completed final project on IoT Fish Farming System",
        "Participated in laboratory assistant roles for IoT and Robotics courses"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Administrative & Communication", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Technical Tools & Project Management",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming & Web Development",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Web Developer Intern",
      company: "PT. Sigma Cipta Caraka (Telkomsigma)",
      companylogo: require("./assets/images/telkomindonesia.png"), // Updated to your image
      date: "July 2024 – August 2024",
      desc: "Supported development of internal web applications using JavaScript, React, and Go. Implemented REST APIs and assisted in debugging and documentation.",
      descBullets: [
        "Implemented REST APIs for internal web applications",
        "Assisted in debugging and documentation processes",
        "Collaborated with teams to deliver web solutions"
      ]
    },
    {
      role: "Laboratory Assistant",
      company: "Telkom University",
      companylogo: require("./assets/images/telkomuniv.png"), // Updated to your image
      date: "February 2024 – January 2025",
      desc: "Supervised IoT and robotics labs, provided technical support, and managed records. Facilitated laboratory sessions for Computer Engineering students.",
      descBullets: [
        "Supervised IoT and robotics laboratory sessions",
        "Provided technical support to students",
        "Managed laboratory records and equipment"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Projects showcasing my expertise in IoT, Web Development, and Automation",
  projects: [
    {
      image: require("./assets/images/iot.png"), // Updated to your image
      projectName: "IoT Fish Farming System",
      projectDesc: "Smart feeder system with ESP32, Firebase, and Telegram Bot integration for remote monitoring and automated feeding of fish ponds.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/raflinoob132/pakanIkan-BE-new" // Link to your GitHub project
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // Empty as per requirement - no achievements to display
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out for opportunities, collaborations, or just to connect!",
  number: "+628777712235",
  email_address: "limandijaya@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
