<script>
    import ClientInformations from "./ClientInformations.svelte";
    import {onMount} from "svelte";
    import Aside from "./Aside.svelte";
    import SearchBar from "./SearchBar.svelte";

    let datas = [];
    let datasFiltred = []

    function addToList(item) {
        datas = [...datas, item];

        localStorage.setItem(
            "clientsInformations",
            JSON.stringify(datas)
        );
        filtredInfos(datas)
    }

    function removeToList(date_now) {
        datas = datas.filter(item => item.created_at !== date_now)
        localStorage.setItem(
            "clientsInformations",
            JSON.stringify(datas)
        );
        filtredInfos(datas)
    }

    function updateList(updatedItem) {
        let index = datas.findIndex(item => item.created_at === updatedItem.created_at)
        datas[index] = updatedItem
        localStorage.setItem(
            "clientsInformations",
            JSON.stringify(datas)
        );
        filtredInfos(datas)
    }

    function filtredInfos(filtredInfos) {
        datasFiltred = filtredInfos
    }

    onMount(() => {
        datas = localStorage.getItem("clientsInformations")
            ? JSON.parse(localStorage.getItem("clientsInformations"))
            : [];
        datasFiltred = datas
    });

    $: console.log("datas search :", datasFiltred)
</script>
<section class="listing">
    {#if datas.length > 1 || datasFiltred.length > 1}
        <SearchBar datas={datas} {filtredInfos}>
            <p>{datasFiltred.length} results</p>
        </SearchBar>
    {/if}
    {#if datas.length > 0 || datasFiltred.length > 0}
        <ul class="listing">
            {#each datasFiltred as item (item.created_at)}
                <ClientInformations informations={item} {removeToList} {updateList}/>
            {/each}
        </ul>
    {:else}
        <p>rien</p>
    {/if}
</section>
<Aside {addToList}/>
