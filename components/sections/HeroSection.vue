<template>
  <div id="hero-section" class="container">
    <client-only>
      <vue-particles
        color="#bbbcce"
        linesColor="#bbbcce"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
      />
    </client-only>
    <div class="container__inner">
      <div class="container__inner--content">
        <div>
          <h6>{{ $t("hero.hello") }}</h6>
          <h1><span>Alex</span> Dragun</h1>
          <p>{{ $t("hero.description") }}</p>
          <div class="social">
            <a
              href="https://www.linkedin.com/in/alex-dragun-7304b2192/"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/alexdragun99/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/alex_dragun/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                />
              </svg>
            </a>
          </div>
        </div>
        <img src="~static/images/profile.png" alt="profile" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Button: () => import("@/components/partials/Button.vue")
  }
};
</script>

<style lang="scss" scoped>
.container {
  user-select: none;
  position: relative;
  box-sizing: border-box;
  padding-top: 84px;
  height: 100vh;
  min-height: 912px;
  #particles-js {
    position: absolute;
    top: 84px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__inner {
    position: relative;
    z-index: 1;
    height: 100%;
    @media only screen and (max-width: 1024px) {
      box-sizing: border-box;
      padding-top: 30px;
    }
    img {
      pointer-events: none;
      display: block;
      width: 100%;
      min-width: 500px;
      margin-top: auto;
      filter: grayscale(100%);
      @media only screen and (max-width: 1024px) {
        margin-top: auto;
        margin-inline: auto;
        min-width: initial;
        max-width: 390px;
      }
    }
    &--content {
      height: 100%;
      width: 100%;
      max-width: 1250px;
      margin-inline: auto;
      display: grid;
      grid-template-columns: 6fr 6fr;
      align-items: center;
      @media only screen and (max-width: 1024px) {
        grid-template-columns: 12fr;
      }
      & > div {
        @media only screen and (max-width: 1024px) {
          margin-bottom: 20px;
        }
      }
      h6 {
        font-size: 16px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        color: $secondary_color;
        font-weight: 400;
        &::before {
          content: "";
          margin-right: 15px;
          display: block;
          width: 30px;
          height: 1px;
          background-color: $secondary_color;
        }
      }
      h1 {
        margin-bottom: 20px;
        span {
          color: $secondary_color;
        }
      }
      p {
        margin-bottom: 60px;
        color: $gray;
      }
    }
    .social {
      display: flex;
      margin-top: 32px;
      @media only screen and (min-width: 1024px) {
        margin-top: 0;
        position: absolute;
        bottom: 60px;
        left: 120px;
      }
      @media only screen and (max-width: 1224px) {
        left: 60px;
      }
      a {
        cursor: pointer;
        display: block;
        &:not(:last-child) {
          margin-right: 25px;
        }
        &:hover {
          svg path {
            fill: $secondary_color;
          }
        }
        svg {
          display: block;
          path {
            fill: $white;
            transition: 0.3s;
          }
        }
      }
    }
  }
}
</style>
