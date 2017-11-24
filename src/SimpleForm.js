import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';

const FIELDS = [
    { name: 'name', type: 'text', placeholder: 'Enter Name' },
    { name: 'age', type: 'number', placeholder: 'Enter age' },
    { name: 'email', type: 'email', placeholder: 'Enter Email' },
    { name: 'employed', type: 'checkbox' },
    {
        name: 'favouriteColors',
        type: 'select',
        options: [
            { label: 'Red', value: 'red' },
            { label: 'Yellow', value: 'yellow' },
            { label: 'Green', value: 'green' },
        ],
    },
];


const renderField = ({ input, field }) => {
    const { type, placeholder } = field
    if (type === 'text' || type === 'email' || type === 'number' || type === 'checkbox') {
        return <input {...input} placeholder={placeholder} type={type} />
    } else if (type === 'select') {
        const { options } = field
        return (
            <select name={field.name} onChange={input.onChange}>
                {options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}</option>
                })}
            </select>
        )
    } else {
        return <div>Type not supported.</div>
    }
};
/*https://stackoverflow.com/questions/44480120/how-to-dynamically-build-a-redux-form*/
class SimpleForm extends Component
{

	render() {
        const { fields ,handleSubmit,pristine, reset, submitting} = this.props;
        return(
        <form onSubmit={handleSubmit}>
            <div>
                {fields.map(field => (
                    <div key={field.name}>
                        <Field
                            name={field.name}
                            component={renderField}
                            field={field}
                        />
                    </div>
                ))}
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>);

    };
}

function validate(values)
{
    const errors ={};
    //errors.name = "this will always be an error field";
    return errors;
}

export default reduxForm({form:'simple', fields: FIELDS, validate})(SimpleForm)

