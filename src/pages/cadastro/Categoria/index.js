import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
    const [categories, setCategories] = useState([]);

    const initialValues = {
        name: '',
        description: '',
        color: '#000000',
    }

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
            }}>
                <div>
                    <label>
                        Nome:
                    <input type="text" name="name" value={values.name}
                            onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                    <textarea type="text" name="description" value={values.description}
                            onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Cor:
                    <input type="color" name="color" value={values.color}
                            onChange={handleChange} />
                    </label>
                </div>

                <button>Cadastrar</button>
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

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;