<template>
  <div id="work-section" class="container">
    <div class="container__inner">
      <h3>{{ $t('work.title') }}</h3>
      <div class="work">
        <div class="work__content">
          <div class="work__content--header">
            <img src="~static/images/projects/portfolio.png" alt="Portfolio" />
            <div class="created">
              <p>{{ $t('work.portfolio.date') }}</p>
            </div>
          </div>
          <div class="work__content--footer">
            <h4>{{ $t('work.portfolio.title') }}</h4>
            <p>{{ $t('work.portfolio.description') }}</p>
            <a href="https://alexdragun.github.io/portfolio/" target="_blank"
              >{{ $t('work.link') }}</a
            >
          </div>
        </div>
        <div class="work__content">
          <div class="work__content--header">
            <img src="~static/images/projects/todo.png" alt="ToDo" />
            <div class="created">
              <p>{{ $t('work.todo.date') }}</p>
            </div>
          </div>
          <div class="work__content--footer">
            <div>
              <h4>{{ $t('work.todo.title') }}</h4>
              <p>{{ $t('work.todo.description') }}</p>
            </div>
            <a href="https://alexdragun.github.io/todo/" target="_blank"
              >{{ $t('work.link') }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  padding: 120px 0;
  @media only screen and (max-width: 768px) {
    padding: 60px 0;
  }
  h3 {
    text-align: center;
    color: $secondary_color;
  }
  &__inner {
    margin-inline: auto;
    width: 100%;
    max-width: 1490px;
    .work {
      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(3, 4fr);
      grid-gap: 32px;
      @media only screen and (max-width: 1224px) {
        grid-template-columns: repeat(2, 6fr);
        @media only screen and (max-width: 768px) {
          grid-template-columns: 12fr;
        }
      }
      &__content {
        max-width: 500px;
        overflow: hidden;
        border-radius: 3px;
        background-color: $background-100;
        @media only screen and (max-width: 768px) {
          margin-inline: auto;
        }
        &--header {
          min-height: 190px;
          position: relative;
          img {
            display: block;
            width: 100%;
            min-height: 190px;
            object-fit: cover;
            object-position: center;
          }
          .created {
            padding: 10px 20px;
            position: absolute;
            bottom: 0;
            left: -10px;
            background-color: $secondary_color;
            transform: rotate(270deg);
            @media only screen and (max-width: 768px) {
              padding: 5px 10px;
            }
          }
        }
        &--footer {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 50px 24px 34px 24px;
          @media only screen and (min-width: 768px) {
            min-height: 225px;
          }
          h4 {
            margin-bottom: 12px;
          }
          p {
              margin-bottom: 12px;
          }
          a {
            width: fit-content;
            text-decoration: none;
            margin-top: auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            color: $gray;
            transition: 0.3s;
            &:hover {
              color: $secondary_color;
              &::before {
                background-color: $secondary_color;
              }
            }
            &::before {
              content: "";
              width: 20px;
              height: 1px;
              background-color: $gray;
              margin-right: 10px;
              transition: 0.3s;
            }
          }
        }
      }
    }
  }
}
</style>