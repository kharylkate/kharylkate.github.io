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
import { mapGetters } from 'vuex';
export default {
components: {
  Header
},
data() {
  return {
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
  created() {
  },
  computed: {
    ...mapGetters({
      panels: "getPanels",
      listProjects: "getProjects",
      listProjectLang: "getProjectLang"
    })
  },
  async beforeCreate() {
    // await this.$store.dispatch("getProjects")
  }
}
</script>
