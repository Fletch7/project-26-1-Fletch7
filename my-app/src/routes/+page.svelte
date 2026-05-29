<script>
    const genre = ['science', 'geograpgy', 'general knowledge', 'history' ];
</script>

<div class="title">
    <h1>Trivia Quiz</h1>
    <p>Test your knowledge with one of these quizzes!</p>
</div>
{#each genre as genres}
    <a href="/quiz/[genre]">Genre</a>
{/each}





<style>
    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100vh;
        gap: 1rem;
    }

    .title p {
        font-size: 1.5rem;
    }

    .landingpage p {
        border-style: solid;
    }
</style>
