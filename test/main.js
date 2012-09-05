require.config({
  baseUrl: '../build/plain',
  paths: {
  }
});

console.log('here');

if (phantom) {
  console.log('I see phantom.');
}
