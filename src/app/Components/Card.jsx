"use client"
import React, { useState } from 'react'
import data from "@/app/data"
import OptionButton from './OptionButton'
const Card = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const[questionCount , setQuestionCount] = useState(1)
    const [selectOption , setSelectOption] = useState("")
    const [score , setScore] = useState(0)
    const [showNext , setShowNext] = useState(false)
    const [endQuiz , setEndQuiz] = useState(false)

    const nextQuestion = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1)
            setQuestionCount(prev => prev+1)
            setShowNext(false)
            setSelectOption("")
        }
        else{
            setEndQuiz(true)
        }
    }

    const handleCorrectOption = (option) => {
        if(!selectOption){
            setSelectOption(option)
            setShowNext(true)
        }
        if(option === data[currentIndex].answer && score < data.length ){
            setScore(prev => prev + 1)
            
        }
    }

    const handleRestartQuiz = ()=>{
        setCurrentIndex(0)
        setQuestionCount(1)
        setScore(0)
        setSelectOption("")
        setShowNext(false)
        setEndQuiz(false)
        
    }


    return (
        <div className='border  border-white    w-1/2'>
            <div className='flex justify-between items-center bg-blue-300 rounded-md'>
                <div className='flex gap-1 '>
                    <lord-icon
                        src="https://cdn.lordicon.com/lomfljuq.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ "width": "55px", "height": "55px" }}>
                    </lord-icon>
                    <p className='py-4'>{score} of {data.length}</p>
                </div>
                <div className='border-1 bg-white rounded-full py-2 px-5 w-1/4  '>
                    <h1>Soccer Quiz</h1>
                </div>

                <div className='flex gap-1 '>
                    <p className='py-4'>{questionCount} of 5</p>
                    <lord-icon
                        src="https://cdn.lordicon.com/ojnjgkun.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ "width": "55px", "height": "55px" }}>
                    </lord-icon>
                </div>
            </div>
            {/* Div from where the question start */}
            {!endQuiz ? (
                <>
            <div className='bg-blue-50 rounded-md'>
                <div className='flex justify-center py-3'>
                    <h1 className='text-lg font-bold'>{data[currentIndex].question}</h1>
                </div>

                    <div  className='grid grid-cols-2 place-items-center gap-4 px-30 py-4 '>
                {data[currentIndex].options.map((option, index) => {
                    let borderColor = "border-blue-200"
                    if(selectOption){
                        if(option === data[currentIndex].answer){
                            borderColor = "border-green-500"
                        }
                        else if(option === selectOption && option !== data[currentIndex].answer){
                            borderColor = "border-red-500"
                        }
                    }
                    return (
                        
                        <div className='' key={index} onClick={()=> handleCorrectOption(option)}> 

                           <OptionButton title={option} borderColor={borderColor}/>
                       </div>
                        )
                    })}
                    </div>
            </div>
                
                { showNext && (
                    <div className='flex justify-center bg-blue-50  pb-5'>
                    <button  onClick={nextQuestion} className='border-2 border-black  rounded-full bg-blue-400 font-bold  text-white w-1/5 mb-3 py-1.5 hover:bg-blue-700 cursor-pointer'>Next</button>
                    </div>
                )}
            
                </>
            ) : (

            <div className='bg-blue-50 rounded-md'>
            <div className='flex justify-center py-3'>
                    <h1 className='text-2xl font-bold'>Quiz Ended!</h1>
                </div>
                <div className='flex justify-center '>
                    <p className='pb-3'>Your Score is {score} of 5</p>
                </div>
                <div className='flex justify-center bg-blue-50 pb-5'>
                     <button onClick={handleRestartQuiz} className='border-2 border-black  rounded-full bg-blue-400 font-bold  text-white w-1/5 mb-3 py-1.5 hover:bg-blue-700 cursor-pointer'>Restart Quiz</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Card


