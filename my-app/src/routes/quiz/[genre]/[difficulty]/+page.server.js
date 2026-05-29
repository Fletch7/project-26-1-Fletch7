

export async function load({params}) {
    const catergoryID = categories[params.genre];
    const difficulty = catergoies.difficulty;

    const res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`
    );

    const data = await res.json();
    return { questions: data.results };
}
