<template>
  <div id="app">
    <HelloWorld v-bind:msg="'The New Value: ' + ready" />
    <input
      v-model="text"
      v-on:keyup.enter="
        {
          {
            ready = text;
          }
        }
      "
      ref="input"
    />
    <button
      @click="
        {
          {
            ready = text;
          }
        }
      "
    >
      Change
    </button>
  </div>
</template>

<script>
import App from './App-util';

export default {
  name: 'App',
  ...App(),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hello-things {
  background-color: red;
}
</style>
