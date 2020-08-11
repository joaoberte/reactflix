import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {

    const [initialValues, setInitialValues] = useState([]);

    useEffect(() => {
        categoriesRepository.getAllwithVideos()
            .then((categoriesWithVideos) => {
                setInitialValues(categoriesWithVideos);
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <PageDefault paddingAll={0}>

            {initialValues.length === 0 && (<div>Loading...</div>)}

            {initialValues.map((category, index) => {

                if (index === 0) {
                    return (
                        <div key={category.id}>
                            <BannerMain
                                videoTitle={category.videos[0].name}
                                url={category.videos[0].url}
                                videoDescription={category.videos[0].description}
                            />
                            <Carousel
                                ignoreFirstVideo
                                category={category}
                            />
                        </div>
                    );
                }

                return (
                    <Carousel
                        key={category.id}
                        category={category}
                    />
                );
            })}

        </PageDefault>
    );
}

export default Home;
