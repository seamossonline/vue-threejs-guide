<script>
export default {
 data() {
   return {
     projects: [
       {
         title: "My first Project",
         desc: `Lorem ipsum  ...`,
         techs: ["PostgreSQL", "React", "Redux", "Node"],
         urlText: "Github",
         url: "https://github.com/maxfer03/solana-digital-nomads",
         img: "https://picsum.photos/600/400",
       },
       {
         title: "My second Project",
         desc: `Lorem ipsum  ...`,
         techs: ["PostgreSQL", "React", "Redux", "Node"],
         urlText: "Github",
         url: "https://github.com/maxfer03/solana-digital-nomads",
         img: "https://picsum.photos/600/400?s=1",  // parameter forces refresh
       },
       {
         title: "My third Project",
         desc: `Lorem ipsum  ...`,
         techs: ["PostgreSQL", "React", "Redux", "Node"],
         urlText: "Github",
         url: "https://github.com/maxfer03/solana-digital-nomads",
         img: "https://picsum.photos/600/400?s=2",
       },
       //...
     ],
     index: 0,
   };
 },
 methods: {
   async next() {
     if (this.projects.length - 1 === this.index) {
       this.index = 0;
     } else {
       this.index++;
     }
   },
   async prev() {
     if (this.index === 0) {
       this.index = this.projects.length - 1;
     } else {
       this.index--;
     }
   },
 },
};
</script>

<template>
    <div class="proj-showcase">
      <div class="carousell">
        <button class="carousell-btns btn-back" @click="prev">{{ "<" }}</button>
        <div class="carousell-content">
          <img
            v-if="projects[index].img"
            :alt="projects[index].title + ' image'"
            class="carousell-img"
            :src="projects[index].img"
          />
    
          <div class="carousell-content-text">
            <h3>{{ projects[index].title }}</h3>
            <h4>
              <span v-for="(tech, i) in projects[index].techs" :key="i">
                {{ tech }}{{ i === projects[index].techs.length - 1 ? "" : ", " }}
              </span>
            </h4>
            <p>
              {{ projects[index].desc }}
            </p>
            <a v-if="projects[index].url" :href="projects[index].url">{{
              projects[index].urlText
            }}</a>
            <span v-else>{{ projects[index].urlText }}</span>
          </div>
        </div>
        <button class="carousell-btns btn-next" @click="next">{{ ">" }}</button>
      </div>
    </div>
   </template>



<style lang="scss" scoped>
.carousell-btns {
    margin:0.5em;
padding: 0em 0.5em;
    font-weight: bold;
    border: none;
    background-color: black;
    color: greenyellow;
    font-size: 2em;
}
</style>
