
const verbs = [
    { word: 'eats', syllables: 1},
    { word: 'sees', syllables: 1},
    { word: 'takes', syllables: 1},
    { word: 'runs', syllables: 1},
    { word: 'bakes', syllables: 1},
    { word: 'tastes', syllables: 1},
    { word: 'shouts', syllables: 1},
    { word: 'probes', syllables: 1},
    { word: 'chokes', syllables: 1},
    { word: 'licks', syllables: 1},
    { word: 'speaks', syllables: 1},
    { word: 'hears', syllables: 1},
    { word: 'flees', syllables: 1},

    { word: 'running', syllables: 2 },
    { word: 'jumping', syllables: 2 },
    { word: 'flying', syllables: 2 },
    { word: 'making', syllables: 2 },
    { word: 'dancing', syllables: 2 },
    { word: 'calling', syllables: 2 },
    { word: 'doing', syllables: 2 },
    { word: 'coding', syllables: 2 },
    { word: 'smiling', syllables: 2 },
    { word: 'being', syllables: 2 },
    { word: 'forgetting', syllables: 3 },
    { word: 'cleaning', syllables: 2 },
    { word: 'beginning', syllables: 3 },
    { word: 'drawing', syllables: 2 },
    { word: 'programming', syllables: 3 },
    { word: 'becoming', syllables: 3 },
    { word: 'concentrating', syllables: 4 },
    { word: 'pretending', syllables: 3 },
    { word: 'imagining', syllables: 4 },
    { word: 'standing', syllables: 2 },
    { word: 'sinking', syllables: 2 },
    { word: 'foating', syllables: 2 },
    { word: 'smiling', syllables: 2 },
    { word: 'frowning', syllables: 2 },
    { word: 'arching', syllables: 2 },
    { word: 'acheing', syllables: 2 },
    { word: 'bending', syllables: 2 },
    { word: 'crying', syllables: 2 },
    { word: 'laughing', syllables: 2 },
    { word: 'weeping', syllables: 2 },
    { word: 'singing', syllables: 3 },
    { word: 'standing', syllables: 2 },
    { word: 'yielding', syllables: 3 },
    { word: 'softening', syllables: 3 },
    { word: 'caressing', syllables: 3 },
    { word: 'stroking', syllables: 2 },
    { word: 'lamenting', syllables: 3 },
    { word: 'dying', syllables: 2 },
    { word: 'crawling', syllables: 2 },
    { word: 'trembling', syllables: 2 },
    { word: 'shivering', syllables: 3 },
    { word: 'vibrating', syllables: 3 },
    { word: 'suffocating', syllables: 4 },
    { word: 'suffering', syllables: 3 },
    { word: 'blossoming', syllables: 3 },
    { word: 'blooming', syllables: 2 },
    { word: 'opening', syllables: 2 },
    { word: 'snarling', syllables: 2 },
    { word: 'staring', syllables: 2 },
    { word: 'freezing', syllables: 3 },
    { word: 'glowing', syllables: 2 },
    { word: 'glimmering', syllables: 3 },
    { word: 'scintillating', syllables: 4 },
    { word: 'undulating', syllables: 4 },
    { word: 'rippling', syllables: 3 },
    { word: 'shimmering', syllables: 3 },
    { word: 'spluttering', syllables: 2 },
    { word: 'growing', syllables: 2 },

    { word: 'ran', syllables: 1},
    { word: 'jumped', syllables: 1 },
    { word: 'flew', syllables: 1 },
    { word: 'made', syllables: 1 },
    { word: 'danced', syllables: 2 },
    { word: 'called', syllables: 2 },
    { word: 'coded', syllables: 2 },
    { word: 'smiled', syllables: 1 },
    { word: 'was', syllables: 1 },
    { word: 'forgot', syllables: 2 },
    { word: 'cleaned', syllables: 1 },
    { word: 'began', syllables: 2 },
    { word: 'drew', syllables: 1 },
    { word: 'programmed', syllables: 2 },
    { word: 'became', syllables: 2 },
    { word: 'concentrated', syllables: 4 },
    { word: 'pretended', syllables: 3 },
    { word: 'imagined', syllables: 4 },
    { word: 'stood', syllables: 1 },
    { word: 'sank', syllables: 1 },
    { word: 'floated', syllables: 2 },
    { word: 'smiled', syllables: 1 },
    { word: 'frowed', syllables: 1 },
    { word: 'arched', syllables: 1 },
    { word: 'ached', syllables: 1 },
    { word: 'bent', syllables: 1 },
    { word: 'cried', syllables: 1 },
    { word: 'lauged', syllables: 1 },
    { word: 'wept', syllables: 1 },
    { word: 'sang', syllables: 1 },
    { word: 'yielded', syllables: 2 },
    { word: 'softened', syllables: 2 },
    { word: 'caressed', syllables: 2 },
    { word: 'stroked', syllables: 1 },
    { word: 'lamented', syllables: 3 },
    { word: 'died', syllables: 1 },
    { word: 'crawled', syllables: 1 },
    { word: 'trembled', syllables: 2 },
    { word: 'shivered', syllables: 2 },
    { word: 'vibrated', syllables: 3 },
    { word: 'suffocated', syllables: 4 },
    { word: 'suffered', syllables: 2 },
    { word: 'blossomed', syllables: 2 },
    { word: 'bloomed', syllables: 1 },
    { word: 'opened', syllables: 2 },
    { word: 'snarled', syllables: 1 },
    { word: 'stared', syllables: 1 },
    { word: 'froze', syllables: 1 },
    { word: 'glowed', syllables: 1 },
    { word: 'glimmered', syllables: 2 },
    { word: 'scintilled', syllables: 4 },
    { word: 'undulated', syllables: 4 },
    { word: 'rippled', syllables: 2 },
    { word: 'shimmered', syllables: 2 },
    { word: 'spluttered', syllables: 2 },
    { word: 'grew', syllables: 1 },
    ];

