<template>
  <AppForm>
    <h3 class="form__title">Personal info</h3>
    <span class="form__subtitle"
      >Please provide your name, email address, and phone number.</span
    >

    <div class="form__inputs">
      <!-- ========= email ======== -->
      <div class="form__inputs__item">
        <div class="form__inputs__label">
          <label for="user-name">Name</label>
          <label for="user-name" v-show="isValid.name">Name is required</label>
        </div>

        <input
          type="text"
          name="user-name"
          v-model="userName"
          placeholder="e.g. Stephan King"
          @blur="handleUserNameInput"
        />
      </div>

      <!-- ========= email ======== -->
      <div class="form__inputs__item">
        <div class="form__inputs__label">
          <label for="user-email">Email Address</label>
          <label for="user-email" v-show="isValid.email"
            >Email Address is invalid</label
          >
        </div>

        <input
          type="email"
          name="user-email"
          v-model="userEmail"
          placeholder="e.g. stephanKing@lorem.com"
          @blur="handleUserEmailInput"
        />
      </div>

      <!-- ========= phone ======== -->
      <div class="form__inputs__item">
        <div class="form__inputs__label">
          <label for="user-phone">Phone Number</label>
          <label for="user-phone" v-show="isValid.phone"
            >Phone Number is required</label
          >
        </div>

        <input
          type="number"
          name="user-phone"
          v-model="userPhone"
          placeholder="e.g. +1 234 567 890"
          @blur="handleUserPhoneInput"
        />
      </div>
    </div>

    <AppButtons :is-back-btn-visible="isBackBtnVisible" />
  </AppForm>
</template>

<script setup lang="ts">
/////////////////////////////// interfaces
interface IValid {
  email: boolean | null;
  phone: boolean | null;
  name: boolean | null;
}

/////////////////////////////// states
const userName = ref<string | null>(null);
const userEmail = ref<string | null>(null);
const userPhone = ref<number | null>(null);

const isValid = ref<IValid>({
  email: null,
  phone: null,
  name: null,
});

const isBackBtnVisible = false;

////////////////////////////// methods
const handleUserEmailInput = () => {
  const emailReg: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isUserInputValid = emailReg.test(userEmail.value);
  if (!isUserInputValid || !userEmail.value) {
    return (isValid.value.email = true);
  } else {
    return (isValid.value.email = false);
  }
};

const handleUserNameInput = () => {
  const nameReg: RegExp = /^[a-zA-Z ]{2,30}$/;
  const isUserNameValid = nameReg.test(userName.value);
  if (!isUserNameValid || !userName.value) {
    return (isValid.value.name = true);
  } else {
    return (isValid.value.name = false);
  }
};

const handleUserPhoneInput = () => {
  const phoneReg: RegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const isUserPhoneValid = phoneReg.test(userPhone.value);
  if (!isUserPhoneValid || !userPhone.value) {
    return (isValid.value.phone = true);
  } else {
    return (isValid.value.phone = false);
  }
};
</script>

<style lang="scss" scoped>
@import "/assets/sass/components/Form/register-form.scss";
</style>
