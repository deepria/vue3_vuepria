<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/get">Get</router-link> |
<!--      <router-link to="/add-user">Add User</router-link> -->
    </nav>
    <router-view /> <!-- 라우트 컴포넌트를 렌더링 -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
</style>
