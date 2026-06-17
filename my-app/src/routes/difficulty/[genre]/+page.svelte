<script>
    let { data } = $props();
    const difficulties = ['Easy', 'Medium', 'Hard'];
</script>

<header class="title">
    <h1>{data.genre}</h1>
    <p>Pick a difficulty</p>
</header>

<nav class="buttonGrid">
    {#each difficulties as d}
    <a href="/quiz/{encodeURIComponent(data.genre)}/{d.toLowerCase()}" class="btn">{d}</a>
    {/each}
</nav>


<style>
        .buttonGrid {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 4rem;
        width: 500px;
        margin: 2rem auto;
    }
</style>