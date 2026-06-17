import { error } from '@sveltejs/kit';
import { recordAPICall } from '$lib/cooldown.js';

const categories = {
    'Science': 17,
    'Geography': 22,
    'General Knowledge': 9,
    'History': 23
};

export async function load({params}) {
    const categoryId = categories[params.genre];
    const difficulty = params.difficulty;
    const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`

    recordAPICall();
    
    let res;
    try {
        res = await fetch(url);
    } catch {
        throw error(503, 'Could not retrieve quiz questions.');
    }

    const data = await res.json();
    return { questions: data.results };
}
