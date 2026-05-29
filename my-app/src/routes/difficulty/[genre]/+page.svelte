<script>
    let { data } = $props();
    const difficulties = ['Easy', 'Medium', 'Hard'];
</script>

<div class="title">
    <h1>{data.genre}</h1>
    <p>Pick a difficulty</p>
</div>

<nav class="buttonGrid">
    {#each difficulties as d}
    <a href="/quiz/{data.genre}/{d.toLowerCase()}" class="btn">{d}</a>
    {/each}
</nav>