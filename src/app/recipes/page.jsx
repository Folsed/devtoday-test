import Catalog from './components/Catalog';

const RecipesPage = async ({ params, searchParams }) => {
    const { query, cuisine, maxReadyTime } = await searchParams;

    const res = await fetch(
        `${process.env.API_ENDPOINT}?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}`,
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

    return (
        <div>
            <Catalog catalogData={data.results} />
        </div>
    );
};
export default RecipesPage;
