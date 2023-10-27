<template>
  <form class="form">
    <div class="form__label">
      <label for="email" class="form__label__item">Email address</label>
      <span class="form__label__error" v-if="!validEmail"
        >Valid Email Required</span
      >
    </div>
    <input
      type="email"
      name="email"
      placeholder=" email@company.com"
      v-model="userEmail"
      @blur="ValidateEmail"
      :class="[{ 'form__input--error': !validEmail }, 'form__input']"
    />
    <button class="form__btn" @click.prevent="handleBtn()">
      Subscribe to monthly newsletter
    </button>
  </form>
</template>

<script setup lang="ts">
import axios from "axios";
const router = useRouter();

const userEmail = ref<string>("");
const validEmail = ref<boolean>(true);

async function handleBtn() {
  if(userEmail.value === ""){
    validEmail.value = false
  }
  const res = await axios.post("http://localhost:3000/users", {
    id: Math.floor(Math.random() * 10000),
    email: userEmail.value,
  });

  console.log(res);
}

function ValidateEmail() {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  validEmail.value = validRegex.test(userEmail.value);
  if (validRegex.test(userEmail.value)) {
    router.push("/success");
  }
}
</script>

<style lang="scss">
@import "/assets/scss/styles/app-form-desktop.scss";
@import "/assets/scss/styles/app-form-mobile.scss";
</style>