const nouns = [
    { word: 'tree', syllables: 1 },
    { word: 'cat', syllables: 1 },
    { word: 'dog', syllables: 1 },
    { word: 'bear', syllables: 1 },
    { word: 'frog', syllables: 1 },
    { word: 'jar', syllables: 1 },
    { word: 'eye', syllables: 1 },
    { word: 'bird', syllables: 1 },
    { word: 'spoon', syllables: 1 },
    { word: 'paper', syllables: 2 },
    { word: 'rabbit', syllables: 2 },
    { word: 'keyboard', syllables: 2 },
    { word: 'iron', syllables: 2 },
    { word: 'flower', syllables: 2 },
    { word: 'garden', syllables: 2 },
    { word: 'window', syllables: 2 },
    { word: 'fire', syllables: 1 },
    { word: 'bubble', syllables: 2 },
    { word: 'knowledge', syllables: 2 },
    { word: 'hamster', syllables: 2 },
    { word: 'fantasy', syllables: 3 },
    { word: 'computer', syllables: 3 },
    { word: 'animal', syllables: 3 },
    { word: 'umbrella', syllables: 3 },

    { word: 'tree', syllables: 1 },
    { word: 'river', syllables: 2 },
    { word: 'leaf', syllables: 1 },
    { word: 'bird', syllables: 1 },
    { word: 'jar', syllables: 1 },
    { word: 'eye', syllables: 1 },
    { word: 'bird', syllables: 1 },
    { word: 'cloud', syllables: 1 },
    { word: 'waterfall', syllables: 3 },
    { word: 'pond', syllables: 1 },
    { word: 'pool', syllables: 1 },
    { word: 'stream', syllables: 1 },
    { word: 'oak', syllables: 1 },
    { word: 'mountain', syllables: 2 },
    { word: 'cliff', syllables: 1 },
    { word: 'field', syllables: 1 },
    { word: 'pebble', syllables: 2 },
    { word: 'rock', syllables: 1 },
    { word: 'droplet', syllables: 2 },
    { word: 'ant', syllables: 1 },
    { word: 'insect', syllables: 2 },
    { word: 'butterfly', syllables: 3 },
    { word: 'elephant', syllables: 3 },

    { word: 'island', syllables: 2 },
    { word: 'animal', syllables: 3 },
    { word: 'scent', syllables: 1 },
    { word: 'candle', syllables: 2 },
    { word: 'light', syllables: 1 },
    { word: 'sparkle', syllables: 2 },
    { word: 'flicker', syllables: 2 },
    { word: 'glimmer', syllables: 2 },
    { word: 'ripple', syllables: 2 },
    { word: 'flash', syllables: 1 },
    { word: 'moment', syllables: 2 },
    { word: 'instant', syllables: 2 },
    { word: 'darkness', syllables: 2 },
    { word: 'storm', syllables: 1 },
    { word: 'sunset', syllables: 2 },
    { word: 'sunrise', syllables: 2 },
    { word: 'dawn', syllables: 1 },
    { word: 'dusk', syllables: 1 },
    { word: 'branch', syllables: 1 },
    { word: 'twig', syllables: 1 },
    { word: 'puddle', syllables: 2 },
    { word: 'clearing', syllables: 2 },
    { word: 'village', syllables: 2 },

    ];

