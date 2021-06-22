<template>
   <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" :id="checkGroup"
             @change="onCheckChange($event)"
      >
      <label class="form-check-label" :for="checkGroup">
         <slot></slot>
      </label>
   </div>
</template>

<script>
   export default {
      name: 'cCheckBox',
      props: {
         checkGroup: {
            type: String,
            required: true
         },
      },
      methods: {
         onCheckChange(e) {
            this.$emit('onCheckChange')
         }
      }
   }
</script>