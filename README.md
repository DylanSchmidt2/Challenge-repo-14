# A CMS-style blog

## Summary
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Dependencies
[MySQL2](https://www.npmjs.com/package/mysql2)
[Express.js]
[Sequelize]
[dotenv]
[bcrypt]
[express handlebars]
[express session]


## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors
Anchor: ^

Anchor: $

Description: Anchors purpose is to mark the **beginning** and **end** of a string using specific characters. 

Example: `^The` indicates that the string must begin with `The`

Our Snipet: `/^`

Example: `$End` indicates that the string must end with `End`

Our Snipet: `$/`

### Quantifiers
Quantifiers: ?

Quantifiers: {}

Description: {-} Tells how many times the previous pattern is matching. Using ? makes it so our regular expression will match as **few** occurrences as it can. In our expression it does not have one so it will match as **many** occurrences as it can.

Our Snipet: `{3}`

### OR Operator

OR Operator: |

Description: | is a boolean that matches either the expression before or after it is done.

Our Snipet: `[a-f0-9]{6}|[a-f0-9]{3}`


 match with 3 character string containing lower case a-f and/or integer 0-9 OR (|) a string with 6 characters containing lowercase a-f and/or integer between 0-9. Anything outside of 3-6 characters will not match.

### Character Classes
Description: Character classes help us define a range of what single characters are being used in our expression. In our case, we see multiple using a single dash to say we want all of those numbers or letters between.

Our Snipet: `a-f0-9`

Example: `[a-f]` This matches a single character inbetween a and f

Example: `[0-9]` This matches a single number inbetween 0 and 9



### Grouping and Capturing
Grouping and Capturing: ()

Our Snipet: `([a-f0-9]{6}|[a-f0-9]{3})`

Description: () is allowing us to group this regex together and display is as an array to be further index'd

In this specific case we are working with a bracket expression and that is ended with a $

### Bracket Expressions
Bracket Expression: []

Our Snipet: `[a-f0-9]`

Description: a bracket expression is a regex that will match a pattern. We can put things inside the brackets to define our desired range of (alphabetic, numeric, special characters, symbols etc..)

Example: `[a-d 1-3]` States the string must include atleast one character between a through d or the numbers 1 through 3.

### Greedy and Lazy Match
Description: Greedy means match the longest possible string. Lazy means match the shortest possible string. 

### Boundaries
Description: Using /b is what is called a "word limiter" when querying for the word, it changes the results, either allowing for more letters before, or after the initial word. 

Snipet: `/bcat/b`

Examples: black cat

Snipet: `cat/b`

Examples: tomcat

Snipet: `cat/b`

Examples: catfish

### Back-References
Description: Back references are a way we can match text and reuse it. By putting something "in a back reference" we can call it later on and reuse the exact same text. (e.g. HTML tags)

Snipet: `/1`

### Look-ahead and Look-behind
Description: Collectively called "lookaround", are "zero-length assertions" similar to anchors. Lookarounds **match** characters and return "match" or "no match". They simply assert weather a match is possible or not.

### References
https://www.regular-expressions.info
https://www.rexegg.com/

## Author
GitHub: https://github.com/DylanSchmidt2
