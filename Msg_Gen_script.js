// MSG GENERATOR SCRIPT

const JokeBase = () => {
    const JokeBases = ['The past, present, and future', 'Comic Sans, Helvetica, and Times New Roman', 'An amnesiac', 
        'Two dragons'];
    return JokeBases[Math.floor(Math.random() * 4)] 
  };

  const JokeAnchor = "walk(s) into a bar";

  const punchline = () => {
    const line = ['It was tense.', 'Get out! shouts the barman. We don’t serve your type here!', 
        'He goes up to a beautiful blonde and says, So, do I come here often?', 
        'The first one says, It sure is hot in here. His friend snaps back, Shut your mouth!'];
        return line [Math.floor(Math.random() * 4)]
  }


 //  Returns a random single strand of Joke base
  const randJokeBase = () => {
    const newJoke = []
    for (let i = 0; i < 1; i++) {
        newJoke.push(JokeBase())
    }
    return newJoke
  }
  //console.log(randJokeBase(JokeBase));

//  Returns a random single strand of punchline
const randPunchline = () => {
    const newPunchline = []
    for (let i = 0; i < 1; i++) {
        newPunchline.push(punchline())
    }
    return newPunchline
  }
  console.log(randJokeBase(JokeBase));
  console.log(JokeAnchor);
  console.log(randPunchline(punchline));