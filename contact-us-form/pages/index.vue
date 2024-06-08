<template>
  <section class="contact-us-page">
    <form>
      <h1>Contact Us</h1>

      <div class="inputs">
        <div class="input-wrapper">
          <label>First Name</label>
          <input type="text" v-model="newForm.firstName" />
        </div>

        <div class="input-wrapper">
          <label>Last Name</label>
          <input type="text" v-model="newForm.lastName" />
        </div>

        <div class="input-wrapper">
          <label>Email Address</label>
          <input type="text" v-model="newForm.email" />
        </div>

        <div class="input-wrapper">
          <label>Query Type</label>

          <div class="general-req">
            <input type="radio" v-model="newForm.isGeneralReq" />
            <label>General Enquiry</label>
          </div>

          <div class="support-req">
            <input type="radio" v-model="newForm.isSupportReq" />
            <label>Support Request</label>
          </div>
        </div>

        <div class="input-wrapper">
          <label>Message</label>
          <input type="text" v-model="newForm.message" />
        </div>

        <div class="input-wrapper">
          <label>I consent to being contacted by the team</label>
          <input type="checkbox" v-model="newForm.agreedToContact" />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script setup lang="ts">
// /////////////////////////// states
const newForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  isGeneralReq: false,
  isSupportReq: false,
  message: "",
  agreedToContact: undefined,
});
</script>

<style lang="scss">
@import "/assets/sass/pages/home-page.scss";
</style>
