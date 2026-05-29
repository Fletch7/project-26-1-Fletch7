<script>
    const genre = ['Science', 'Geography', 'General Knowledge', 'History' ];
</script>

<div class="title">
    <h1>Trivia Quiz</h1>
    <p>Test your knowledge with one of these quizzes!</p>
</div>

<!--Populates grid with 4 genre buttons.-->
<nav class="buttonGrid">
    {#each genre as g}
    <a href="/difficulty/{g}" class="btn">{g}</a>
    {/each}
</nav>


<!--
Populates genre at the bottom of the page. Broken currently.
{#each genre as g}
    <a href="/quiz/{g}">{g}</a>
{/each}
-->





<style>
    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        gap: 1rem;
    }

    .buttonGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        width: 500px;
        margin: 2rem auto;
    }

    .btn {
        padding: 1.5rem;
        background: royalblue;
        color: white;
        border-radius: 8px;
        text-decoration: none;
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
    }

    .btn:hover {
        background: darkblue;
    }

    .title p {
        font-size: 1.5rem;
    }

    .landingpage p {
        border-style: solid;
    }
</style>
