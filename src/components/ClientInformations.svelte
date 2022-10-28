<script>

    export let informations = null;
    let removeMode = false
    let editMode = false
    let {name, firstName, phone, eMail} = informations;
    export let removeToList;
    export let updateList;

    /*
    function resetForm(){
        console.log("test")
        name = informations.name;
        firstName = informations.firstName;
        phone = informations.phone;
        eMail = informations.eMail;
    }
     */
    
    function saveNewItem() {
        const newItemChanges = {
            ...informations,
            name,
            firstName,
            phone,
            eMail,
            updated_at: Date.now()
        }
        editMode = false
        updateList(newItemChanges)
    }

</script>

<li class="card">
    <form class="infos edit">
        <div class="wrap multi">
            <div>
                <input class="name" class:editMode disabled={!editMode} on:input={(e)=>name = e.target.value}
                       value={name}>
                <input class="firstname" class:editMode disabled={!editMode} on:input={(e)=>firstName = e.target.value}
                       value={firstName}>
            </div>
        </div>
        <div class="wrap">
            <input class="phone" class:editMode disabled={!editMode} href={"tel:"+phone}
                   on:input={(e)=>phone = e.target.value}
                   value={phone}>
        </div>
        <div class="wrap">
            <input class="email" class:editMode disabled={!editMode} href={"mailto:"+eMail}
                   on:input={(e)=>eMail = e.target.value}
                   value={eMail}>
        </div>

    </form>

    <ul class="options">
        {#if removeMode}
            <li class="confirm" on:click={()=>{removeToList(informations.created_at)}}
                on:click={()=>{removeMode = false}}>Sure ?
            </li>
        {:else}
            <li on:click={()=>{removeMode = true}}>Remove</li>
        {/if}
        {#if editMode}
            <li on:click={()=>saveNewItem()}>Save</li>
        {:else}
            <li on:click={()=> editMode = true}>Edit</li>
        {/if}
    </ul>
</li>

<style lang="sass">
  li.card
    display: inline-flex
    padding: 1em
    border: 1px solid rgba($black, .25)

    form
      div.wrap
        input
          font-size: 1.25em
          border: 1px solid
          background: transparent
          border-color: rgba(red, .25)
</style>