const adjectives = [
    { word: 'red', syllables: 1 },
    { word: 'blue', syllables: 1 },
    { word: 'wet', syllables: 1 },
    { word: 'dry', syllables: 1 },
    { word: 'cold', syllables: 1 },
    { word: 'hot', syllables: 1 },
    { word: 'fat', syllables: 1 },
    { word: 'thin', syllables: 1 },
    { word: 'little', syllables: 1 },
    { word: 'big', syllables: 1 },
    { word: 'short', syllables: 1 },
    { word: 'plain', syllables: 1 },
    { word: 'tall', syllables: 1 },
    { word: 'proud', syllables: 1 },
    { word: 'silver', syllables: 2 },
    { word: 'lazy', syllables: 2 },
    { word: 'crimson', syllables: 2 },
    { word: 'golden', syllables: 2 },
    { word: 'gentle', syllables: 2 },
    { word: 'fierce', syllables: 1 },
    { word: 'handsome', syllables: 2 },
    { word: 'immense', syllables: 2 },
    { word: 'ominous', syllables: 3 },
    { word: 'emerald', syllables: 3 },
    { word: 'elegant', syllables: 3 },
    { word: 'glamorous', syllables: 3 },
    { word: 'mysterious', syllables: 4 },

    { word: 'gentle', syllables: 2 },
    { word: 'tender', syllables: 2 },
    { word: 'soft', syllables: 1 },
    { word: 'brittle', syllables: 2 },
    { word: 'burning', syllables: 2 },
    { word: 'sleepy', syllables: 2 },
    { word: 'quiet', syllables: 1 },
    { word: 'silent', syllables: 2 },
    { word: 'peaceful', syllables: 2 },
    { word: 'subtle', syllables: 2 },
    { word: 'elegant', syllables: 3 },
    { word: 'simple', syllables: 2 },
    { word: 'graceful', syllables: 2 },
    { word: 'proud', syllables: 1 },
    { word: 'foolish', syllables: 2 },
    { word: 'brave', syllables: 1 },
    { word: 'bold', syllables: 1 },
    { word: 'translucent', syllables: 3 },
    { word: 'filigree', syllables: 3 },
    { word: 'delicate', syllables: 3 },
    { word: 'fine', syllables: 1 },
    { word: 'radiant', syllables: 3 },
    { word: 'ominous', syllables: 3 },
    { word: 'creepy', syllables: 2 },
    { word: 'scary', syllables: 2 },
    { word: 'luminous', syllables: 3 },
    { word: 'resplendent', syllables: 3 },
    { word: 'sullen', syllables: 2 },
    { word: 'humble', syllables: 2 },


    
    ];

