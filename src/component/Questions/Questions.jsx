import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import { questions } from './qna';

const Questions = () => {
    return (
        <div>
            <div>
                {
                    questions.map(question => <Question
                        key={question.id}
                        question={question}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Questions;