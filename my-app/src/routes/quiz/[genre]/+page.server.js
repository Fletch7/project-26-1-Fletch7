
export async function load() {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple')
    const data = await response.json();
        console.log(data.results)
    return { questions: data.results };
}