const adverbs = [
    { word: '', syllables: 2 },
    { word: 'gently', syllables: 2 },
    { word: 'nicely', syllables: 2 },
    { word: 'safely', syllables: 2 },
    { word: 'nearly', syllables: 2 },
    { word: 'rudely', syllables: 2 },
    { word: 'kindly', syllables: 2 },
    { word: 'oddly', syllables: 2 },
    { word: 'seldom', syllables: 2 },
    { word: 'never', syllables: 2 },
    { word: 'truly', syllables: 2 },
    { word: 'softly', syllables: 2 },
    { word: 'quickly', syllables: 2 },
    { word: 'inwardly', syllables: 3 },
    { word: 'bitterly', syllables: 3 },
    { word: 'righteously', syllables: 3 },
    { word: 'cleverly', syllables: 3 },
    { word: 'youthfully', syllables: 3 },
    { word: 'awkwardly', syllables: 3 },
    { word: 'cheerfully', syllables: 3 },
    { word: 'sheepishly', syllables: 3 },
    { word: 'lovingly', syllables: 3 },
    { word: 'aggresively', syllables: 4 },
    { word: 'mysteriously', syllables: 5 },

    { word: 'clumsily', syllables: 3 },
    { word: 'daintily', syllables: 3 },
    { word: 'joyfully', syllables: 3 },
    { word: 'silently', syllables: 3 },
    { word: 'peacefully', syllables: 3 },
    { word: 'mournfully', syllables: 3 },
    { word: 'morosely', syllables: 3 },
    { word: 'sullenly', syllables: 3 },
    { word: 'seductively', syllables: 3 },
    { word: 'soulfully', syllables: 3 },
    { word: 'humbly', syllables: 2 },
    { word: 'stiffly', syllables: 2 },
    { word: 'gracefully', syllables: 3 },
    { word: 'playfully', syllables: 3 },
    { word: 'wordlessly', syllables: 3 },
    { word: 'woefully', syllables: 3 },
    { word: 'obseqiously', syllables: 5 },
    { word: 'jealously', syllables: 3 },
    { word: 'fearfully', syllables: 3 },
    { word: 'swiftly', syllables: 2 },
    { word: 'methodically', syllables: 5 },
    { word: 'rapidly', syllables: 3 },

    { word: 'away', syllables: 2 },
    { word: 'home', syllables: 1 },
    { word: 'on', syllables: 1 },

    ];       

    const filler = [
    { word: 'onwards', syllables: 2 },
    { word: 'away', syllables: 2 },
    { word: 'home', syllables: 1 },
    { word: 'beyond', syllables: 2 },
    { word: 'hither', syllables: 2 },

    { word: 'yonder', syllables: 2 },
    { word: 'forward', syllables: 2 },
    { word: 'on', syllables: 1 },
    { word: 'under', syllables: 2 },

];










//general funciton to select random element at index[n]
const r = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

//generic function which takes the kind of word needed as an argument. 
const wordFunc = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


const pGen = (percent) => {
    if (Math.floor(Math.random() * (100 / percent)) === 0) {
        return true;
    } else {
        return false;
    }
}


