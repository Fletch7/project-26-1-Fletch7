<script>
    let { data } = $props();

    //Fixes unsupported characters from displaying incorrectly from data retrieved from API (', " @ #')
    function decode(str) {
    const txt = document.createElement('textarea')
    txt.innerHTML = str;
    return txt.value;
}
</script>

{#each data.questions as q}
<h1>{decode(q.question)}</h1>
<h2>{decode(q.correct_answer)}</h2>
{/each}