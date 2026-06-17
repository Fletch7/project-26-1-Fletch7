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
        .buttonGrid a {
            border: 1px solid black;
            display: flex;
            justify-content: center;
            width: 500px;
            margin: 2rem auto;
            text-align: center;
    }

        .title {
            display: flex;
            margin: auto;
            flex-direction: column;
            align-items: center;
            background: #d3d3d3;
            width: 50vw;
            align-self: center;
            border-radius: 20px;
            font-size: 1.5rem;
            padding-top: 2rem;
    }

</style>