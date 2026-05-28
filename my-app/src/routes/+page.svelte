<script>
    const genre = ['science', 'geograpgy', 'general knowledge', 'history' ];
</script>

<h1>First attempt</h1>
<p>Seeing where paragraphs land.</p>

{#each genres as genre}
    <a href="/quiz/[genre]">Genre</a>
{/each}
<GenreCard label="Science" href="/quiz/science" />


<div class="quizlayout">
    <p>This is where the layout is going to go.</p>
</div>


<style>
    .quizlayout p {
        border-style: solid;
        width: 75vw;
        height: 75vh;
    }
    .quizlayout border {
        border-radius: 10;
    }
</style>
