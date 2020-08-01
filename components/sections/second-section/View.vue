<template>
  <section id="second-section" class="container-wrapper">
    <div class="container">
      <h3>Hello, I'm Alex. Nice to meet you.</h3>
      <p>
        I'm from Croatia. My journey as a front-end developer started almost 3 years ago.
        I have 2 years of work experience. Also I was mentor to few people
        I've worked with. I've done a few personal projects where I learned
        a lot of new things. I'm always working on improving my skills. Skilled in
        Nuxt.js, Vue.js, Angular, REST API, HTML Scripting, CSS/SCSS and Web Design.
      </p>
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
  .container {
    text-align: center;
    color: $primary_light;
    h3 {
      margin-bottom: 20px;
    }
    p {
      margin: 0 auto;
      max-width: 750px;
      line-height: 28px;
    }
  }
}
</style>
