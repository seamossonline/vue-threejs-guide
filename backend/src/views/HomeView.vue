<template>
      <img alt="Vue logo" src="../assets/logo.png" style="text-align: center;" />
  <div class="home">
    <TextContainer>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </TextContainer>

   <TextContainer>
     <h2>About me</h2>
     <p>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem minus
       at, nobis ut beatae incidunt quos a rerum et odit esse ullam sit aliquam
       vel! Doloribus provident magnam accusamus architecto velit a dolores
       explicabo rerum aperiam unde quas sunt magni corrupti, quis vitae vero.
       Explicabo adipisci perferendis pariatur dolores illum!
     </p>
     <p>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem minus
       at, nobis ut beatae incidunt quos a rerum et odit esse ullam sit aliquam
       vel! Doloribus provident magnam accusamus architecto velit a dolores
       explicabo rerum aperiam unde quas sunt magni corrupti, quis vitae vero.
       Explicabo adipisci perferendis pariatur dolores illum!
     </p>
     <h2>My Skills</h2>
     <ul>
       <li>Lorem ipsum dolor sit amet.</li>
       <li>Lorem ipsum dolor sit amet.</li>
       <li>Lorem ipsum dolor sit amet.</li>
       <li>Lorem ipsum dolor sit amet.</li>
     </ul>
   </TextContainer>
   <TextContainer>
     <h2>Contact me!</h2>
     <p>johndoe@gmail.com</p>
   </TextContainer>
 </div>

 <div id="scene-container">
      <!-- Three.js canvas will be inserted here -->
 </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TextContainer from "@/components/TextContainer.vue";

@Options({
  components: {
    HelloWorld,
    TextContainer,
  },
})
export default class HomeView extends Vue {
  name: "Home" = "Home";
};
</script>

<style lang="scss" scoped>
.home {
 display: flex;
 gap: 20px;
 flex-flow: row wrap;
   .text-container {
     flex: 1 1 0px;
     max-width: 33%;
   }
 }
</style>