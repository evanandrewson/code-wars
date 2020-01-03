const songDecoder = song => {
  let string = song.replace(/\bWUBWUB\b||\bWUB\b/g, ' ');
  if (string.charAt(0) === ' ') {
    string.slice(0, 1)
  }
  if (string.charAt(string.length) === ' ') {
    string.slice(string.length, 1)
  }
  return string;
}