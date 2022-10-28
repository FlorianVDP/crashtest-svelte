<script>
    import RegisterForm from "./RegisterForm.svelte";
    import {fly} from "svelte/transition"

    export let addToList = () => {
    };

    let asideState = false;


</script>

<aside>
    <span class="floating__button material-symbols-outlined" on:click={()=>asideState = !asideState}
          title={asideState ? "Close panel" : "Open panel"}>{asideState ? "close" : "add"}</span>
    {#if asideState}
        <div transition:fly>
            <RegisterForm {addToList}/>
        </div>
    {/if}
</aside>

<style lang="sass">
  aside
    position: fixed
    right: 1em
    bottom: 1em
    left: 1em
    margin: auto 0
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    gap: 1em

    span.floating__button
      background-color: $mainColor
      color: $white
      padding: .25em 1em
      border-radius: 2px
      transition: all ease-in-out 150ms
      display: flex
      align-items: center

      &:hover, &:focus
        cursor: pointer
        background-color: $mainColorTarget


</style>
