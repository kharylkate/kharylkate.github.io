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
          {
            title: "Learning Management System Assistant", 
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
        id: "projEnv",
        title: "Projects Involved",
        icon: "project-diagram",
        contents: [
          {
            title: "Farmer's Delivery Slip System", 
            sub: "Primary UX Designer", 
            note: "Vue, NuxtJS, Bootstrap",
            link: "",
            cont: [
              {li: "A web-based application designed to eliminate manual booking of delivery transactions and issuance of delivery slips to farmers."},
              {li: "This application includes printing of automated delivery slips (through POS printer), FSQR integration and tagging of Purchase Order from SAP."},
              {li: "Passed on to me for frontend and network printing maintenance."},
              {li: "Used Axios for API integration."},
            ]
          },
          {
            title: "Revive Booking System", 
            sub: "Primary UX Designer", 
            note: "React, NextJS, Feather Socket.io, Material UI, Axios, Luxon",
            link: "",
            cont: [
              {li: "A web-based application created to ease operations."},
              {li: " in terms of enrollment of farmers, booking of farm equipments, storing of farmer and farm equipment, and report generation."}
            ]
          },
          {
            title: "Company Website", 
            sub: "UI / UX Designer", 
            link: "",
            note: "Wordpress, Yoast SEO",
            cont: [
              {li: "Used wordpress for this project."},
              {li: "Created my own wordpress template from scratch."},
              {li: "Was able to train regarding SEO."},
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
            title: "Notre Dame of Dadiangas University (NDDU)", 
            sub: "BS Computer Science", 
            link: "",
            note: "SY: 2015 - 2019",
            cont: [
              {li: "Montagne Scholar"},
              {li: "Junior Programers Group (Documentation Head)."},
              {li: "Course Representative."},
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
            title: "Visual Artistry", 
            sub: "Present", 
            link: "",
            note: "Self-taught",
            cont: [
              {li: "Able to create colored and black n' white portraits."},
              {li: "Character designs and sketches."},
              {li: "Digital and Traditional ways of creating art pieces."}
            ]
          },
          {
            title: "Web Résumé and Portfolio", 
            sub: "Year 2022", 
            link: "",
            note: "Vue, Nuxt, SASS, Github, Netlify",
            cont: [
              {li: "I made this very webiste you're looking right now."},
              {li: "I guess this could count as a part of my portfolio."},
            ]
          },
          {
            title: "SAP Be Visual! Sketching Basics for IT Business, Passer", 
            sub: "December 2020", 
            link: "",
            note: "Certification",
            cont: []
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
