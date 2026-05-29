<script>

    import { decode } from '$lib/utils.js';
    let { data } = $props();
    //Question number. Increases by 1 each time the player answers a question. Changing this automatically changes value for 'q'.
    let current = $state(0);
    let selected = $state(null);
    let q = $derived(data.questions[current]);

    let answers = $derived([...q.incorrect_answers, q.correct_answer].sort());

    function pickAnswer(answer) {
        selected = answer;
    }

    
</script>

<div class="question" >
    <h1>{decode(q.question)}</h1>
</div>

<nav class="buttonGrid">
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
</nav>

<style>
    .buttonGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        width: 500px;
        margin: 2rem auto;
    }

    .buttonGrid button {
        text-transform: capitalize;
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

    .question {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        gap: 1rem;        
    }
</style>