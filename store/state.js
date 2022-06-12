export default () => ({
    details: {
        name: "Kharyl Ortiz",
        title: "Front-End Developer",
        email: "kharylkate.ortiz@gmail.com",
        linkedin: "Kharyl Ortiz | LinkedIn",
        address: "General Santos City 9500, Mindanao Philippines"
    },

    skills: [
        { skill: "Vue, Vuex", lvl: 85 },
        { skill: "Bootstrap, Bootstrap Vue", lvl: 85 },
        { skill: "React", lvl: 60 },
        { skill: "HTML, CSS", lvl: 85 },
    ],

    knowledge: [
        { skill: "Github / Bitbucket" },
        { skill: "JIRA" },
        { skill: "Axios" },
        { skill: "Jest" },
        { skill: "PostgreSQL" },
    ],

    panels: [
        {
          id: "workExp",
          title: "Work Experiences",
          icon: "users",
          contents: [
            {
              title: "UI/UX Designer (UX)", 
              sub: "Biotech Farms Inc.", 
              link: "",
              note: "July 2020 - Present",
              cont: [
                {li: "Designing, maintaining and updating user-friendly web applications."},
                {li: "Collaborating with SQA and DevOps in devising solutions."},
                {li: "Integrating front-end application with the back-end."},
                {li: "Validating changes by testing programs."},
              ]
            },
          ]
        },
        {
          id: "projEnv",
          title: "Projects Involved",
          icon: "project-diagram",
          contents: [
            {
              title: "Recruitment Tracking System (RecTrack) V2", 
              sub: "Secondary UX Designer (Vue, NuxtJS, Vuetify)",
              note: "Assigned as secondary dev on November 2020 - March 2022",
              link: "",
              cont: [
                {li: "A web-based application designed to track the recruitment process of the company, with user and applicant management, online exam and report generating features."},
                {li: "Helped in creating, integrating, testing and deploying a new module."},
                {li: "Active in bug fixing."},
                {li: "A new and improved version created by an amazing team has been deployed in its place and has been live since March 2022!"},
              ]
            },
            {
              title: "Farmer's Delivery Slip System", 
              sub: "Primary UX Designer (Vue, NuxtJS, Bootstrap)",
              note: "November 2020 - Present",
              link: "",
              cont: [
                {li: "A web-based application designed to eliminate manual booking of delivery transactions and issuance of delivery slips to farmers."},
                {li: "This application includes printing of automated delivery slips (through POS printer), FSQR integration and tagging of Purchase Requests from SAP and posting of Purhase Orders to SAP."},
                {li: "Used Axios for API integration."},
                {li: "Waiting on deployment."},
                
              ]
            },
            {
                title: "BFI Learning Management System", 
                sub: "Admin/E-Learning Content Developer", 
                note: "December 2020 - Present",
                link: "",
                cont: [
                  {li: "Web Learning Environment for trainees and clients/users."},
                  {li: "Creates and gathers learning materials for further learning of the team."},
                  {li: "Encodes end-user training materials for End-User Trainings."},
                ]
              },
            {
              title: "Revive Booking System", 
              sub: "Primary UX Designer (React, NextJS, Feather Socket.io, Material UI, Axios, Luxon)", 
              note: "Passed on by previous FE Dev on June 2020 - Present",
              link: "",
              cont: [
                {li: "A web-based application created to ease operations in terms of enrollment of farmers, booking of farm equipments, storing of farmer and farm equipment, and report generation."},
                {li: "Passed on by previous developers for maintenance and development of additional features."},
                {li: "Added new modules and new features."},
                {li: "Deployed and actively used in daily operations."}
              ]
            },
          ]
        },
        {
          id: "educBac",
          title: "Educational Background",
          icon: "book-open",
          contents: [
            {
              title: "Mindanao State University - General Santos City (MSU-GSC)", 
              sub: "", 
              link: "",
              note: "2015 - 2020",
              cont: [
                {li: "Bachelor in Science and Information Technology"},
                {li: "Major in Database Systems"},
              ]
            }
          ]
        },
        {
          id: "others",
          title: "Other Relevant Experiences",
          icon: "star",
          contents: [
            {
              title: "UX Designer Training", 
              sub: "BiotechFarms Inc.", 
              link: "",
              note: "September 2020-October 2020",
              cont: [
                {li: "Data Gathering Training Materials"},
                {li: "System diagrams (use-case, activity, entity-relationship, heirarchical)"},
                {li: "Frontend Application development (VueJs, Vuex, Bootstrap, Axios) using mock data"},
                {li: "Frontend Application Unit Testing using Jest"},
                {li: "Collaborate with DevOps for Integration of frontend application to backend API"},
                {li: "Mobile Development using NativeScript and mock data"},
              ]
            },
            {
                title: "Software Quality Assurance Engineer Training", 
                sub: "BiotechFarms Inc.", 
                link: "",
                note: "July 2020 - August 2020",
                cont: [
                  {li: "Git commands, git versioning and bitbucket"},
                  {li: "Jira Project Management, Service Desk and Confluence"},
                  {li: "Software Development Timeline and Standard Operating Procedure review"},
                  {li: "Fundamentals of Quality Assurance and Software Testing"},
                  {li: "Test Scripts creation"},
                  {li: "Manual and Automated Testing (Puppeteer, Jest)"},
                  {li: "Standby Support during UAT phase"},
                ]
              },
            {
                title: "Learning Management System Assistant (OJT)", 
                sub: "Mindanao State University - GSC", 
                link: "",
                note: "January 2020 - May 2020",
                cont: 
                [
                  {li: "Assisted in faculty training for Learning Management System."},
                  {li: "Served as coach for digitizing course content and deploying it in the LMS Server of MSU General Santos."}
                ]
              },
          ]
        },
        {
          id: "portf",
          title: "Portfolio",
          icon: "folder",
          contents: [
            {
              title: "Github", 
              sub: "",
              link: "https://github.com/kharylkate?tab=repositories",
              note: "Github Repositories",
              cont: []
            },
            {
              title: "Dribbble", 
              sub: "",
              link: "https://dribbble.com/Syllver",
              note: "Dribbble Visual Designs",
              cont: []
            },
          ]
        },
      ],

    listProject: [],
    listProjectLang: [],


})