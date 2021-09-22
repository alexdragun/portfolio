<template>
  <nav class="nav">
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
          <a v-scroll-to="{
              el: '#hero-section',
             }">Home</a>
        </li>
        <li>
          <a v-scroll-to="{
              el: '#about-section',
              offset: 0
             }">About</a>
        </li>
        <li>
          <a v-scroll-to="{
              el: '#work-section',
              offset: -80
             }">Work</a>
        </li>
        <li>
          <a v-scroll-to="{
              el: '#contact-section',
              offset: 0
             }">Contact</a>
        </li>
      </ul>
    </div>
    <div class="nav__right">
      <a>HR</a>
      <a>EN</a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  padding: 20px 120px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  z-index: $z-index_fixed;
  background-color: $primary_color;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.05);
  @media only screen and (max-width: 1224px) {
    padding: 20px 60px;
    @media only screen and (max-width: 768px) {
      padding: 20px 20px;
    }
  }
  &__center {
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
        }
      }
    }
  }
  &__right {
    display: flex;
    justify-content: flex-end;
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
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>