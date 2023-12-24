export const useSidebarStore = defineStore("sidebar", {
  state: () => ({ isSidebarExpanded: false }),
  actions: {
    toggleSidebar() {
      return (this.isSidebarExpanded = !this.isSidebarExpanded);
    },
  },
});
