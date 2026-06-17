<script>
    import { goto } from '$app/navigation';
    import { getRemainingCooldown } from '$lib/cooldown.js';

    let { data } = $props();
    const difficulties = ['Easy', 'Medium', 'Hard'];

    let remaining = $state(0);

    $effect(() => {
        remaining = getRemainingCooldown();
        const interval = setInterval(() => {
            remaining = getRemainingCooldown();
        }, 1000);
        return () => clearInterval(interval);
    })

    function pick(d) {
        if (remaining > 0) return;
        goto(`/quiz/${encodeURIComponent(data.genre)}/${d.toLowerCase()}`);
    }

    
</script>

<header class="title">
    <h1>{data.genre}</h1>
    <p>Pick a difficulty</p>
</header>

<nav class="buttonGrid">
    {#each difficulties as d}
        <button class="btn" disabled={remaining > 0} onclick={() => pick(d)}>
            {d}{remaining > 0 ? ` (${Math.ceil(remaining / 1000)}s)` : ''}
        </button>
    {/each}
</nav>


<style>
    .buttonGrid button {
        border: 1px solid black;
        display: flex;
        justify-content: center;
        width: 500px;
        margin: 2rem auto;
        text-align: center;
    }

    .buttonGrid button:hover {
        background: rgb(66, 189, 178);
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