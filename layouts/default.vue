<template>
  <div>
    <navigationPrimary />
    <nuxt />
  </div>
</template>

<script>
  import navigationPrimary from '@/components/layout/navbar'
  export default {
    components: {
      navigationPrimary
    }
  }
</script>
