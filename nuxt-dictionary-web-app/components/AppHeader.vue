<template>
  <header class="header flex justify-between items-center">
    <div class="header__logo">
      <img class="header__logo__item" src="/images/logo.svg" alt="logo" />
    </div>
    <div class="header__info flex items-center">
      <select
        class="header__select mr-[3rem] border border-current bg-white text-sm rounded-lg block w-full p-2.5 focus:ring-[#A445ED] focus:border-[#A445ED]">
        <option value="sans-serif" selected>Sans Serif</option>
        <option value="mono">mono</option>
        <option value="serif">Serif</option>
      </select>
      <label class="pr-[1rem] relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div
          class="w-11 h-6 bg-white border border-[#A445ED] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#A445ED] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A445ED] peer-checked:after:bg-white peer-checked:border-none"
        ></div>
      </label>
      <img class="header__theme" src="/images/icon-moon.svg" alt="moon icon" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "/assets/scss/Components/header.scss";
</style>
