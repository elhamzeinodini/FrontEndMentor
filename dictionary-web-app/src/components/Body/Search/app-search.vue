<template>
  <div class="search relative w-[50vw]" :style="fontStyle">
    <input
      v-model="inputWord"
      type="search"
      class="search__input block rounded-lg p-4 w-full z-20 text-sm text-gray-900 border-hidden focus:ring-[#A445ED] focus:border-[#A445ED]"
      placeholder="Search for any word..."
      required
    />
    <button
      @click="getTheMeaning()"
      type="submit"
      class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-lg"
    >
      <svg
        aria-hidden="true"
        class="search__svg w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </button>
  </div>
  <app-content
    :wordPhonetic="wordPhonetic"
    :wordText="wordText"
    :fontStyle="fontStyle"
    :wordAudio="wordAudio"
    :showAudio="showAudio"
    :partArray="partArray"
    :defArrayNoun="defArrayNoun"
    :defArrayAdj="defArrayAdj"
    :defArrayVerb="defArrayVerb"
    :defArrayInterject="defArrayInterject"
  ></app-content>
</template>

<script setup>
import appContent from "../Content/app-content.vue";
import { computed } from "@vue/reactivity";
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const fontStyle = computed({
  get() {
    return { fontFamily: store.state.selectedFont };
  },
});

const inputWord = ref("");
const wordPhonetic = ref("");
const wordText = ref("");
const wordAudio = ref("");
const partArray = ref([]);
const showAudio = ref(false);
const defArrayNoun = ref([]);
const defArrayAdj = ref([]);
const defArrayVerb = ref([]);
const defArrayInterject = ref([]);

async function getTheMeaning() {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord.value}`;
  inputWord.value = "";
  try {
    const { data } = await axios.get(url);
    // console.log(data);
    data.map(({ phonetic, word, meanings, phonetics }) => {
      wordPhonetic.value = phonetic;
      wordText.value = word;
      phonetics.forEach(({ audio }) => {
        showAudio.value = true;
        wordAudio.value = audio;
      });
      meanings.map(({ partOfSpeech }) => {
        partArray.value.push(partOfSpeech);
      });
      meanings.filter(({ partOfSpeech, definitions }) => {
        if (partOfSpeech === "noun") {
          defArrayNoun.value.push(definitions);
        }
        if (partOfSpeech === "verb") {
          defArrayVerb.value.push(definitions);
        }
        if (partOfSpeech === "adjective") {
          defArrayAdj.value.push(definitions);
        }
        if (partOfSpeech === "interjection") {
          defArrayInterject.value.push(definitions);
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
}
</script>

<style lang="scss">
@import "./app-search-desktop.scss";
@import './app-search-mobile.scss';
</style>
