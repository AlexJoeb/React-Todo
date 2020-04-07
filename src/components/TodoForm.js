import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default ({ handleSubmit, clearCompleted }) => {
	const [task, setTask] = useState("");
	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e, task, setTask);
            }}
            css={css`
                display: flex;
                flex-wrap: wrap;    
                justify-content: space-between;            
            `}
		>
            <input 
                css={css`
                    flex-basis: 100%;
                    margin-bottom: 15px;
                    height: 40px;
                    border: 0;
                    
                `}
            type='text' onChange={(e) => setTask(e.target.value)} value={task} name='task' placeholder='Task Name' />
            <input 
                css={css`
                    flex-basis: 48%;
                    border: 0;
                    height: 40px;
                    background: #3AAFD2;
                    color:white;
                    font-weight: bold;
                `}
            type='submit' name='submit' value='Submit' />
            <input 
                css={css`
                    flex-basis: 48%;
                    border: 0;
                    height: 40px;
                    background: #C35976;
                    color:white;
                    font-weight: bold;
                `}
            type='button' value='Clear Completed' name='clearCompleted' onClick={clearCompleted} />
		</form>
	);
};
