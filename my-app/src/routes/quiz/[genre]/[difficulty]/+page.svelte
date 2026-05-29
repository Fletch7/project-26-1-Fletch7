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

<div class="quiz">
    <div class="progess">Question {current + 1} of {data.questions.length}</div>
    <div cleas="question">{decode(q.question)}</div>
</div>

<style>
    .progress {
        display: flex;
    }
</style>