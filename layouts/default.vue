<template>
  <div>
    <navigationPrimary />
    <nuxt />
    <footerPrimary />
  </div>
</template>

<script>
  import navigationPrimary from '@/components/layout/navbar.vue'
  import footerPrimary from '@/components/layout/footer.vue'
  export default {
    components: {
      navigationPrimary,
      footerPrimary
    }
  }
</script>
