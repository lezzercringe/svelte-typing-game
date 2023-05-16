<script lang="ts">
  import { prevent_default } from "svelte/internal";
  import { textToArray } from "../misc/textToHtml";
  import { activeText } from "../store/textInputStore";
  import { keyDownHandler } from "../misc/keyDownHandler";
  import { onDestroy } from "svelte";
  
  let inputedText : string = "";
  let isError: boolean = false;
  let timerId: number;
  $: textArray = textToArray(inputedText)

  $: if(inputedText.length === 1) {
    timerId = setInterval(() => timer += 1, 1000)
  }

  const onKeyDown = (e : KeyboardEvent) => {
    [inputedText, isError] = keyDownHandler(inputedText, e.key)
  }
  export let wordsPerLine : number;
  export let timer : number;

  onDestroy(() => {
    clearInterval(timerId)
  })

</script>

<div class="textarea">
  <!-- {@html generatedHtml} -->
  {#each textArray as word, index}
    {#if index % wordsPerLine === 0}
    <br/>
    {/if}
    <span class={isError && index === textArray.length - 1 ? "mistake" : ""}>{word}</span>
  {/each}
  {#key textArray}
  <div class="beam" ></div>
  {/key}
  <div class="placeholder">
    {#each textToArray($activeText) as word, index}
      {#if index % wordsPerLine === 0}
        <br/>
      {/if}
      <span> {word}</span>
  {/each}
  </div>
</div>
<svelte:window on:keydown|prevent_default={(e) => onKeyDown(e)} />

<style lang="scss">
  @import '../assets/variables';
  .textarea {
    margin-top: 25px;
    font-size: 20px;
    width: 100%;
    height: 100px;
    position: relative;
  }

  span {
      white-space: pre;
    }

  .beam {
    position: absolute;
    padding-top: 2px;
    height: 20px;
    width: 1px;
    background: #fff;
    display: inline-block;
    transition: all .3s;
    transform: translate( -5px, 0);
  }

  .placeholder {
    opacity: .4;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .mistake {
    color: $mistake-color;
  }
  
</style>