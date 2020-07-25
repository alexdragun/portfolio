<template>
  <section>
    <firstSection />
    <secondSection />
    <!--<thirdSection/>-->
  </section>
</template>

<script>
  import firstSection from '@/components/sections/first-section/View'
  import secondSection from '@/components/sections/second-section/View'
  // import thirdSection from '@/components/sections/third-section/View'
  export default {
    components: {
      firstSection,
      secondSection
      // thirdSection
    }
  }
</script>
