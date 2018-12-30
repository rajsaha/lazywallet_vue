<template>
  <div id="app">
    <router-view/>
    <!-- Bottom Bar -->
    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="/" md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/" md-label="Regulars" md-icon="replay"></md-bottom-bar-item>
        <md-bottom-bar-item to="/status" md-label="Status" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import "@/assets/scss/app.scss";
</style>
