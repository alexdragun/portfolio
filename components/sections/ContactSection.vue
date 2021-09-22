<template>
  <div id="contact-section" class="container">
    <div class="container__inner">
      <img class="contact" src="~static/images/contact.svg" alt="" />
      <div class="container__inner--contact">
        <form @submit.prevent="sendMail">
          <Input label="Subject" v-model="subject" />
          <Textarea label="Message" v-model="message" />
          <Button>
            <template v-if="status === 'sending'"> SENDING... </template>
            <template v-else-if="status === 'sent'"> SENT </template>
            <template v-else> SUBMIT </template>
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "thealex991@gmail.com",
      subject: "",
      message: "",
      status: "submit",
    };
  },

  methods: {
    sendMail() {
      if (!this.subject || !this.message) {
        return alert("Please fill the form correctly!");
      }
      this.status = "sending";
      setTimeout(() => {
        this.status = "sent";
        setTimeout(() => {
          this.openMailPopup();
        }, 1000);
      }, 1500);
    },
    openMailPopup() {
      const { email, subject, message } = this;
      window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
      this.subject = "";
      this.message = "";
      this.status = "submit";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 120px 0;
  background-color: $background-100;
  @media only screen and (max-width: 768px) {
    padding: 60px 0;
  }
  &__inner {
    margin-inline: auto;
    width: 100%;
    max-width: 1490px;
    @media only screen and (min-width: 768px) {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, 6fr);
      grid-gap: 32px;
    }
    .contact {
      display: block;
      width: 100%;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    &--contact {
      width: 100%;
      max-width: 400px;
      margin-inline: auto;
      @media only screen and (max-width: 768px) {
        max-width: 500px;
      }
      .button {
        margin-top: 32px;
        margin-left: auto;
      }
    }
  }
}
</style>