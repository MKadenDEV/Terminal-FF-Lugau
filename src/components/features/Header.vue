<template>
	<div class="container">
  <h1 class="neon">{{ Text }}</h1>
</div>
</template>

<script>
export default {
  props: {
    Text: {
      type: String,
    }
  }
}
</script>

<style scoped>
.neon {
  color: #ffffffe6;
  text-shadow:
    0 0 20px #fff,
    0 0 40px #0ff,
    0 0 80px #0ff,
    0 0 90px #0ff,
    0 0 100px #0ff,
    0 0 150px #0ff;
}

:root {
  font-size: calc(1vw + 1vh + 1.5vmin);
}

h1 {
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}

</style>