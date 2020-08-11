import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const initialValues = {
        name: '',
        description: '',
        color: '',
    }

    const { values, handleChange, clearForm } = useForm(initialValues);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const URL_SERVER = window.location.hostname.includes('localhost') ?
            'http://localhost:8080/categories'
            : 'https://reactflix-app.herokuapp.com/categories';

        fetch(URL_SERVER)
            .then(async (response) => {
                const jsonContent = await response.json();
                setCategories([...jsonContent]);
            })
    }, [

    ]);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);

                clearForm(initialValues);
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

            {categories.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

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