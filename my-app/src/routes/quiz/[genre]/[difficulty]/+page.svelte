<script>

    import { decode } from '$lib/utils.js';
    let { data } = $props();
    //Question number. Increases by 1 each time the player answers a question. Changing this automatically changes value for 'q'.
    let current = $state(0);
    let selected = $state(null);
    let correctAnswers = $state(0);
    let wrongAnswers = $state(0);
    let q = $derived(data.questions[current]);

    //'finished' swaps to true once the next current question number is larger than the list of questions (10).
    let finished = $state(false);

    let answers = $derived([...q.incorrect_answers, q.correct_answer].toSorted());

    /*When user selects an answer, assigns (answer) the picked value. Compares picked value against values pulled from API.
      This function also updates how many questions the user gets wrong or right.
      Tracking wrong answers not necessary. Amount of wrong answers obvious. To display amount of correct answers against total amount 
      of questions asked during quiz.*/

    function pickAnswer(answer) {
        selected = answer;
        if (answer === q.correct_answer) {
            correctAnswers += 1;
        }
        else {
            wrongAnswers += 1;
        }
    }

    function nextQuestion() {
        if (current +1 >= data.questions.length) {
            finished = true;
        }

        else {
        current += 1;
        selected = null;
        }
    }




</script>

<!--Counter displays number of question out of total number of questions.-->
<p class="questionCounter">Question {current + 1}/{data.questions.length}</p>
<p class ="correctlyAnswered">Correct answers: {correctAnswers}</p>
<p class ="incorrectlyAnswered">Wrong answers: {wrongAnswers}</p>

<!-- Displays current question via decode function to filter any unrecognised html entities.-->
<div class="question" >
    <h1>{decode(q.question)}</h1>
</div>

<!--Generates 4 potential answer buttons. 'correct_answer' is the api key name for the correct answer pulled from the API.Page-->
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


<!--Main loop. Runs until the current questions variable is equal to the amount of questions(data.questions.length). 
    'finished' then flips to true, and the first chunk of this if statement runs.-->
{#if finished}
    <h1>Quiz complete!</h1>
    <p>You got {correctAnswers}/{data.questions.length} questions correct.</p>
    <a href="/" class="newGameBtn">New Game</a>
{:else}
    {#if selected}
        <section class="answerResult">
            {#if selected === q.correct_answer}
                <p class="correctAnswer">That answer is correct!</p>   
            {:else}
                <p class="incorrectAnswer">That answer is incorrect.</p>
                <p>The correct answer is {q.correct_answer}</p>
            {/if}
            <button class ="nextQuestion" onclick="{nextQuestion}">Next question</button>
        </section>
    {/if}
{/if}

<style>
    .buttonGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        width: 500px;
        margin: 2rem auto;
        border-radius: 8px;
    }

    .buttonGrid button {
        text-transform: capitalize;
        padding: 1.5rem;
        background: #84ffc9;
        color: black;
        border-radius: 8px;
        text-decoration: none;
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
    }

    .buttonGrid button.correct {
        background: green;
    }

    .buttonGrid button.wrong {
        background: red;
    }
    

    .question {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        gap: 1rem;        
        align-items: center;
    }

    .correctAnswer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        gap: 1rem;
        border-radius: 20; 
        font-size: 1.5rem;
        background: green;
        align-content: center;
    }

        .incorrectAnswer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        gap: 1rem;
        border-radius: 20; 
        font-size: 1.5rem;
        align-content: center;
        border-radius: 8px;
    }

    .nextQuestion {
        padding: 1.5rem;
        background: #84ffc9;
        color: rgb(24, 24, 24);
        border-radius: 20px;
        text-decoration: none;
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
    }
</style>