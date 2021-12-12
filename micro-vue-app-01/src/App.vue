<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/hello-world">404</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: calc(100vh - 50px);
  overflow: auto;
  color: #2c3e50;
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
</style>
