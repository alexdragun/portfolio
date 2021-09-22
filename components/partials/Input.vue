<template>
  <div class="input" :class="{ 'input--filled': value.length }">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      :type="type"
      :placeholder="label"
      :value="value"
      @input="update($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "text",
    },
  },
  methods: {
    update(val) {
      this.$emit("input", val);
      this.$emit("change", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
    padding-top: 20px;
  position: relative;
  display: flex;
  align-items: center;
   &--filled, &:focus-within {
    label {
      color: $secondary_color;
      transform: translateY(-30px) translateX(0) !important;
      font-size: 14px !important;
    }
    input {
      border-bottom: 1px solid $secondary_color !important;
    }
  }
  label {
    display: block;
    font-size: 16px;
    position: absolute;
    transform: translateY(0) translateX(10px);
    transition: 0.3s;
  }
  &:not(:last-child) {
    margin-bottom: 18px;
  }
  input:not(:placeholder-shown) + labell {
    background-color: red !important;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    outline: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid $gray;
    color: $white;
    font-size: 14px;
    line-height: 14px;
    transition: 0.3s;
    &::placeholder {
      opacity: 0;
    }
  }
}
</style>