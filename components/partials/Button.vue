<template>
    <button class="button">
        <span>
            <slot />
        </span>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  min-width: 170px;
  font-size: 14px;
  padding: 12px 30px;
  background-color: transparent;
  border: 1px solid $secondary_color;
  color: $primary_color;
  border-radius: 4px;
  font-weight: 600;
  overflow: hidden;
  &::after {
      content: '';
      display: block;
      width: 300px;
      height: 300px;
      background-color: $secondary_color;
      position: absolute;
      border-radius: 100px;
      top: -30px;
      animation: wave 5s infinite linear;
      transition: top 0.3s;
      @keyframes wave{
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(360deg);
          }
      }
  }
  &:hover {
      &:after {
          top: 10px;
      }
  }
  span {
      position: relative;
      z-index: 1;
  }
}
</style>