<template>
  <section id="fourth-section" class="container-wrapper">
    <div class="custom-container">
      <h2>Recent work</h2>
      <div class="box-container">
        <div class="box">
          <div class="box-header">
            <p>Portfolio</p>
          </div>
          <div class="box-content">
            <img class="image" src="~static/images/projects/portfolio.png" alt="todo">
            <div class="image-overlay">
              <div>
                <a class="main-link"
                   href="https://alexdragun.github.io/portfolio/"
                   target="_blank">Visit website</a>
                <a class="secondary-link"
                   href="https://github.com/alexdragun/portfolio"
                   target="_blank">Git repository</a>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box-header">
            <p>ToDo</p>
          </div>
          <div class="box-content">
            <img class="image" src="~static/images/projects/todo.png" alt="todo">
            <div class="image-overlay">
              <div>
                <a class="main-link"
                   href="https://alexdragun.github.io/todo/"
                   target="_blank">Visit website</a>
                <!--<a class="secondary-link"
                   href="https://github.com/alexdragun/portfolio"
                   target="_blank">Git repository</a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container-wrapper {
  padding: 120px 0;
  background-color: $primary_color;
  @media only screen and (max-width: 768px) {
    padding: 80px 0;
  }
  .custom-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    h2 {
      margin-bottom: 40px;
      text-align: center;
      color: $primary_light;
    }
    .box-container {
      display: flex;
      flex-wrap: wrap;
      padding: 0 20px;
      .box {
        margin-top: 20px;
        width: calc(25% - 21px);
        height: 300px;
        margin-right: 20px;
        border: 3px solid $primary_light;
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
          @media only screen and (max-width: 768px) {
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
            @media only screen and (max-width: 640px) {
              margin: 20px auto 0 !important;
              width: 100%;
              max-width: 400px;
              &:first-child {
                margin-top: 0 !important;
              }
            }
          }
        }
        &-header {
          text-align: center;
          padding: 5px;
          background-color: $primary_black;
          @include border-radius(6px 6px 0 0);
          p {
            text-transform: uppercase;
            color: $primary_light;
            font-size: 18px !important;
            line-height: 22px !important;
          }
        }
        &-content {
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(100% - 32px);
          &:hover {
            .image-overlay {
              @include transform(translateY(0));
            }
          }
          .image {
            display: block;
            margin: 0 auto;
            width: 100%;
            height: 100%;
            object-fit: cover;
            @include border-radius(0 0 6px 6px);
            &-overlay {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              background-color: rgba(51, 51, 51, 0.8);
              @include border-radius(0 0 6px 6px);
              @include fullscreen(absolute, 0, 0, 0, 0);
              @include transform(translateY(-300px));
              @include transition(0.3s ease-out);
              .main-link {
                position: relative;
                z-index: 1;
                text-transform: uppercase;
                display: block;
                text-decoration: none;
                color: $primary_light;
                font-size: 26px;
                &:before {
                  content: '';
                  display: block;
                  margin: 0 auto;
                  width: 0;
                  height: 2px;
                  background-color: $primary_color;
                  @include fullscreen(absolute, initial, 0, 0, 0);
                  @include transition(0.3s);
                }
                &:hover {
                  &:before {
                    width: 80px;
                  }
                }
              }
              .secondary-link {
                display: block;
                text-transform: uppercase;
                margin: 0 auto;
                width: fit-content;
                text-decoration: none;
                color: $primary_light;
                @include fullscreen(absolute, initial, 0, 5px, 0);
                @include transition(0.3s);
                &:hover {
                  color: $primary_color;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
