// Add "ay" to the end of words
// For words that start with a vowel, just add "ay" to the end.
// For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay".
// For words that start with "y", treat the "y" as a consonant.
//(If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where the "qu" doesn't come first!)



describe('addAy', function() {
  it("adds 'ay' to the end of the word", function() {
    expect(addAy("egg")).to.equal("eggay");
  });
});

describe('addAy', function() {
  it("adds 'ay' to the ends of words that start with vowels", function() {
    expect(addAy("egg")).to.equal("eggay");
  });
});

describe('moveConsonants', function() {
  it("moves leading consonants to to the end of the word and adds ay.", function() {
    expect(moveConsonants("ham")).to.equal("amhay")
  }

});
