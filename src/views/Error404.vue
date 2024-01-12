<template>
  <div class="not-found">
    <h1 class="section-title">Error 404</h1>
    <h4>
      <a href="/">Volver a la página de inicio.</a>
    </h4>
  </div>
</template>

<script>
export default {
  name: "Error404",
  components: {},
};
</script>
<style lang="scss">
  .not-found {
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    padding: 84px 5%;
  }
  a{
    color: var(--text-color);
  }
</style>