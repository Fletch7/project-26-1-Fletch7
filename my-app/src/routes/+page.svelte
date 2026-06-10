<script>
    const genre = ['Science', 'Geography', 'General Knowledge', 'History' ];
</script>

<div class='titleLayout'>
    <div class="title">
        <h1>Trivia Quiz</h1>
        <p>Test your knowledge with one of these quizzes!</p>
    </div>
</div>

<!--Populates grid with 4 genre buttons.-->
<nav class="buttonGrid">
    {#each genre as g}
    <a href="/difficulty/{encodeURIComponent(g)}" class="btn">{g}</a>
    {/each}
</nav>


<!--
Populates genre at the bottom of the page. Broken currently.
{#each genre as g}
    <a href="/quiz/{g}">{g}</a>
{/each}
-->


<!--
Colour scheme - background -> #1E252B
                text/headers -> #EAECEE
                buttons/results -> #F4B41A


-->


<style>
    .titleLayout {
        margin: auto;
        align-items: center;
        background: #9599be;
        width: 50vw;
        align-self: center;
    }

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        gap: 1rem;
        border-radius: 20; 
    }

    .buttonGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        width: 500px;
        margin: 2rem auto;
    }

    /*Sets style for all 'btn' classes site wide.
    'btn' used for genre/difficulty selection and answer selection.*/
    :global(.btn) {
        padding: 1.5rem;
        background: #84ffc9;
        color: rgb(24, 24, 24);
        border-radius: 8px;
        text-decoration: none;
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
    }

    .btn:hover {
        background: rgb(66, 189, 178);
    }

    .title p {
        font-size: 1.5rem;
    }

    .landingpage p {
        border-style: solid;
    }
</style>
