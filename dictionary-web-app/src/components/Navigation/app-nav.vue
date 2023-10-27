<template>
    <nav class="nav">
        <div class="nav__logo">
            <img :src="navLogo" alt="book logo"/>
        </div>
        <div class="nav__content">
            <select
                    v-model="selectedFont"
                    class="nav__select border-solid bg-inherit w-40 text-gray-900 text-sm rounded-lg dark:bg-white dark:border-white"
            >
                <option
                        :style="{ fontFamily: 'sans-serif' }"
                        selected
                        value="sans-serif"
                >
                    Sans Serif
                </option>
                <option :style="{ fontFamily: 'serif' }" value="serif">serif</option>
                <option :style="{ fontFamily: 'mono' }" value="mono">mono</option>
            </select>
            <div class="nav__divider"></div>
            <label
                    class="nav__toggle relative inline-flex items-center cursor-pointer"
            >
                <input class="sr-only peer" type="checkbox" @click="toggleDark()"/>
                <div
                        class="w-11 h-6 bg-[#757575] peer-focus:outline-none peer-focus:bg-[#A445ED] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A445ED]"
                ></div>
            </label>
            <div class="nav__img">
                <img :src="navMoon" alt="moon logo" class="nav__img__moon"/>
            </div>
        </div>
    </nav>
</template>

<script setup>
import logo from "/src/assets/images/logo.svg";
import iconMoon from "/src/assets/images/icon-moon.svg";

import {ref} from "vue";
import {computed} from "@vue/reactivity";
import {useStore} from "vuex";
import {useDark, useToggle} from '@vueuse/core';


const store = useStore()

const navLogo = ref(logo)
const navMoon = ref(iconMoon)

const isDark = useDark();
const toggleDark = useToggle(isDark);

const selectedFont = computed({
    get() {
        return store.state.selectedFont;
    },
    set(newVal) {
        store.dispatch("setNewFont", newVal);
    },
})
</script>

<style lang="scss">
@import "./app-nav-desktop.scss";
@import './app-nav-mobile.scss';
</style>

