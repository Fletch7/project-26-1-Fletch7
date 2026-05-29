<script>
    let { data } = $props();
    let current = $state(0);
    let q = $derived(data.questions[current]);

    function decode(str) {
    const txt = document.createElement('textarea')
    txt.innerHTML = str;
    return txt.value;
    }
    let answers = $derived([...q.incorrect_answers, q.correct_answer].sort());
</script>

<div class="quiz">
    <div class="progress">Question {current + 1} of {data.questions.length}</div>

    <div class="question">{data.questions}</div>
</div>

{#each data.question in q}
<h1>{q.question}</h1>
{/each}