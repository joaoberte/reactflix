import config from '../config';

const URL_CATEGORIES = `${config.URL_SERVER}/categories`;

function getAllwithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (response) => {

            if (response.ok) {
                const jsonContent = await response.json();

                return jsonContent;
            }

            throw new Error('Unable to get data.');
        });
}

function getAll() {
    return fetch(URL_CATEGORIES)
        .then(async (response) => {

            if (response.ok) {
                const jsonContent = await response.json();

                return jsonContent;
            }

            throw new Error('Unable to get data.');
        });
}

export default {
    getAll,
    getAllwithVideos,
};