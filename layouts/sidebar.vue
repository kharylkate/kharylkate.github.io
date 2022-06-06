<template>
  <div class="main_layout" ref="main_layout" :style="'width: '+final_width+'px;'">
    <div class="side_layout">

      <div class="side_container" ref="side_cont">
        <!-- SIDE HEADER -->
        <div class="side_header">
          <div class="side_picture"></div>
          <div class="side_profile">
            <div class="profile_name">{{ details.name }}</div>
            <div class="profile_title">{{ details.title }}</div>
          </div>
        </div>
        <!-- SCROLLABLE SIDE -->
        <div class="side_scroll" :style="'height:'+final_height+'px;'">
          <!-- SIDE CONTENTS -->
          <div class="side_content">
            <!-- CONTACTS -->
            <div class="side_panel">
              <div class="display_B text_title"> Contacts:</div>
              <div class="display_B text_sub"> <fa :icon="['fa', 'envelope']"/> &ensp; {{ details.email }} </div>
              <div class="display_B text_sub"> <fa :icon="['fab', 'linkedin']"/> &ensp;
                <a href="https://www.linkedin.com/in/kharyl-ortiz-630153136/" style="color: #F6ACC8"> {{ details.linkedin }} </a>
              </div>
              <div class="display_B text_sub"> <fa :icon="['fa', 'globe-asia']"/> &ensp; {{ details.address }} </div>
            </div>
            <!-- SKILLS -->
            <div class="side_panel">
              <div class="display_B text_title"> Skills: </div>
              <div class="skill_set" v-for="(skills, s) in skills" :key="'s'+s">
                <div class="display_B text_title2">{{ skills.skill }}</div>
                <div class="display_B prog_bar">
                  <div class="prog" :style="'width:'+skills.lvl+'%;'"></div>
                </div>
              </div>
            </div>
            <!-- KNOWLEDGE -->
            <div class="side_panel">
              <div class="display_B text_title"> Knowledgable in: </div>
              <div class="display_B text_sub" v-for="(know, k) in knowledge" :key="'k'+k"> <fa :icon="['fa', 'check-circle']"/> &ensp; {{ know.skill }} </div>
            </div>

          </div>
        </div>

      </div>

    </div>
    <div :style="'height:'+computedHeight+'px;'" class="content_layout" >
        <Nuxt />
    </div>

    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      final_width: "",
      computedHeight: "",
      final_height: "",
      final_scroll_height: "",
    }
  },

  computed: {
    ...mapGetters({
      skills: "getSkills",
      details: "getDetails",
      knowledge: "getKnowledge"
    })
  },

  methods: {
    
  },
  mounted() {
    // GET MAIN LAYOUT'S HEIGHT
    var main_layout = parseInt(this.$refs.main_layout.offsetHeight);
    var main_layout_w = parseInt(this.$refs.main_layout.offsetWidth);

    // GET SIDE CONTAINER'S HEIGHT
    const side_container_height = this.$refs.side_cont.offsetHeight;
    var needed_height;

    // FOR CONTENT SCROLL
    var sh = side_container_height;
    this.computedHeight = parseInt(sh) + 50; // idk why I had to put 50

    // FOR WIDTH
    if(main_layout_w > 1300) {
      this.final_width = 1344;
    }
    else {
      this.final_width = main_layout_w;
    }
    if(main_layout < 733) {
      alert("Redirecting to mobile version");
      needed_height = parseFloat(side_container_height) * 0.65; // 65 percent
    }
    else if(main_layout > 800) {
      needed_height = parseFloat(side_container_height) * 0.99; // 80 percent
    }
    else {
      needed_height = parseFloat(side_container_height) * 0.70; // 70 percent
    }
    this.final_height = parseInt(needed_height);

  },
  
}
</script>

<style lang="scss">
.side_picture{
  background-image: url("../assets/pic2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
