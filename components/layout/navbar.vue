<template>
  <nav>
    <div class="nav-left">
      <img src="/images/logo.svg" alt="logo">
    </div>
    <div class="nav-right">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About me</a>
        </li>
        <li>
          <a>Recent work</a>
        </li>
        <li>
          <a class="button top-left">Contact me</a>
        </li>
      </ul>
    </div>
    <div class="hamburger" :class="{'hamburger-active': openMenu}" @click="openMobileMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="slide-fade">
      <template v-if="openMenu">
        <div class="responsive-menu">
          <div class="responsive-menu__inner">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About me</a>
              </li>
              <li>
                <a>Recent work</a>
              </li>
              <li>
                <a class="button top-left">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </transition>

  </nav>
</template>

<script>
  export default {
    data() {
      return {
        offset: false,
        isMobile: false,
        openMenu: false
      }
    },
    mounted() {
      this.$nextTick(function() {
        if (window.removeEventListener) {
          window.addEventListener('resize', this.resizeEvent)
          window.addEventListener('scroll', this.scrollEvent)
        }
        this.resizeEvent()
        this.scrollEvent()
      })
    },
    beforeDestroy() {
      if (window.removeEventListener) {
        window.removeEventListener('scroll', this.scrollEvent)
      }
    },
    methods: {
      openMobileMenu() {
        this.openMenu = !this.openMenu
      },
      resizeEvent() {
        const clientWidth = window.innerWidth
        this.isMobile = clientWidth <= 1023
        if (!this.isMobile) {
          this.openMenu = false
        }
      },
      scrollEvent() {
        const scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop
        this.offset = scrollPosition >= 80
      }
    }
  }
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  @include transition(all .5s ease);
}
.slide-fade-leave-active {
  @include transition(all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0));
}
.slide-fade-enter, .slide-fade-leave-to {
  @include transform(translateX(250px));
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  min-height: 70px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: $z-index_fixed;
  @include fullscreen(fixed, 0, 0, initial, 0);
  @media only screen and (max-width: 1200px) {
    padding: 0 60px;
    @media only screen and (max-width: 1024px) {
      padding: 0 30px;
    }
  }
  .nav {
    &-left {
      img {
        display: block;
        width: 100%;
        max-width: 50px;
      }
    }
    &-right {
      @media only screen and (max-width: 1024px) {
        display: none;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        align-items: center;
        li {
          margin: 0 10px;
          &:last-child {
            margin-right: 0;
          }
          a {
            cursor: pointer;
            text-transform: uppercase;
            font-size: 16px;
            @include transition(0.3s ease);
            &:hover {
              color: $primary_color;
            }
            &.button {
              position: relative;
              overflow: hidden;
              display: flex;
              padding: 10px 20px;
              border: 2px solid $primary_color;
              z-index: 1;
              @include border-radius(30px);
              @include transition(0.3s ease);
              &:before,
              &:after {
                background: $primary_color;
                content: '';
                position: absolute;
                z-index: -1;
                @include transition(0.3s ease)
              }
            }
            &.top-left {
              &:before {
                top: 0;
                bottom: 0;
                left: -120%;
                width: 100%;
                @include transform(skewX(-45deg));
              }
              &:hover {
                &:before {
                  width: 240%;
                }
                color: $primary_light;
              }
            }
          }
        }
      }
    }
  }
  .hamburger {
    position: relative;
    cursor: pointer;
    display: none;
    z-index: 1031;
    &:hover {
      span {
        background-color: $primary_color !important;
      }
    }
    @media only screen and (max-width: 1024px) {
      display: block;
    }
    &-active {
      span {
        background-color: $primary_light !important;
        &:nth-child(1) {
          margin-bottom: -3px !important;
          @include transform(rotate(45deg) !important)
        }
        &:nth-child(2) {
          opacity: 0;
          margin-bottom: -2px;
          @include transform(translateX(-40px))
        }
        &:nth-child(3) {
          margin-bottom: 0 !important;
          width: 30px !important;
          @include transform(rotate(-45deg) !important)
        }
      }
      &:hover {
        span {
          background-color: $primary_black !important;
        }
      }
    }
    span {
      display: block;
      height: 3px;
      width: 30px;
      margin-bottom: 5px;
      background-color: $primary_black;
      opacity: 1;
      @include transition(0.3s);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .responsive-menu {
    display: none;
    width: 100%;
    max-width: 250px;
    background-color: #2c97de;
    z-index: $z-index_fixed;
    @include fullscreen(fixed, 0, 0, 0, initial);
    @media only screen and (max-width: 1024px) {
      display: block;
    }
    &__inner {
      padding: 70px 20px 20px 20px;
      height: calc(100% - 90px);
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        li {
          margin-bottom: 5px;
          &:last-child {
            margin-bottom: 0;
          }
          a {
            text-transform: uppercase;
            cursor: pointer;
            color: $primary_light;
            font-size: 18px;
            @include transition(0.3s ease);
            &:hover {
              color: $primary_black;
            }
          }
        }
      }
    }
  }
}
</style>
