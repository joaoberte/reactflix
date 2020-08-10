import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import { Link } from 'react-router-dom';


function CadastroCategoria() {
    const initialValues = {
        name: '',
        description: '',
        color: '',
    }

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(initialValues);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        });
    }

    function handleChange(event) {
        setValue(event.target.name, event.target.value)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);

                setValues(initialValues);
            }}>

                <FormField
                    label='Nome'
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                />

                <FormField
                    label='Descrição'
                    type='textarea'
                    name='description'
                    value={values.description}
                    onChange={handleChange}
                />

                <FormField
                    label='Cor'
                    type='color'
                    name='color'
                    value={values.color}
                    onChange={handleChange}
                />

                <Button>Cadastrar</Button>
            </form>

            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={`${category.name}${index}`}>
                            {category.name}
                        </li>
                    );
                })}
            </ul>

            <Link to='/'>
                Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;