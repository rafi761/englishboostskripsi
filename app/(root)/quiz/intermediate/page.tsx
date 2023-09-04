"use client"
import { useState } from "react"
// import { currentUser } from "@clerk/nextjs"
// import { fetchUser } from "@/lib/actions/user.actions"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { multipleQuizIntermediate } from "@/constants/multiplechoice"

interface Result {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

export default function Page(){
    const router = useRouter()
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState<Result>({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const { questions } = multipleQuizIntermediate;
    const { question, answers, correctAnswer } = questions[activeQuestion];

    // Select and check answer
    const onAnswerSelected = (answer: string, idx: number) => {
        setChecked(true);
        setSelectedAnswerIndex(idx);
        if (answer === correctAnswer) {
        setSelectedAnswer(true);
        console.log('true');
        } else {
        setSelectedAnswer(false);
        console.log('false');
        }
    };

    // Calculate score and increment to the next question
    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) =>
        selectedAnswer
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
            }
            : {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }
        );
        if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
        } else {
        setActiveQuestion(0);
        setShowResult(true);
        }
        setChecked(false);
}
    return(
        <section className="flex flex-col gap-5 max-w-3xl account-form_input p-10 rounded-lg mx-auto">
            <div>
                <h1 className="text-heading3-bold">Hello</h1>
                <p className="text-small-medium">Complete this quiz carefully</p>
            </div>

            <div className="flex flex-col gap-1">
                <h1 className="text-body-semibold text-gray-700">Question {activeQuestion + 1} <span className="text-small-semibold">/ {questions.length}</span></h1>
                <div className="h-0.5 w-full rounded-full bg-gray-700" />
            </div>

            {!showResult ? (
                <>
                    <div>
                        <h1 className="text-body-semibold">{questions[activeQuestion].question}</h1>
                    </div>

                    <div className="flex flex-col gap-5">
                        {answers.map((answer, idx) => (
                            <Button key={idx} onClick={() => onAnswerSelected(answer, idx)} className={`max-w-md bg-transparent py-2 border border-indigo-500 ${selectedAnswerIndex === idx ? "bg-indigo-700" : "bg-transparent"}`}>
                                {answer}
                            </Button>
                        ))}
                        {checked && (
                            <div className="flex flex-col">
                                <Button onClick={nextQuestion} className="max-w-md bg-indigo-700 hover:bg-indigo-500">
                                    {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        )}
                    </div>
                </>
            ): (
                 <div className='flex flex-col gap-2'>
                    <h3 className="text-heading1-bold text-indigo-700">Results</h3>
                    <h3 className="text-heading2-bold">{Math.floor((result.score / 75) * 100)}%</h3>
                    <p>
                    Total Questions: <span>{questions.length}</span>
                    </p>
                    <p>
                    Total Score: <span>{result.score + 25}</span>
                    </p>
                    <p>
                    Correct Answers: <span>{result.correctAnswers}</span>
                    </p>
                    <p>
                    Wrong Answers: <span>{result.wrongAnswers}</span>
                    </p>
                    <Button className="" onClick={() => router.push("/quiz")}>Restart</Button>
                </div>
            )}

        </section>
    )
}