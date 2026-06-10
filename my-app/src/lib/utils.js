   
   //Replaces all HTML entities with their correct symbol. Can be called anywhere in route hierarchy.
   //There are a few random German characters in some of the questions I haven't accounted for.
   export function decode(str) {
        return str
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&nbsp;/g, ' ');
    }