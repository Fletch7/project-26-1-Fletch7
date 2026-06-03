<script>

    import { decode } from '$lib/utils.js';
    let { data } = $props();
    //Question number. Increases by 1 each time the player answers a question. Changing this automatically changes value for 'q'.
    let current = $state(0);
    let selected = $state(null);
    let correctAnswers = $state(0);
    let wrongAnswers = $state(0);
    let q = $derived(data.questions[current]);

    let answers = $derived([...q.incorrect_answers, q.correct_answer].sort());

    /*When user selects an answer, assigns (answer) the picked value. Compares picked value against values pulled from API.
      This function also updates how many questions the user gets wrong or right.*/
    //Tracking wrong answers not necessary. Amount of wrong answers obvious. To display amount of correct answers against total amount 
    //of questions asked during quiz.
    function pickAnswer(answer) {
        selected = answer;
        if (answer === q.correct.answer) {
            correctAnswers +=1;
        }
        else {
            wrongAnswers += 1;
        }
    }

    function nextQuestion() {
        current += 1;
        selected = null;
    }

</script>

<!--Counter displays number of question out of total number of questions.-->
<p class="questionCounter">Question {current + 1}/{data.questions.length}</p>
<p class ="correctlyAnswered">Correct answers: {correctAnswers}<p>
<p class ="incorrectlyAnswered">Wrong answers: {wrongAnswers}</p>

<!-- Displays current question via decode function to filter any unrecognised html entities.-->
<div class="question" >
    <h1>{decode(q.question)}</h1>
</div>

<!--Generates 4 potential answer buttons. 'correct_answer' is the key name for the correct answer pulled from the API.Page
-->
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

{#if selected}
    {#if selected === q.correct_answer}
        <p>That's the correct answer!</p>
    {:else}
        <p>That answer is incorrect.</p>
    {/if}
    <button onclick="{nextQuestion}">Next question</button>
{/if}

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
        background: #F4B41A;
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
        align-items: center;
    }
</style>