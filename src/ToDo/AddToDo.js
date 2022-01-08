import react, {useState} from "react";
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)   
        },
        clear: () => setValue(''),
        value: () => value,
    };
}

function AddToDo({ onCreate }) {
    const input = useInputValue('');

    function submitHandler (event) {
        event.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    }

    return(
        <form style={{ marginBottom: '1rem' ,display:'inline-block', marginInline:'10px'}} onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type="submit" className={'floating-button'}>Add todo</button>
        </form>
    )
}

AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddToDo;
