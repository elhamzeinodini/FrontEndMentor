<template>
  <section class="success">
    <div class="success__content">
      <div class="success__info">
        <img
          class="success__img"
          src="/images/icon-success.svg"
          alt="success icon"
        />
        <h3 class="success__title">Thanks for subscribing!</h3>
        <p class="success__subtitle">
          A confirmation email has been sent to
          <b>ash@loremcompany.com.</b> Please open it and click the button
          inside to confirm your subscription.
        </p>
      </div>
      <div class="success__btn">
        <button class="success__btn" @click="$router.back()">
          Dismiss message
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "/assets/scss/styles/app-success-desktop.scss";
@import "/assets/scss/styles/app-success-mobile.scss";
</style>
