<template>
  <nav class="nav" :class="{ 'nav--scrolled': isScrolled }">
    <div class="nav__left">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 80 80"
      >
        <g data-name="Group 1">
          <path
            data-name="Path 3"
            d="M40 0A40 40 0 110 40 40 40 0 0140 0z"
            fill="#ffcc73"
          />
          <path
            data-name="Path 1"
            d="M40 14.766v45.579s22.582.207 22.375-22.582S40 14.766 40 14.766z"
            fill="none"
            stroke="#1a1d27"
            stroke-width="4"
          />
          <path
            data-name="Path 2"
            d="M17.417 62.422c-.207-48.738 22.582-47.655 22.582-47.655"
            fill="none"
            stroke="#1a1d27"
            stroke-width="4"
          />
          <path
            data-name="Line 1"
            fill="none"
            stroke="#1a1d27"
            stroke-width="3"
            d="M19.5 37.5h20"
          />
        </g>
      </svg>
    </div>
    <div class="nav__center">
      <ul>
        <li>
          <a
            @click="scrollTo('hero-section')"
            :class="{ active: activeLink === 'hero-section' }"
            >{{ $t("navigation.home") }}</a
          >
        </li>
        <li>
          <a
            @click="scrollTo('about-section')"
            :class="{ active: activeLink === 'about-section' }"
            >{{ $t("navigation.about") }}</a
          >
        </li>
        <li>
          <a
            @click="scrollTo('work-section')"
            :class="{ active: activeLink === 'work-section' }"
            >{{ $t("navigation.work") }}</a
          >
        </li>
        <li>
          <a
            @click="scrollTo('contact-section')"
            :class="{ active: activeLink === 'contact-section' }"
            >{{ $t("navigation.contact") }}</a
          >
        </li>
      </ul>
    </div>
    <div class="nav__right">
      <nuxt-link :to="switchLocalePath('hr')">HR</nuxt-link>
      <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
    </div>
    <div
      class="hamburger"
      :class="{ 'hamburger-active': isOpened }"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="slide-fade">
      <div v-if="isOpened" class="responsive-header">
        <ul>
          <li>
            <a
              @click="scrollTo('hero-section')"
              :class="{ active: activeLink === 'hero-section' }"
              >{{ $t("navigation.home") }}</a
            >
          </li>
          <li>
            <a
              @click="scrollTo('about-section')"
              :class="{ active: activeLink === 'about-section' }"
              >{{ $t("navigation.about") }}</a
            >
          </li>
          <li>
            <a
              @click="scrollTo('work-section')"
              :class="{ active: activeLink === 'work-section' }"
              >{{ $t("navigation.work") }}</a
            >
          </li>
          <li>
            <a
              @click="scrollTo('contact-section')"
              :class="{ active: activeLink === 'contact-section' }"
              >{{ $t("navigation.contact") }}</a
            >
          </li>
        </ul>
        <div class="lang">
          <nuxt-link :to="switchLocalePath('hr')"><span @click="isOpened = false">HR</span></nuxt-link>
          <nuxt-link :to="switchLocalePath('en')"><span @click="isOpened = false">EN</span></nuxt-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
      isScrolled: false,
      activeLink: "hero-section",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isOpened = !this.isOpened;
    },
    scrollTo(elementId) {
      let offset = 0;
      if (elementId === "work-section") {
        offset = -80;
      }
      let options = {
        offset: offset,
      };
      this.activeLink = elementId;
      this.$scrollTo(`#${elementId}`, options);
      if (this.isOpened) {
        this.isOpened = false;
      }
    },
    handleScroll() {
      window.scrollY > 1 ? (this.isScrolled = true) : (this.isScrolled = false);
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(250px);
}
.nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  padding: 20px 120px;
  align-items: center;
  z-index: $z-index_fixed;
  background-color: $primary_color;
  box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.05);
  transition: 0.3s;
  @media only screen and (max-width: 1224px) {
    padding: 20px 60px;
    @media only screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
    }
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr auto 1fr;
  }
  &--scrolled {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.05);
    padding-block: 10px;
  }
  &__center {
    @media only screen and (max-width: 768px) {
      display: none;
    }
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      li {
        list-style: none;
        margin: 0 20px;
        a {
          cursor: pointer;
          display: block;
          text-transform: uppercase;
          font-size: 14px;
          color: $gray;
          transition: 0.3s ease;
          &:hover {
            color: $secondary_color;
          }
          &.active {
            color: $secondary_color;
          }
        }
      }
    }
  }
  &__right {
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 768px) {
      display: none;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      display: block;
      text-transform: uppercase;
      font-size: 14px;
      color: $gray;
      transition: 0.3s ease;
      &:hover {
        color: $secondary_color;
      }
      &:not(:last-child) {
        margin-right: 10px;
      }
      &.nuxt-link-exact-active {
        color: $secondary_color;
      }
    }
  }
  .hamburger {
    cursor: pointer;
    display: none;
    &:hover {
      span {
        background-color: $secondary_color !important;
      }
    }
    @media only screen and (max-width: 768px) {
      display: block;
    }
    &-active {
      span {
        background-color: $secondary_color !important;
        &:nth-child(1) {
          margin-bottom: -3px !important;
          transform: rotate(45deg) !important;
        }
        &:nth-child(2) {
          opacity: 0;
          margin-bottom: -2px;
          transform: translateX(-40px);
        }
        &:nth-child(3) {
          margin-bottom: 0 !important;
          width: 30px !important;
          transform: rotate(-45deg) !important;
        }
      }
      &:hover {
        span {
          background-color: $gray !important;
        }
      }
    }
    span {
      display: block;
      height: 3px;
      width: 30px;
      margin-bottom: 5px;
      background-color: $gray;
      opacity: 1;
      transition: 0.3s;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .responsive-header {
    box-sizing: border-box;
    position: fixed;
    padding: 20px 30px;
    top: 64px;
    right: 0;
    bottom: 0;
    width: 250px;
    background-color: $primary_color;
    @media only screen and (min-width: 768px) {
      display: none;
    }
    @media only screen and (max-width: 400px) {
      width: 100%;
    }
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        &:not(:last-child) {
          margin-bottom: 15px;
        }
        a {
          cursor: pointer;
          font-size: 16px;
          color: $gray;
          transition: 0.3s;
          &:hover {
            color: $secondary_color;
          }
          &.active {
            color: $secondary_color;
          }
        }
      }
    }
    .lang {
      margin-top: 20px;
      display: flex;
      a {
      cursor: pointer;
      text-decoration: none;
      display: block;
      text-transform: uppercase;
      font-size: 16px;
      color: $gray;
      transition: 0.3s ease;
      &:hover {
        color: $secondary_color;
      }
      &:not(:last-child) {
        margin-right: 10px;
      }
      &.nuxt-link-exact-active {
        color: $secondary_color;
      }
    }
    }
  }
}
</style>