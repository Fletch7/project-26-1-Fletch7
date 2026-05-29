<script>


    let { data } = $props();
    let current = $state(0);
    let q = $derived(data.questions[current]);
    let selected = $state(null);

    /*I used Ai to generate this decode function. Swaps HTML character entities with &, <, >, " and '*/
    function decode(str) {
        return str
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");
    }
    let answers = $derived([...q.incorrect_answers, q.correct_answer].sort());

    function pickAnswer(answer) {
        selected = answer;
    }
</script>

<div class="quiz">
    <div class="progress">Question {current + 1} of {data.questions.length}</div>

    <div class="question">{decode(q.question)}</div>
</div>

{#each answers as answer}
    <button 
    onclick={() => pickAnswer(answer)}
    disabled={selected !== null}
    
    class:correct={selected && answer === q.correct_answer}
    class:wrong={selected && answer !== q.correct_answer && answer === selected}
    >
    {decode(answer)}
    </button>
{/each}

<style>
    button.correct {
        background: white;
        color: green;
    }

    button.wrong {
        background: white;
        color: red;
    }
</style>