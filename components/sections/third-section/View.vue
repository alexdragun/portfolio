<template>
  <section class="container-wrapper">
    <div class="custom-container">
      <div style="padding: 0 20px;">
        <h2>Things that I am familiar with</h2>
      </div>
      <div class="timeline">
        <div class="timeline-inner"
             v-for="(category, index) in categories"
             :key="category.id">
          <div class="timeline-title"
               :class="{ 'active': showItems === index }"
               @click="expand(index)">
            <p>{{ category.categoryTitle }}</p>
          </div>
          <div class="timeline-inner__content"
               v-if="index === showItems">
            <div class="box"
                 v-for="item in category.categoryItems"
                 :key="item.id">
              <div class="box-header"
                   v-if="item.title">
                <p>{{ item.title }}</p>
              </div>
              <div class="box-content">
                <img class="image"
                     :src="`images/things/${item.imageSrc}`"
                     :alt="item.imageAlt">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        showItems: 0,
        categories: [
          {
            id: 1,
            categoryTitle: 'Frontend',
            categoryItems: [
              {
                id: 1,
                title: 'Nuxt',
                imageSrc: 'nuxt.svg',
                imageAlt: 'Nuxt'
              },
              {
                id: 2,
                title: 'Vue',
                imageSrc: 'vue.svg',
                imageAlt: 'Vue'
              },
              {
                id: 3,
                title: 'Angular',
                imageSrc: 'angular.svg',
                imageAlt: 'Angular'
              },
              {
                id: 4,
                title: 'Bootstrap',
                imageSrc: 'bootstrap.svg',
                imageAlt: 'Bootstrap'
              },
              {
                id: 5,
                title: 'Html',
                imageSrc: 'html.svg',
                imageAlt: 'Html'
              },
              {
                id: 6,
                title: 'Css',
                imageSrc: 'css.png',
                imageAlt: 'Css'
              },
              {
                id: 7,
                title: 'Js',
                imageSrc: 'js.png',
                imageAlt: 'Js'
              },
              {
                id: 8,
                title: 'Sass',
                imageSrc: 'sass.svg',
                imageAlt: 'Sass'
              }
            ]
          },
          {
            id: 2,
            categoryTitle: 'Backend',
            categoryItems: [
              {
                id: 1,
                title: 'Rest api',
                imageSrc: 'rest-api.svg',
                imageAlt: 'Rest-api'
              }
            ]
          },
          {
            id: 3,
            categoryTitle: 'Tools',
            categoryItems: [
              {
                id: 1,
                title: 'Git',
                imageSrc: 'git.svg',
                imageAlt: 'Git'
              },
              {
                id: 2,
                title: 'Adobe xd',
                imageSrc: 'adobexd.png',
                imageAlt: 'Adobe-xd'
              },
              {
                id: 3,
                title: 'Intellij',
                imageSrc: 'intellij.svg',
                imageAlt: 'Intellij'
              },
              {
                id: 4,
                title: 'Webstorm',
                imageSrc: 'webstorm.png',
                imageAlt: 'Webstorm'
              }
            ]
          }
        ]
      }
    },

    methods: {
      expand(i) {
        if (this.showItems === i) {
          this.showItems = null
          console.log(this.showItems);
        } else {
          this.showItems = i
          console.log(this.showItems);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.container-wrapper {
  padding: 120px 0;
  @media only screen and (max-width: 768px) {
    padding: 80px 0;
  }
  .custom-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    h2 {
      position: relative;
      margin: 0 auto;
      padding: 0 5px;
      width: fit-content;
      background-color: $primary_light;
      @media only screen and (max-width: 768px) {
        padding: 0;
        @media only screen and (max-width: 400px) {
          font-size: 28px;
        }
      }
      &:before {
        content: '';
        display: block;
        width: 50px;
        height: 30px;
        background-color: $primary_color;
        z-index: -1;
        @include fullscreen(absolute, -7px, initial, initial, -7px);
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }
    }
    .timeline {
      padding: 0 20px;
      margin-top: 40px;
      &-inner {
        display: flex;
        @media only screen and (max-width: 768px) {
          flex-direction: column;
        }
        &__content {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-left: 30px;
          @media only screen and (max-width: 768px) {
            margin-left: 0;
            margin-bottom: 30px;
          }
          .box {
            margin-top: 20px;
            width: calc(25% - 21px);
            margin-right: 20px;
            border: 3px solid $primary_color;
            @include border-radius(10px);
            &:nth-child(-n + 4) {
              margin-top: 0;
            }
            &:nth-child(4n + 4) {
              margin-right: 0;
            }
            @media only screen and (max-width: 1024px) {
              width: calc(33% - 18px);
              &:nth-child(4n + 4) {
                margin-right: 20px;
              }
              &:nth-child(3n + 3) {
                margin-right: 0;
              }
              &:nth-child(4) {
                margin-top: 20px;
              }
              @media only screen and (max-width: 550px) {
                width: calc(50% - 16px);
                &:nth-child(3n + 3) {
                  margin-right: 20px;
                }
                &:nth-child(3) {
                  margin-top: 20px;
                }
                &:nth-child(2n + 2) {
                  margin-right: 0;
                }
              }
            }
            &-header {
              text-align: center;
              padding: 5px;
              background-color: $primary_color;
              p {
                text-transform: uppercase;
                color: $primary_light;
                font-size: 18px !important;
                line-height: 22px !important;
              }
            }
            &-content {
              display: flex;
              align-items: center;
              justify-content: center;
              height: calc(100% - 52px);
              padding: 10px;
              .image {
                display: block;
                margin: 0 auto;
                width: 100%;
                max-width: 135px;
                @media only screen and (max-width: 350px) {
                  max-width: 75px;
                }
              }
            }
          }
        }
        &:last-child {
          .timeline-title {
            padding-bottom: 0;
            @media only screen and (max-width: 768px) {
              padding-bottom: 30px;
            }
            &:before {
              content: '';
              display: block;
              width: 20px;
              height: 20px;
              background-color: $primary_color;
              z-index: -1;
              @include fullscreen(absolute, initial, initial, 0, 44px);
              @include border-radius(20px);
              @media only screen and (max-width: 768px) {
                display: none;
              }
            }
          }
        }
      }
      &-title {
        position: relative;
        padding-bottom: 30px;
        &:after {
          content: '';
          border: 2px solid $primary_color;
          height: calc(100% - 4px);
          z-index: -1;
          @include fullscreen(absolute, 0, initial, 0, 52px);
          @media only screen and (max-width: 768px) {
            display: none;
          }
        }
        p {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $primary_light;
          border: 3px solid $primary_color;
          width: 100px;
          height: 100px;
          @include border-radius(100px);
          @include transition(0.3s);
          &:hover {
            color: $primary_light;
            background-color: $primary_color;
          }
          @media only screen and (max-width: 768px) {
            width: 100%;
            height: 50px;
            @include border-radius(10px);
          }
        }
        &.active {
          p {
            background-color: $primary_color;
            color: $primary_light;
          }
        }
      }
    }
  }
}
</style>
