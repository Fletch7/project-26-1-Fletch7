<script>
    let { data } = $props();
</script>

{#each data.question in q}
<h1>{q.question}</h1>
{/each}