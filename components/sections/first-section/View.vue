<template>
  <section class="container-wrapper">
    <div class="container">
      <img class="avatar" src="/images/avatar.svg" alt="avatar">
      <h2>Front-end developer</h2>
      <h4>Alex Dragun</h4>
      <img class="code-image" src="/images/code-thinking.svg" alt="code">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container-wrapper {
  margin-top: 120px;
  @media only screen and (max-width: 768px) {
    margin-top: 100px;
  }
  .container {
    text-align: center;
    .avatar {
      margin: 0 auto 20px;
      width: 100%;
      max-width: 265px;
      @include animation(move-up-down 3s ease-in-out infinite);
      @keyframes move-up-down {
        0% {
          @include transform(translateY(0));
        }
        50% {
          @include transform(translateY(-30px));
        }
        100% {
          @include transform(translateY(0));
        }
      }
      @media only screen and (max-width: 400px) {
        max-width: 200px;
      }
    }
    h2 {
      position: relative;
      margin: 0 auto 5px;
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
    .code-image {
      margin: 50px auto -15px;
      display: block;
      width: 100%;
      max-width: 760px;
    }
  }
}
</style>
