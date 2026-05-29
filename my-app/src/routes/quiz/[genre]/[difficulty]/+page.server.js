const categories = {
    'Science': 17,
    'Geography': 22,
    'General Knowledge': 9,
    'History': 23
};

export async function load({params}) {
    const categoryId = categories[params.genre];
    const difficulty = params.difficulty;

    const res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`
    );

    const data = await res.json();
    return { questions: data.results };
}
