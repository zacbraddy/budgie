// Don't ask me about this crazyiness ask
// https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary#comment28521418_11832950

export default num => Math.round((num + 0.00001) * 100) / 100;
