<template>
  <div class="dialog">
    <van-dialog v-model="$store.state.dialogShow" show-cancel-button>
      <h1>Holle --</h1>
      <p>This is demo app</p>
      <p>This is demo app</p>
      <p>This is demo app</p>
      <p>This is demo app</p>
    </van-dialog>
  </div>
</template>
<script>
import {Dialog} from "vant"
export default {
    name:'Dialog',
    components:{
        [Dialog.Component.name]: Dialog.Component
    }
}
</script>