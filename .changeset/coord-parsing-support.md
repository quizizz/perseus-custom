---
"perseus-custom": patch
---

Add coordinate parsing support for LaTeX expressions

- Support parsing coordinates in three formats: `\left(x,y\right)`, `(x,y)`, and bare `x,y`
- Add new `Coord` node class with full expression support inside coordinates
- Support equality comparison between coordinates
- Examples: `(2,3)`, `\left(2+3, x*4\right)`, `x,y`
