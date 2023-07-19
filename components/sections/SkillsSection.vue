<template>
  <div class="skills">
    <div class="title-container">
      <h3 class="title" :class="{ 'title--hr': $route.path === '/hr' }">
        {{ $t("about.skills") }}
      </h3>
    </div>
    <div class="skills__inner">
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/vue.png" alt="VueJs" />
          <p>Vue.js</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/nuxt.png" alt="NuxtJs" />
          <p>Nuxt.js</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/javascript.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/typescript.png" alt="TypeScript" />
          <p>TypeScript</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/strapi.png" alt="Strapi" />
          <p>Strapi</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/storybook.png" alt="Storybook" />
          <p>Storybook</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/html.png" alt="html" />
          <p>HTML</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/css.png" alt="CSS" />
          <p>CSS/SASS</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/api.svg" alt="API" />
          <p>Rest API</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/figma.png" alt="Figma" />
          <p>Figma</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/bootstrap.png" alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/quasar.png" alt="Quasar" />
          <p>Quasar</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/git.png" alt="Git" />
          <p>Git</p>
        </div>
      </Progress>
      <Progress :percentage="100">
        <div class="skill">
          <img src="~static/images/skills/cypress.png" alt="Cypress" />
          <p>Cypress</p>
        </div>
      </Progress>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Progress: () => import("@/components/partials/Progress.vue")
  }
};
</script>

<style lang="scss" scoped>
.skills {
  margin-top: 120px;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-gap: 48px;
    grid-template-columns: auto 11fr;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 60px;
  }
  .title-container {
    @media only screen and (min-width: 768px) {
      overflow: hidden;
      width: 40px;
      /* height: 175px; */
      height: 325px;
    }
    .title {
      width: fit-content;
      display: flex;
      align-items: center;
      color: $secondary_color;
      margin-bottom: 32px;
      &--hr {
        @media only screen and (min-width: 768px) {
          margin-left: -104px !important;
          height: 255px !important;
        }
      }
      &::before {
        content: "";
        margin-right: 15px;
        display: block;
        width: 30px;
        height: 2px;
        background-color: $secondary_color;
      }
      @media only screen and (min-width: 768px) {
        transform: rotate(270deg);
        height: 173px;
        margin-left: -70px;
        white-space: nowrap;
      }
    }
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 6fr);
    grid-gap: 48px 128px;
    @media only screen and (max-width: 768px) {
      grid-gap: 48px;
      @media only screen and (max-width: 450px) {
        grid-template-columns: 12fr;
        grid-gap: 28px 0;
      }
    }
    .skill {
      display: flex;
      align-items: center;
      img {
        display: block;
        width: 40px;
        margin-right: 15px;
      }
    }
  }
}
</style>
