<script>
    let wordToSearch = "";
    export let datas = [];
    export let filtredInfos = (infos) => {
    }
    let filtredInfosSize = 0;

    const stringifyWord = (word) => {
        if (word) {
            let wordStringified = word;
            wordStringified = wordStringified.toLowerCase()
            wordStringified = wordStringified.replaceAll(" ", "")
            return wordStringified
        }
    }
    const search = (value) => {
        wordToSearch = value;
        const filterMode = datas.filter(item => stringifyWord(item.name + item.firstName + item.phone + item.eMail).includes(stringifyWord(wordToSearch)));
        if (wordToSearch && filterMode.length > 0) {
            filtredInfos(filterMode)

        } else if (wordToSearch && filterMode.length === 0) {
            filtredInfos([])
        } else {
            filtredInfos(datas)
        }
    }
</script>
<div class="search_module">
    <input on:input={(e)=>search(e.target.value)} placeholder="Search..." type="search" value={wordToSearch}>
    <slot></slot>
</div>

