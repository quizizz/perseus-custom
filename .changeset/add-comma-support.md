---
"perseus-custom": minor
---

Add comma support to LaTeX equation parser. Commas are now treated as whitespace separators, allowing expressions like `\left(2,2\right)` and `(x,y)` to parse successfully as implicit multiplication.
