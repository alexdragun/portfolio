<template>
  <section class="container-wrapper">
    <div class="container">
      <div style="padding: 0 20px">
        <h2>Contact me</h2>
      </div>
      <form class="form-container"
            @submit.prevent="sendMail">
        <label for="subject">Subject</label>
        <input
          v-model="subject"
          id="subject"
          type="text"
          placeholder="Type subject"
          :class="{ filled: subject }"
        >
        <label for="message">Subject</label>
        <textarea v-model="message"
                  id="message"
                  placeholder="Type message"
                  :class="{ filled: message }" />
        <button type="submit"
                :class="{ sent: status === 'sent' }">
          <template v-if="status === 'sending'">
            Sending...
          </template>
          <template v-else-if="status === 'sent'">
            Sent
          </template>
          <template v-else>
            {{ status }}
          </template>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      email: 'thealex991@gmail.com',
      subject: '',
      message: '',
      status: 'submit'
    }),
    methods: {
      sendMail () {
        if (!this.subject || !this.message) {
          return alert('Please fill the form correctly!')
        }
        this.status = 'sending'
        setTimeout(() => {
          this.status = 'sent'
          setTimeout(() => {
            this.openMailPopup()
          }, 1000)
        }, 1500)
      },
      openMailPopup () {
        const { email, subject, message } = this
        window.location.href = `mailto:${email}?subject=${subject}&body=${message}`
        this.subject = ''
        this.message = ''
        this.status = 'submit'
      }
    }
  }
</script>

<style lang="scss" scoped>
.container-wrapper {
  padding: 120px 0 100px;
  @media only screen and (max-width: 768px) {
    padding: 80px 0 50px;
  }
  .container {
    padding: 0 !important;
    h2 {
      position: relative;
      margin: 0 auto;
      padding: 0 5px;
      width: fit-content;
      background-color: $primary_light;
      @media only screen and (max-width: 400px) {
        font-size: 28px;
      }
      &:before {
        content: '';
        display: block;
        width: 50px;
        height: 30px;
        background-color: $primary_color;
        z-index: -1;
        @include fullscreen(absolute, -7px, initial, initial, -7px);
      }
    }
    .form-container {
      padding: 0 20px;
      margin: 40px auto 0;
      width: calc(100% - 40px);
      max-width: 600px;
      label {
        display: block;
        margin-bottom: 5px;
        font-size: 18px;
      }
      input {
        width: calc(100% - 24px);
        font-family: $font_varela;
        padding: 10px;
        margin-bottom: 20px;
        outline: none;
        font-size: 16px;
        border: 1px solid $primary_black;
        @include border-radius(5px);
        &:focus {
          border-color: $primary_color;
        }
        &.filled {
          border-color: $primary_color !important;
        }
      }
      textarea {
        width: calc(100% - 22px) !important;
        max-width: 576px;
        min-height: 150px;
        padding: 10px;
        font-family: $font_varela;
        outline: none;
        font-size: 16px;
        border: 1px solid $primary_black;
        @include border-radius(5px);
        &:focus {
          border-color: $primary_color;
        }
        &.filled {
          border-color: $primary_color !important;
        }
      }
      button {
        cursor: pointer;
        margin-top: 20px;
        text-transform: uppercase;
        text-align: center;
        width: 100%;
        padding: 10px 20px;
        background-color: $primary_light;
        border: 2px solid $primary_color;
        font-size: 14px;
        letter-spacing: 1px;
        color: $primary_black;
        outline: none;
        @include border-radius(5px);
        @include transition(0.3s);
        @include fontSemiBold;
        &:hover {
          color: $primary_light;
          background-color: $primary_color;
        }
        &.sent {
          color: $primary_light !important;
          background-color: $primary_color !important;
        }
      }
    }
  }
}
</style>
