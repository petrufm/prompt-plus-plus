# prompt++

## The problem

When using language models, we often end up writing and rewriting the same prompt. For example, a professor may want to generate quizzes for several subjects.

For a Software Engineering Fundamentals quiz, they might write:

```text
I am a professor of Software Engineering Fundaments at Politehnica University of Timisoara. Some details about my students: second year students. I would like a quiz containing a number of 5 questions each of which having 5 alternatives. All of them must be about the waterfall development process.
```

For Object-Oriented Programming, the prompt is almost identical:

```text
I am a professor of Object-Oriented Programming at Politehnica University of Timisoara. Some details about my students: second year students, the mandatory language is Java. I would like a quiz containing a number of 3 questions each of which having 5 alternatives. All of them must be about class inheritance.
```

The differences between the two prompts are only a few parameters: the discipline, some details about the students, the number of questions and the topic. The rest of the text is duplicated.

prompt++ allows us to describe the common part once and define parameterized prompts for the concrete cases. We can first define general templates for teaching:

```prompt++
^professorOf<discipline,institution,details>I am a professor of `discipline at `institution. Some details about my students: `details.

^generateQuiz<noOfQuestions,noOfAlternatives,topics>I would like a quiz containing a number of `noOfQuestions questions each of which having `noOfAlternatives alternatives. All of them must be about `topics.
```

We can then define two specialized prompts for the two subjects:

```prompt++
^sefQuiz<numberOfQuestions,topics>`university:teaching:professorOf<Software Engineering Fundamentals,Politehnica University of Timisoara,second year students> `university:teaching:generateQuiz<`numberOfQuestions,5,`topics>

^oopQuiz<numberOfQuestions,topics>`university:teaching:professorOf<Object-Oriented Programming,Politehnica University of Timisoara,second year students\, the mandatory language is Java> `university:teaching:generateQuiz<`numberOfQuestions,5,`topics>
```

To request a quiz about the waterfall process, we only need to write:

```prompt++
`sefQuiz<5,the waterfall development process>
```

For an Object-Oriented Programming quiz, we can write:

```prompt++
`oopQuiz<3,class inheritance>
```

In both cases, the final prompt automatically contains the professor's context, the subject, the institution, the students' level, and the general quiz requirements. The user only needs to specify what changes from one use to another. When prompt++ is executed, it produces the complete prompts—in this cases, the same prompts we started with.

## prompt++ concepts

A prompt++ is in essence a natural-language text. Within this text, a portion can be replaced with the result of interpreting another prompt++. This is called a substitution and is introduced with the backtick character (`` ` ``).

For example, assuming that a named prompt++ called `topic` is available:

```prompt++
Please generate a quiz about `topic<>.
```

The `topic<>` prompt++ is interpreted first, and its result replaces the substitution in the surrounding natural-language text.

prompt++ also supports named prompt++ definitions. A named prompt++ is defined with the `^` operator and an identifier:

```prompt++
^generateQuiz<topic>I would like a quiz about `topic.
```

It can then be used with the substitution operator:

```prompt++
`generateQuiz<the waterfall development process>
```

Named prompt++ definitions can receive parameters and can use other named prompt++. This makes it possible to keep common details in one place and make concrete uses short and easy to modify. For example, if the general wording of a quiz changes (e..g, they need to be of level 1 according to the Bloom's taxonomy), the change can be made in the `generateQuiz` definition rather than in every concrete prompt.

## CLI, API and Chrome Extension

prompt++ can be executed from the command line or interpreted programmatically through the TypeScript API. These usage modes, as well as the Chrome extension integration, will be documented later.
