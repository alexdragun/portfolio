<template>
  <div>
    <navigationPrimary />
    <nuxt />
    <footerPrimary />
  </div>
</template>

<script>
  import navigationPrimary from '@/components/layout/navbar'
  import footerPrimary from '@/components/layout/footer'
  export default {
    components: {
      navigationPrimary,
      footerPrimary
    }
  }
</script>
