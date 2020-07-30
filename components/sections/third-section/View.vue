<template>
  <section class="container-wrapper">
    <div class="container">
      <h2>Things that I am familiar with</h2>
      <div class="timeline">
        <div class="timeline-inner">
          <div class="timeline-title active">
            <p>Frontend</p>
          </div>
          <div class="timeline-inner__content">
            <div class="box">
              <div class="box-header">
                <p>Nuxt</p>
              </div>
              <div class="box-content">
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-inner">
          <div class="timeline-title">
            <p>Backend</p>
          </div>
          <div class="timeline-inner__content">
            test
          </div>
        </div>
        <div class="timeline-inner">
          <div class="timeline-title">
            <p>Tools</p>
          </div>
          <div class="timeline-inner__content">
            test
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container-wrapper {
  padding: 120px 0;
  @media only screen and (max-width: 768px) {
    padding: 80px 0;
  }
  .container {
    h2 {
      position: relative;
      margin: 0 auto;
      padding: 0 5px;
      width: fit-content;
      background-color: $primary_light;
      @media only screen and (max-width: 400px) {
        font-size: 28px;
      }
      &:before {
        content: '';
        display: block;
        width: 50px;
        height: 30px;
        background-color: $primary_color;
        z-index: -1;
        @include fullscreen(absolute, -7px, initial, initial, -7px);
      }
    }
    .timeline {
      margin-top: 40px;
      &-inner {
        display: flex;
        &__content {
          margin-left: 30px;
          .box {
            &-header {

            }
            &-content {

            }
          }
        }
        &:last-child {
          .timeline-title {
            padding-bottom: 0;
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
        }
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $primary_light;
          border: 3px solid $primary_color;
          width: 100px;
          height: 100px;
          @include border-radius(100px);
        }
        &.active {
          p {
            background-color: $primary_color;
            color: $primary_light;
          }
        }
      }
    }
    /*.box-container {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      &__inner {
        margin-top: 20px;
        background-color: red;
        width: 33%;
        height: 300px;
        &:nth-child(-n + 3) {
          margin-top: 0;
        }
      }
    }*/
  }
}
</style>
