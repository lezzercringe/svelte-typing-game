<script lang="ts">
  import Misc from "./Misc.svelte";
  import TextArea from "./TextArea.svelte";
  let timer = 0;
  let wordsPerLine = 9;

  // export let TextsList : string[];
</script>

<div class="form">
  <Misc {timer}/>
  <TextArea bind:timer {wordsPerLine}/>
</div>


<style lang="scss">
  .form {
    width: 900px;
    height: 340px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>