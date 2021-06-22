<template>
   <div class="error-component">{{ msg }}</div>
</template>

<script>
   export default {
      name: 'cError',
      props: {
         msg: {
            type: 'String',
            default: 'Oooops('
         }
      }
   }
</script>

<style>
   .error-component {
      text-align: center;
      font-size: 22px;
   }
</style>