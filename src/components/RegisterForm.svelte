<script>
    import PrimaryButton from "./PrimaryButton.svelte";

    export let active = false;
    export let addToList;

    let name = null;
    let firstName = null;
    let phone = null;
    let eMail = null;

    function resetForm() {
        name = null;
        firstName = null;
        phone = null;
        eMail = null;
    }

    function submitForm() {
        const clientInformations = {
            name,
            firstName,
            phone,
            eMail,
            created_at: Date.now()
        };
        addToList(clientInformations);
        resetForm();
    }

</script>

<form class="RegisterForm" class:active on:submit|preventDefault={submitForm} on:submit|preventDefault>
    <p class="wrapper">
        <label class="focus" for="name">Name</label>
        <input
                id="name"
                on:input={(e) => {
                name = e.target.value;
            }}
                required
                type="text"
                value={name}
        />
    </p>
    <p class="wrapper">
        <label for="firstName">First Name</label>
        <input
                id="firstName"
                on:input={(e) => {
                firstName = e.target.value;
            }}
                required
                type="text"
                value={firstName}
        />
    </p>
    <p class="wrapper">
        <label for="phone">Phone number</label>
        <input
                id="phone"
                on:input={(e) => {
                phone = e.target.value;
            }}
                required
                type="tel"
                value={phone}
        />
    </p>
    <p class="wrapper">
        <label for="eMail">eMail</label>
        <input
                id="eMail"
                on:input={(e) => {
                eMail = e.target.value;
            }}
                required
                type="email"
                value={eMail}
        />
    </p>
    <p class="wrapper">
        <PrimaryButton icon="add_circle" type="secondary" value="Register"/>
    </p>
</form>

<style lang="sass">
  form
    display: flex
    align-items: center
    justify-content: space-between
    gap: 1em

    p
      position: relative
      flex-basis: calc(100% / 5)

      label
        position: absolute
        //top: 0
        //bottom: 0
        left: .25em
        //margin: auto 0
        //font-size: 24px
        display: flex
        align-items: center

        top: .25em
        bottom: inherit
        margin: 0
        font-size: 1em

        &.focus
          top: .25em
          bottom: inherit
          margin: 0
          font-size: 1em

      input
        color: $black
        padding: 1em 1em .25em .25em
        border-radius: 2px
        transition: all ease-in-out 150ms
        font-size: 24px
        border: 1px solid $mainColor
        width: 100%
        box-sizing: border-box

      input:focus ~ label
        color: red

</style>
