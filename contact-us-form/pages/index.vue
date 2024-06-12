<template>
  <section class="contact-us-page">
    <form @submit.prevent="submitForm">
      <h1>Contact Us</h1>

      <div class="inputs">
        <div class="input-wrapper">
          <label class="input-label">First Name</label>
          <input
            type="text"
            v-model="newForm.firstName"
            @change="validateFirstName"
          />

          <!-- the errors are display none and with gsap they're display blocked -->
          <!-- <span>This field is required</span> -->
          <!-- <span>Please enter a valid name</span> -->
        </div>

        <div class="input-wrapper">
          <label class="input-label">Last Name</label>
          <input
            type="text"
            v-model="newForm.lastName"
            @change="validateLastName"
          />

          <!-- <span>This field is required</span> -->
          <!-- <span>Please enter a valid name</span> -->
        </div>

        <div class="input-wrapper">
          <label class="input-label">Email Address</label>
          <input type="text" v-model="newForm.email" @change="validateEmail" />

          <!-- <span>This field is required</span> -->
          <!-- <span>Please enter a valid email</span> -->
        </div>

        <div class="input-wrapper">
          <label class="input-label">Query Type</label>

          <div class="general-req">
            <input type="radio" v-model="newForm.isGeneralReq" />
            <label>General Enquiry</label>
          </div>

          <div class="support-req">
            <input type="radio" v-model="newForm.isSupportReq" />
            <label>Support Request</label>
          </div>

          <span>Please select a query type</span>
        </div>

        <div class="input-wrapper">
          <label class="input-label">Message</label>
          <textarea v-model="newForm.message" />

          <!-- <span>This field is required</span> -->
        </div>

        <div class="input-wrapper">
          <label>I consent to being contacted by the team</label>
          <input type="checkbox" v-model="newForm.agreedToContact" />

          <!-- <span>To submit this form, please consent to be contacted</span> -->
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

const isFirstNameValid = ref<undefined | boolean>(undefined);
const isLastNameValid = ref<undefined | boolean>(undefined);
const isEmailValid = ref<undefined | boolean>(undefined);

// //////////////////////////// computed properties
// on submit
const hasEmptyField = computed(() => {
  return Object.entries(newForm).every(([_, val]) => val);
});

// //////////////////////////// statics
const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ'`-]+$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// /////////////////////////// methods
const validateFirstName = () => {
  return (isFirstNameValid.value = namePattern.test(newForm.firstName));
};

const validateLastName = () => {
  return (isLastNameValid.value = namePattern.test(newForm.lastName));
};

const validateEmail = () => {
  return (isEmailValid.value = emailPattern.test(newForm.email));
};

const submitForm = () => {
  if (!hasEmptyField) return;
};
</script>

<style lang="scss">
@import "/assets/sass/pages/home-page.scss";
</style>
