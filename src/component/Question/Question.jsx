import React from 'react';

const Question = (props) => {
    const { id, question, answer } = props.question;

    return (
        <div className='my-4 text-justify'>
            <h3 className='text-lg font-semibold'>Q{id}. {question}</h3>
            <p><span className="font-semibold">Answer:</span> {answer}</p>
        </div>
    );
};

export default Question;