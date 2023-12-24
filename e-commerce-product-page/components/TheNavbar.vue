<script lang="ts" setup>
import { ShoppingCart } from "@element-plus/icons-vue";

////////////////////////////// sidebar store
import { useSidebarStore } from "~/store/sidebar";
const sidebarStore = useSidebarStore();
const { toggleSidebar } = sidebarStore;
const { isSidebarExpanded } = storeToRefs(sidebarStore);

///////////////////////////// static data
const sidebarRoutes = [
  { id: 1, name: "collection", url: "index" },
  { id: 2, name: "men", url: "index" },
  { id: 3, name: "women", url: "index" },
  { id: 4, name: "about", url: "index" },
];
</script>

<template>
  <header>
    <nav>
      <div class="left">
        <div class="menu-icon">
          <NuxtImg
            src="/images/icon-menu.svg"
            v-show="!isSidebarExpanded"
            @click="toggleSidebar"
          />

          <NuxtImg
              src="/images/icon-close.svg"
              v-show="isSidebarExpanded"
              class="close-icon"
              @click="toggleSidebar"
            />
        </div>

        <div class="logo">
          <NuxtImg src="/images/logo.svg" />
        </div>
      </div>

      <div class="right">
        <el-icon>
          <ShoppingCart />
        </el-icon>

        <div class="avatar">
          <NuxtImg src="/images/image-avatar.png" />
        </div>
      </div>
    </nav>

    <aside v-show="isSidebarExpanded" class="sidebar-wrapper">
      <div class="sidebar">
        <ul class="routes">
          <li v-for="route in sidebarRoutes" :key="route.id">
            <NuxtLink :to="{ name: route.url }">{{ route.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </aside>
  </header>
</template>

<style lang="scss">
@import "/sass/components/Navbar/navbar.scss";
</style>
