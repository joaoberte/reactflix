import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button'
import { Link, useHistory } from 'react-router-dom';
import videosRepository from '../../../repositories/videos'
import categoriesRepository from '../../../repositories/categories'

function CadastroVideo() {
    const history = useHistory();
    const [ categories, setCategories ] = useState([]);
    const categoryNames = categories.map(({name}) => name);
    const { values, handleChange } = useForm({
        name: '',
        url: '',
        category: '',
    });

    useEffect(() => {
        categoriesRepository.getAll()
            .then((categories) => {
                setCategories(categories);
            });
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();

                const choosenCategory = categories.find((category) => {
                    return category.name === values.category;
                });

                videosRepository.create({
                    name: values.name,
                    url: values.url,
                    categoryId: choosenCategory.id,
                })
                    .then(() => {
                        history.push('/');
                    });


            }}>

                <FormField
                    label='Nome'
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                />

                <FormField
                    label='URL'
                    type='text'
                    name='url'
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label='Category'
                    type='text'
                    name='category'
                    value={values.category}
                    onChange={handleChange}
                    suggestions={categoryNames}
                />

                <Button type='submit'>
                    Cadastrar
                </Button>

            </form>

            <Link to="/cadastro/categoria">
                Cadastro Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;