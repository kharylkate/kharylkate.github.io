<template>
  <div class="main_container" id="main_cont">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVIGATIONS -->
    <div class="navigations">
      <!-- NAVIGATIONS -->
      <button class="nav_butn" v-for="(navs, n) in panels" :key="'n'+n" @click="scrollView(navs.id)">
        <fa :icon="['fa', navs.icon]"/> &ensp; {{ navs.title }}
      </button>

      <!-- PANELS -->
      <div class="panel_container" v-for="(data, d) in panels" :key="'d'+d" :ref="data.id" :id="data.id">
      <div class="panel_title" :id="'pnl_'+data.id">{{ data.title }}</div>
        <div class="panel_content" v-for="(cont, c) in data.contents" :key="'c'+c">
          <div class="content_title">{{ cont.title }}</div>
          <div class="content_sub">{{ cont.sub }}</div>
          <div class="content_note">{{ cont.note }}</div>
          <br>
          <div class="content_desc" v-for="(li, l) in cont.cont" :key="'l'+l" v-show="cont.cont.length > 0"> &bullet;&ensp;{{ li.li }}</div>
          <div class="content_link">
            <button class="content_link_btn" v-show="cont.link != ''" @click="go(cont.link)">
              Click here to view &ensp; <fa :icon="['fa', 'arrow-alt-circle-right']"/>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SIDE BUTTONS -->
    <!-- <div class="side_bottons">
      <button 
      class="side_botton" 
      v-for="(navs, n) in panels" 
      :key="'n'+n" 
      v-b-tooltip.hover.left
      :title="navs.title"
      :id="'btn_'+navs.id"
      @click="scrollView(navs.id)">
        <fa :icon="['fa', navs.icon]"/>
      </button>
    </div> -->
    <div class="side_bottons">
      <button 
      class="side_botton" 
      v-for="(navs, n) in panels" 
      :key="'n'+n" 
      :id="'btn_'+navs.id"
      @click="scrollView(navs.id)">
        <fa :icon="['fa', navs.icon]"/>
      </button>
    </div>

    <div class="goTop">
      <button class="goTopBtn" @click="goTop()" >
        <fa :icon="['fa', 'caret-up']"/>
      </button>
    </div>
    
  </div>
</template>

<script>
import Header from "./header.vue";
export default {
components: {
  Header
},
data() {
  return {
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
          {
            title: "Software Quality Assurance Engineer Training", 
            sub: "BiotechFarms Inc.", 
            link: "",
            note: "July 2020 - August 2020",
            cont: [
              {li: "Git commands, git versioning and bitbucket"},
              {li: "VS Code with git version control and remote repository enabled"},
              {li: "Jira Project Management, Service Desk and Confluence"},
              {li: "Software Development Timeline and Standard Operating Procedure review"},
              {li: "Fundamentals of Quality Assurance and Software Testing"},
              {li: "Test Scripts creation"},
              {li: "Manual testing"},
              {li: "Automated Testing (Puppeteer, Jest)"},
              {li: "Standby Technical Support during UAT phase"},
            ]
          },
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
              {li: "Collaborate with DevOps for Integration of frontend aplication to backend API"},
              {li: "Mobile Development using NativeScript"},
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
            title: "Graphic Designs", 
            sub: "",
            link: "https://github.com",
            note: "Graphic designs from previous works",
            cont: []
          },
          {
            title: "Digital Arts", 
            sub: "",
            link: "https://github.com",
            note: "Using Huion pentab and Adobe Photoshop",
            cont: []
          },
          {
            title: "Portraits", 
            sub: "",
            link: "https://github.com",
            note: "Colored and Graphite pencils, and Vellum paper",
            cont: []
          },
          {
            title: "Website Designs", 
            sub: "",
            link: "https://github.com",
            note: "Web Design",
            cont: []
          }
        ]
      },
      
    ],
  }
},
methods: {
  goTop() {
    // SCROLL TO TOP
    document.getElementById("main_cont").scrollIntoView({behavior: 'smooth', block: 'start'});
    // REMOVE ALL EXTRA STYLES
    for(var c=0; c < this.panels.length; c++) {
      document.getElementById('pnl_'+this.panels[c].id).classList.remove("extra_color");
      document.getElementById(this.panels[c].id).classList.remove("extra_border");
      document.getElementById('btn_'+this.panels[c].id).classList.remove("extra_sideBtn");
    }
  },
  go(link) {
    window.open(`${link}`);
  },
  scrollView(refName) {
    document.getElementById(refName).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'});
    for(var c=0; c < this.panels.length; c++) {
      if(this.panels[c].id == refName) { // ADD EXTRA CSS FOR EMPHASIS
        document.getElementById(this.panels[c].id).classList.add("extra_border");
        document.getElementById('pnl_'+this.panels[c].id).classList.add("extra_color");
        document.getElementById('btn_'+this.panels[c].id).classList.add("extra_sideBtn");
      }
      else { //REMOVE EXTRA CSS IF NOT CLICKED
        document.getElementById('btn_'+this.panels[c].id).classList.remove("extra_sideBtn");
        document.getElementById('pnl_'+this.panels[c].id).classList.remove("extra_color");
        document.getElementById(this.panels[c].id).classList.remove("extra_border");
      }
    }
  },
},
mounted() {

},
components: {

},
created() {
},
computed: {
  
}
}
</script>