//function for lines 1 & 3 
const line1 = () => {
    let syllableCount = 0
    let testCount
    let word1;
    let word2;
    let word3;
    let word4;
    let word5;

    //word 1
    word1 = wordFunc(nouns);
    let sentence = word1.word;
    syllableCount = word1.syllables;
    //test if 5 syllables reached
    if (syllableCount == 5) {return sentence} else {

        //word 2
    if (pGen(50) === true) {
        let art = Math.floor(Math.random) * 2;
        const vowels = ["a", "e", "i", "o", "u"]
        if (art == 1) {
            art = {word: "the", syllables: 1}
        } else {
            if (vowels.includes(sentence[0])) {
                art = {word: "an", syllables: 1}
            } else {
                art = {word: "a", syllables: 1}
            }
        }
        word2 = art
    } else {
        do{
        word2 = wordFunc(adjectives);
        testCount = syllableCount + word2.syllables;}
        while(testCount > 5)
    }

    syllableCount = syllableCount + word2.syllables;
    sentence = `${word2.word} ${sentence}`;
    if (syllableCount == 5) {return sentence} else {

        //word3 
        do{
            word3 = wordFunc(verbs);
            testCount = syllableCount + word3.syllables;}
            while(testCount > 5)

        syllableCount = syllableCount + word3.syllables;
        sentence = `${sentence} ${word3.word}`;
        if (syllableCount == 5) {return sentence} else {

            //word 4
            do{
                word4 = wordFunc(adverbs);
                testCount = syllableCount + word4.syllables;}
                while(testCount > 5)
    
            syllableCount = syllableCount + word4.syllables;
            sentence = `${sentence} ${word4.word}`;
            if (syllableCount == 5) {return sentence};
        }
    }
}
}


const line2 = () => {
    let syllableCount = 0
    let testCount
    let word1;
    let word2;
    let word3;
    let word4;
    let word5;

    //word 1
    word1 = wordFunc(nouns);
    let sentence = word1.word;
    syllableCount = word1.syllables;

    //test if 7 syllables reached
    if (syllableCount == 7) {return sentence} else {

        //word 2
    if (pGen(50) === true) {
        let art = Math.floor(Math.random) * 2;
        const vowels = ["a", "e", "i", "o", "u"]
        if (art == 1) {
            art = {word: "the", syllables: 1}
        } else {
            if (vowels.includes(sentence[0])) {
                art = {word: "an", syllables: 1}
            } else {
                art = {word: "a", syllables: 1}
            }
        }
        word2 = art
    } else {
        do{
        word2 = wordFunc(adjectives);
        testCount = syllableCount + word2.syllables;}
        while(testCount > 7)

    }

    syllableCount = syllableCount + word2.syllables;
    sentence = `${word2.word} ${sentence}`;
    if (syllableCount == 7) {return sentence} else {

        //word3 
        do{
            word3 = wordFunc(verbs);
            testCount = syllableCount + word3.syllables;}
            while(testCount > 7)

        syllableCount = syllableCount + word3.syllables;
        sentence = `${sentence} ${word3.word}`;
        if (syllableCount == 7) {return sentence} else {

            //word 4
            do{
                word4 = wordFunc(adverbs);
                testCount = syllableCount + word4.syllables;}
                while(testCount > 7)
    
            syllableCount = syllableCount + word4.syllables;
            sentence = `${sentence} ${word4.word}`;
            if (syllableCount == 7) {return sentence} else {

                //word 5
                do{
                    word5 = wordFunc(filler);
                    testCount = syllableCount + word5.syllables;}
                    while(testCount > 7)
        
                syllableCount = syllableCount + word5.syllables;
                sentence = `${sentence} ${word5.word}`;
                if (syllableCount == 7) {return sentence}

        }
    }
}
}
}

const createHaiku = () => {
    let haiku1 = line1();
    haiku1 = haiku1.charAt(0).toUpperCase() + haiku1.slice(1);
    let haiku2 = line2();
    haiku2 = haiku2.charAt(0).toUpperCase() + haiku2.slice(1);
    let haiku3 = line1();
    haiku3 = haiku3.charAt(0).toUpperCase() + haiku3.slice(1) + '.';
    document.getElementById('line1').innerHTML = haiku1;
    document.getElementById('line2').innerHTML = haiku2;
    document.getElementById('line3').innerHTML = haiku3;
    //return [haiku1, haiku2, haiku3];
    
}