process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
