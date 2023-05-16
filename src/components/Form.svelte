<script lang="ts">
  import Misc from "./Misc.svelte";
  import TextArea from "./TextArea.svelte";

  let wordsPerLine = 9;

  // export let TextsList : string[];
</script>

<div class="form">
  <Misc />
  <TextArea {wordsPerLine}/>
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