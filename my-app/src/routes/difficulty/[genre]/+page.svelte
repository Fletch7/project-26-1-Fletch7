<script>
    let { params } = $props();
    const difficulties = ['Easy', 'Medium', 'Hard'];
</script>

<h1>{params.genre}</h1>

<nav class="difficulty-grid">
    {#each difficulties as d}
        <a href="/quiz/{params.genre}/{d.toLowerCase()}" class="btn">{d}</a>
    {/each}
</nav>