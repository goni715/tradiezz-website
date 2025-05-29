export interface ProfileData {
  name: string;
  title: string;
  avatar?: string;
  careerObjective: string;
  skills: string[];
  experience: {
    title: string;
    period: string;
    responsibilities: string[];
  }[];
  dateOfBirth: string;
  nationality: string;
  experienceYears: number;
  education: string;
  website: string;
  location: {
    city: string;
    state: string;
    zipCode: string;
    address: string;
  };
  phone: string;
  secondaryPhone?: string;
  email: string;
  resumeUrl: string;
  socialMedia: {
    platform: string;
    url: string;
  }[];
}

export const mockProfileData: ProfileData = {
  name: "Esther Howard",
  title: "Website Designer (UI/UX)",
  avatar: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
  careerObjective: "I am interested to apply for the UNIX Designer position at [XactMacker]. With a strong background in user-center design and a passion for creating intuitive digital experiences, I am confident in my ability to contribute effectively to your team.",
  skills: [
    "UNIX Design: Sketching, Prototyping, Interaction Design",
    "Design Tools: Figma, Adobe XD, Sketch, Photoshop, Illustrator",
    "User Research: Usability Testing, A/B Testing, User Personas, Journey Mapping",
    "Collaboration Agile, Scrum, Cross-functional Teams",
    "Familiar with HTML5, CSS3, JavaScript (basic understanding)",
    "Usability & Design Systems, WCAG Compliance, Material Design, Human Interface"
  ],
  experience: [
    {
      title: "UNIX Designer (Freelance/Contract) [Year - Present]",
      period: "2020 - Present",
      responsibilities: [
        "Conducted user research for web and mobile applications, improving user engagement by [X]%",
        "Established user research and usability testing, defining feature sets based on feedback.",
        "Developed responsive HTML5, CSS3, JavaScript solutions to enhance website performance."
      ]
    }
  ],
  dateOfBirth: "14 June, 2021",
  nationality: "Bangladesh",
  experienceYears: 7,
  education: "Master Degree",
  website: "www.estherhoward.com",
  location: {
    city: "Beverly Hills",
    state: "California",
    zipCode: "90202",
    address: "Zone/Block Basement 1 Unit 82, 1372 Spring Avenue, Portland."
  },
  phone: "+1-202-555-0141",
  secondaryPhone: "+1-202-555-0189",
  email: "esther.howard@gmail.com",
  resumeUrl: "#",
  socialMedia: [
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "youtube", url: "https://youtube.com" }
  ]
};