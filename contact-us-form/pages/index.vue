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
            @blur="validateFirstName"
          />

          <span class="first-required">This field is required</span>
          <span class="first-invalid">Please enter a valid name</span>
        </div>

        <div class="input-wrapper">
          <label class="input-label">Last Name</label>
          <input
            type="text"
            v-model="newForm.lastName"
            @blur="validateLastName"
          />

          <span class="last-required">This field is required</span>
          <span class="last-invalid">Please enter a valid name</span>
        </div>

        <div class="input-wrapper">
          <label class="input-label">Email Address</label>
          <input type="text" v-model="newForm.email" @blur="validateEmail" />

          <span class="email-required">This field is required</span>
          <span class="email-invalid">Please enter a valid email</span>
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

          <span class="query-empty">Please select a query type</span>
        </div>

        <div class="input-wrapper">
          <label class="input-label">Message</label>
          <textarea v-model="newForm.message" />

          <span class="field-required">This field is required</span>
        </div>

        <div class="input-wrapper">
          <div class="input-item">
            <label>I consent to being contacted by the team</label>
            <input type="checkbox" v-model="newForm.agreedToContact" />
          </div>

          <div class="error-wrapper">
            <span class="checked-required">
              To submit this form, please consent to be contacted
            </span>
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

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

/////////////////////////////// composables
// handling animations
const useAnimateErrors = () => {
  const _EASE = "Power3.inOut";
  const _DU = 0.1;

  function animateErrorMsg(className: string) {
    $gsap.fromTo(
      className,
      { y: -10 },
      { y: 0, display: "block", ease: _EASE, duration: _DU }
    );
  }

  function hideErrorMsg(className: string) {
    $gsap.set(className, { display: "none" });
  }

  return { animateErrorMsg, hideErrorMsg };
};

const { animateErrorMsg, hideErrorMsg } = useAnimateErrors();

// first name validations
const useValidateFirstName = () => {
  const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ'`-]+$/;

  const isFirstNameValid = computed(() => namePattern.test(newForm.firstName));

  const validateFirstName = () => {
    if (newForm.firstName && !isFirstNameValid.value) {
      animateErrorMsg(".first-invalid");
    }

    if (!newForm.firstName) {
      animateErrorMsg(".first-required");
    }

    hideErrorMsg(".first-invalid, .first-required");
  };

  return { validateFirstName, isFirstNameValid };
};

const { validateFirstName, isFirstNameValid } = useValidateFirstName();

// last name validations
const useValidateLastName = () => {
  const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ'`-]+$/;

  const isLastNameValid = computed(() => namePattern.test(newForm.lastName));

  const validateLastName = () => {
    if (newForm.lastName && !isLastNameValid.value) {
      animateErrorMsg(".last-invalid");
    }

    if (!newForm.lastName) {
      animateErrorMsg(".last-required");
    }

    hideErrorMsg(".last-invalid, .last-required");
  };

  return { isLastNameValid, validateLastName };
};

const { isLastNameValid, validateLastName } = useValidateLastName();

// email validations
const useValidateEmail = () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isEmailValid = computed(() => emailPattern.test(newForm.email));

  const validateEmail = () => {
    if (newForm.email && !isEmailValid.value) {
      animateErrorMsg(".email-invalid");
    }

    if (!newForm.email) {
      animateErrorMsg(".email-required");
    }

    hideErrorMsg(".email-invalid, .email-required");
  };

  return { isEmailValid, validateEmail };
};

const { isEmailValid, validateEmail } = useValidateEmail();

// /////////////////////////// methods
const submitForm = () => {
  if (!newForm.firstName) animateErrorMsg(".first-required");
  if (!newForm.lastName) animateErrorMsg(".last-required");
  if (!newForm.email) animateErrorMsg(".email-required");
  if (!newForm.isGeneralReq && !newForm.isSupportReq)
    animateErrorMsg(".query-empty");
  if (!newForm.message) animateErrorMsg(".field-required");
  if (!newForm.agreedToContact) animateErrorMsg(".checked-required");

  console.log("endpoint's payload is: ", newForm);
};

// /////////////////////////// watchers
watch(
  () => newForm,
  (newVal) => {
    if (newVal.firstName && isFirstNameValid.value) {
      hideErrorMsg(".first-invalid, .first-required");
    }

    if (newVal.lastName && isLastNameValid.value) {
      hideErrorMsg(".last-invalid, .last-required");
    }

    if (newVal.email && isEmailValid.value) {
      hideErrorMsg(".email-invalid, .email-required");
    }

    if (newVal.message) {
      hideErrorMsg(".field-required");
    }

    if (newVal.agreedToContact) {
      hideErrorMsg(".checked-required");
    }

    if (newVal.isGeneralReq || newVal.isSupportReq) {
      hideErrorMsg(".query-required");
    }
  },
  { deep: true }
);
</script>

<style lang="scss">
@import "/assets/sass/pages/home-page.scss";
</style>
