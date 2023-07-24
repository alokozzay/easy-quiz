import { useState } from 'react';
import './App.scss';

const questions = [
    {
        title: 'How many components can be on a site?',
        variants: ['No more than 10', 'No more than 50', 'Unlimited amount'],
        correct: 2,
    },
    {
        title: 'Where is the component rendered correctly?',
        variants: ['<Test />', '</Test>', '<Test>'],
        correct: 0,
    },
    {
        title: 'How many parent HTML tags can be rendered in a React JS component?',
        variants: ['No more than 1', 'No more than 5', 'Unlimited amount'],
        correct: 0,
    },
];

function Result({ correct }) {
    return (
        <div className='result'>
            <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
            <h2>
                You guessed {correct} answers out of {questions.length}
            </h2>
            <a href='/'>
                <button>try again</button>
            </a>
        </div>
    );
}

function Game({ question, onClickVariant, step }) {
    const percentstep = Math.round((step / questions.length) * 100);

    return (
        <>
            <div className='progress'>
                <div
                    style={{ width: `${percentstep}%` }}
                    className='progress__inner'
                ></div>
            </div>
            <h1> {question.title} </h1>
            <ul>
                {question.variants.map((item, index) => (
                    <li onClick={() => onClickVariant(index)} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];

    const onClickVariant = (possible) => {
        setStep(step + 1);

        if (possible === question.correct) {
            setCorrect(correct + 1);
        }
    };

    return (
        <div className='App'>
            {step !== questions.length ? (
                <Game
                    question={question}
                    onClickVariant={onClickVariant}
                    step={step}
                />
            ) : (
                <Result correct={correct} />
            )}
        </div>
    );
}

export default App;
