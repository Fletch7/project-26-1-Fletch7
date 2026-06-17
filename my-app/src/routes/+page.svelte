<script>
    const genre = ['Science', 'Geography', 'General Knowledge', 'History' ];
</script>

<header id='titleLayout'>
    <hgroup id="title">
        <h1>Trivia Quiz</h1>
        <p>Test your knowledge with one of these quizzes!</p>
    </hgroup>
</header>

<!--Populates grid with 4 genre buttons.'encodeURIComponent' used because this parameter used in API URL call. This accounts for the space in 'General Knowledge'. API call breaks if space not encoded-->
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
    .btn {
        border: 1px solid black;
    }

    #titleLayout {
        margin: auto;
        align-items: center;
        background: #9ad8d8;
        width: 40vw;
        align-self: center;
        border-radius: 20px;
        border: 1px solid black;
    }

    #title {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2rem;
        gap: 1rem;
        font-size: 1.5rem;
    }

    .buttonGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        width: 500px;
        margin: 2rem auto;
    }

    /*Sets style for all 'btn' classes site wide.
    'btn' used for genre/difficulty selection and answer selection. 'btn' can be overwritten locally if necessary.*/

    .btn:hover {
        background: rgb(66, 189, 178);
    }

</style>
