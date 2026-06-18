<script>
    import { decode } from '$lib/utils.js';
    let { data } = $props();

    //Current is the current question number. Increases by 1 each time the player answers a question. Changing this automatically changes value for 'q'.
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
<quizstats id="quizStats">
    <p class="questionCounter">Question {current + 1}/{data.questions.length}</p>
    <p class ="correctlyAnswered">Correct answers: {correctAnswers}</p>
    <p class ="incorrectlyAnswered">Incorrect answers: {wrongAnswers}</p>
</quizstats>

<!-- Displays current question via decode function to filter any unrecognised html entities.-->
<div class="question" >
    <h1>{decode(q.question)}</h1>
</div>

<!--Generates 4 potential answer buttons. 'correct_answer' is the api key name for the correct answer pulled from the API.Page-->
<nav class="buttonGrid">
    {#each answers as answer}
        <button class="answerButton"
            onclick={() => pickAnswer(answer)}
            disabled={selected !== null}
            class:correct={selected && answer === q.correct_answer}
            class:wrong={selected && answer !== q.correct_answer && answer === selected}
        >
        {decode(answer)}
        </button>       
    {/each}
</nav>

<!-- Main loop. Runs until the current questions variable is equal to the amount of questions(data.questions.length). 
    'finished' then flips to true, and the first chunk of this if statement runs. -->

{#if finished}
    <section class="quizResults">
        <h1>Quiz complete!</h1>
        <p>You got {correctAnswers}/{data.questions.length} questions correct.</p>
            {#if correctAnswers === data.questions.length}                                           <!-- If amount of correct answers equals total questions, player scored perfectly -->
                <p>Perfect score!</p>                                                 
            {:else if correctAnswers >= data.questions.length / 2}
                <p>More than half right. Not bad!</p>                                                <!-- If player answers between 5 and 9 questions correctly-->
            {:else}
                <p>Could use some practice!</p>                                                      <!-- If player answers fewer than 5 questions correctly -->
            {/if}
        <a href="/" class="newGameBtn">New Game</a>
    </section>
{:else}
    {#if selected}
        <section class="answerResult">
            {#if selected === q.correct_answer}
                <p class="correctAnswer">Correct!!</p>   
            {:else}
                <p class="incorrectAnswer">That answer is incorrect.</p>
                <p class="thisWasTheRightAnswer">The correct answer is {q.correct_answer}</p>        <!-- Displays the correct answer on screen when the player selects an incorrect answer -->     
            {/if}
            <button class ="nextQuestion" onclick="{nextQuestion}">Next question</button>            <!-- Button to navigate to next question -->
        </section>
    {/if}
{/if}

<footer>
    <nav class="home">
        <a href="/" class="btn">Home</a>
    </nav>
</footer>
<style>

    .home {
        position: fixed;
        bottom: 10vh;
        left: 50vw;
        width: 100%;
    }

    .home .btn {
        border: 1px solid black;
    }

    #quizStats {
        display: flex;
        justify-content: space-between;
        max-width: 600px;
        margin: 2rem auto;
        font-size: 1.3rem;
        gap: 2rem;
    }

    .answerResult .thisWasTheRightAnswer {
        font-size: 2rem;
    }

    .quizResults, .answerResult {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 500px;
        margin: 2rem auto;
        font-size: 1.5rem;
    }

    .buttonGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        width: 500px;
        margin: 2rem auto;
        border-radius: 8px;
    }

    .buttonGrid button,
    .newGameBtn {
        text-transform: capitalize;
        padding: 1.5rem;
        background: #84ffc9;
        color: black;
        border-radius: 8px;
        text-decoration: none;
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
        border: 1px solid black;
    }

    .newGameBtn:hover {
        background: rgb(66, 189, 178);
    }

    .thisWasTheRightAnswer {
        font-size: 1.5rem;
    }

    .buttonGrid button.correct {
        background: rgb(77, 228, 77);
    }

    .buttonGrid button.wrong {
        background: rgb(255, 119, 119);
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
        text-align: center;
        padding: 2rem;
        border-radius: 20px;
        font-size: 1.5rem;
        background: #EAECEE;
        border: 1px solid black;
        margin-bottom: 1rem;
    }

    .incorrectAnswer {
        text-align: top;
        padding: 2rem;
        border-radius: 20px;
        font-size: 1.5rem;
        background: #EAECEE;
        border: 1px solid black;
        margin-bottom: 1rem;
    }

    .nextQuestion {
        padding: 1.5rem;
        background: #EAECEE;
        color: rgb(24, 24, 24);
        border-radius: 20px;
        text-decoration: none;
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
    }

    .nextQuestion:hover {
        background: rgb(173, 173, 173);
    }

    .answerButton:hover {
        background: rgb(66, 189, 178);
        cursor: pointer;
    }
</style>