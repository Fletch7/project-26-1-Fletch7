<script>
    let { data } = $props();
</script>

{#each data.questions as q}
<h1>{q.question}</h1>
{/each}