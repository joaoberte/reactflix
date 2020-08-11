import config from '../config';

const URL_VIDEOS = `${config.URL_SERVER}/videos`;

function create(videoObject) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(videoObject)
    })
        .then(async (response) => {

            if (response.ok) {
                const jsonContent = await response.json();

                return jsonContent;
            }

            throw new Error('Unable to get data.');
        });
}

export default {
    create,
};