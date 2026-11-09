# prompt++

## The problem

When using language models, we often end up writing and rewriting the same prompt. For example, a professor may want to generate quizzes for several subjects.

For a Software Engineering Fundamentals quiz, they might write:

```text
I am a professor of Software Engineering Fundamentals at Politehnica University of Timisoara. My students are second-year students. Generate a quiz containing 5 questions about the waterfall development process. Each question must have 5 alternatives.
```

For Object-Oriented Programming, the prompt is almost identical:

```text
I am a professor of Object-Oriented Programming at Politehnica University of Timisoara. My students are second-year students. The mandatory programming language is Java. Generate a quiz containing 5 questions about inheritance and polymorphism.
Each question must have 5 alternatives.
```

The differences between the two prompts are only a few parameters: the subject, some details about the students, the number of questions, the number of alternatives, and the topic. The rest of the text is duplicated.

prompt++ allows us to describe the common part once and define parameterized prompts for the concrete cases.

## Example

We can first define general templates for teaching:

```prompt++
^professorOf<discipline,institution,details>I am a professor of `discipline at `institution. Some details about my students: `details.

^generateQuiz<noOfQuestions,noOfAlternatives,topics>I would like a quiz containing a number of `noOfQuestions questions each of which having `noOfAlternatives alternatives. All of them must be about `topics.
```

We can then define two specialized prompts for the two subjects:

```prompt++
^sefQuiz<numberOfQuestions,topics>`university:teaching:professorOf<Software Engineering Fundamentals,Politehnica University of Timisoara,second year students> `university:teaching:generateQuiz<`numberOfQuestions,5,`topics>

^pooQuiz<numberOfQuestions,topics>`university:teaching:professorOf<Object-Oriented Programming,Politehnica University of Timisoara,second year students \, the mandatory language is Java> `university:teaching:generateQuiz<`numberOfQuestions,5,`topics>
```

To request a quiz about the waterfall process, we only need to write:

```prompt++
`sefQuiz<3,waterfall development process>
```

For an Object-Oriented Programming quiz, we can write:

```prompt++
`pooQuiz<3,inheritance and polymorphism>
```

In both cases, the final prompt automatically contains the professor's context, the subject, the institution, the students' level, and the general quiz requirements. The user only needs to specify what changes from one use to another.

## The main idea

A prompt++ program consists of parameterized templates and their uses:

- a template can receive parameters;
- a template can use other templates;
- common details are kept in one place;
- concrete uses become short and easy to modify.

Therefore, if the general wording of a quiz changes, the change is made in the `generateQuiz` template rather than in every concrete prompt.

## CLI and API

prompt++ programs can be executed from the command line or interpreted programmatically through the TypeScript API. These usage modes, as well as the Chrome extension integration, will be documented later.
