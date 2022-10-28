<script>
    export let value = "Button";
    export let type = "primary";
    export let className = "";
    export let icon = "";
</script>

<button class={className + " " + type} on:click>
    {#if icon}
        <span class="material-symbols-outlined" title={value}>{icon}</span>
    {/if}
    {value}
</button>

<style lang="sass">
  button
    background-color: $mainColor
    color: $white
    padding: .25em 1em
    border-radius: 2px
    transition: all ease-in-out 150ms
    border: none
    font-size: 24px
    display: inline-flex
    align-items: center
    gap: .25em

    &:hover, &:focus
      cursor: pointer
      background-color: $mainColorTarget
</style>
