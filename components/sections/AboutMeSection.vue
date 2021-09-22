<template>
  <div id="about-section" class="container">
    <div class="container__inner">
      <div class="container__inner--about">
        <img src="~static/images/avatar.svg" alt="Avatar" />
        <div>
          <h3 class="title">About Me</h3>
          <p class="description">
            My journey as a front-end developer started almost 4 years ago. I
            have 3 years of work experience. I'm very passionate and dedicated
            to my work. Always working on improving my skills.
          </p>
          <Button v-scroll-to="{
              el: '#contact-section',
             }">CONTACT ME</Button>
        </div>
      </div>
      <SkillsSection />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Button: () => import("@/components/partials/Button.vue"),
    SkillsSection: () => import("@/components/sections/SkillsSection.vue"),
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 120px 0;
  background-color: $background-100;
  @media only screen and (max-width: 768px) {
    padding: 60px 0;
  }
  &__inner {
    margin-inline: auto;
    width: 100%;
    max-width: 1490px;
    .title {
      display: flex;
      align-items: center;
      color: $secondary_color;
      margin-bottom: 32px;
      &::before {
        content: "";
        margin-right: 15px;
        display: block;
        width: 30px;
        height: 2px;
        background-color: $secondary_color;
      }
    }
    .description {
      max-width: 700px;
      margin-bottom: 32px;
    }
    &--about {
      display: grid;
      grid-template-columns: 4fr 8fr;
      grid-gap: 32px;
      align-items: center;
      @media only screen and (max-width: 768px) {
        grid-template-columns: 12fr;
      }
      img {
        display: block;
        width: 100%;
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
}
</style>