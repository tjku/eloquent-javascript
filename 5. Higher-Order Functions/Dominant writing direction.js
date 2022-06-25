// Run here: https://eloquentjavascript.net/code/#5.4

const dominantDirection = (text) => {
  let directions = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));

    return script ? script.direction : "none";
  });

  return directions.reduce((a, b) => a.count < b.count ? b : a).name;
};
