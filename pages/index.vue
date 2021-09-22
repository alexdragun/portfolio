<template>
  <div>
    <HeroSection />
    <AboutMeSection />
    <WorkSection />
    <ContactSection />
  </div>
</template>

<script>
  export default {
    components: {
      HeroSection: () => import('@/components/sections/HeroSection.vue'),
      AboutMeSection: () => import('@/components/sections/AboutMeSection.vue'),
      WorkSection: () => import('@/components/sections/WorkSection.vue'),
      ContactSection: () => import('@/components/sections/ContactSection.vue')
    },
  }
</script>

<style lang="scss" scoped>

</style>