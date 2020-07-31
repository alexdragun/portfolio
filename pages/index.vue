<template>
  <section>
    <firstSection />
    <secondSection />
    <thirdSection/>
    <fourthSection/>
    <fifthSection/>
  </section>
</template>

<script>
  import firstSection from '@/components/sections/first-section/View'
  import secondSection from '@/components/sections/second-section/View'
  import thirdSection from '@/components/sections/third-section/View'
  import fourthSection from '@/components/sections/fourth-section/View'
  import fifthSection from '@/components/sections/fifth-section/View'
  export default {
    components: {
      firstSection,
      secondSection,
      thirdSection,
      fourthSection,
      fifthSection
    }
  }
</script>
