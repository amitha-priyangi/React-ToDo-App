import React,{useState,useEffect,useRef} from 'react';

function TodoForm(props) {
    const [input, setInput]=useState(props.edit ? props.edit.value:'');

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000), 
            test:input
        });
        setInput("");
    };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
       {props.edit ?(
       <>
       <input 
        type='text' 
        className='todo-input edit' 
        name='text' 
        value={input}
        placeholder='update your item'
        onChange={handleChange}
        ref={inputRef}
    />
    <button onClick={handleSubmit} className='todo-button edit'>Update</button>
    </>
    ) : (
        <>
        <input 
            type='text' 
            className='todo-input' 
            name='text' 
            value={input}
            placeholder='Add a todo'
            onChange={handleChange}
            ref={inputRef}
        />
        <button onClick={handleSubmit} className='todo-button'>
            Todo
        </button>
        </>
    )}
    </form>
  );
}

export default TodoForm;
