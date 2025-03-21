// MSG GENERATOR SCRIPT

const JokeBase = () => {
    const JokeBases = ['The past, present, and future', 'Comic Sans, Helvetica, and Times New Roman', 'An amnesiac', 
        'Two dragons'];
    return JokeBases[Math.floor(Math.random() * 4)] 
  }; let result = JokeBase();
  console.log(result);

  const JokeAnchor = "walk(s) into a bar";
  console.log(JokeAnchor);

  const punchline = () => {
    const line = ['It was tense.', 'Get out! shouts the barman. We don’t serve your type here!', 
        'He goes up to a beautiful blonde and says, So, do I come here often?', 
        'The first one says, It sure is hot in here. His friend snaps back, Shut your mouth!'];
        return line [Math.floor(Math.random() * 4)]
  }; let punchResult = punchline();
  console.log(punchResult);

// ASCII art needs to be input with backticks for it to work in console log
  console.log(`
     ====    ====
       0      0
          ||
          ==
         ||||
                    `)