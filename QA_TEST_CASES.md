# QA Test Cases

Scoring formula: `round((sum((respondent answer / 5) x question weight) / 98) x 100)`.

| Test case | Inputs | Expected score | Expected band |
| --- | --- | ---: | --- |
| All low | 13 answers of `1` | 20 | Critical Gaps |
| All middle | 13 answers of `3` | 60 | Limited Readiness |
| All high | 13 answers of `5` | 100 | High Readiness |
| Mixed manual check | `1,1,2,2,3,3,4,4,5,5,2,4,5` | 63 | Limited Readiness |
| Skipped question | Any unanswered question | Cannot continue | Form/result blocked before lead capture |
| Invalid email | Completed quiz + `not-an-email` | Cannot submit | Lead capture shows validation error |

Manual formula for the mixed case:

Weights by question: `8, 8, 7, 8, 8, 7, 8, 7, 7, 8, 7, 8, 7`

Raw weighted total:
`1.6 + 1.6 + 2.8 + 3.2 + 4.8 + 4.2 + 6.4 + 5.6 + 7 + 8 + 2.8 + 6.4 + 7 = 61.4`

Normalized score:
`round((61.4 / 98) x 100) = 63`
