import Catalog from './components/Catalog';

const RecipesPage = async ({ params, searchParams }) => {
    const { query, cuisine, maxReadyTime } = await searchParams;

    const res = await fetch(
        `${process.env.API_ENDPOINT}/complexSearch/?query=${query}&cuisine=${cuisine}&${maxReadyTime ? `maxReadyTime=${maxReadyTime}` : ''}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.SPOONACULAR_API_KEY,
            },
            next: {
                revalidate: 60, // Revalidate every 60 seconds
            },
        }
    );

    const data = await res.json();
    console.log(data);
    

    return (
        <div>
            <Catalog catalogData={data.results} />
        </div>
    );
};
export default RecipesPage;
