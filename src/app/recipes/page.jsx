import Catalog from './components/Catalog';

const RecipesPage = async ({ searchParams }) => {
    const { query = '', cuisine = '', maxReadyTime = 0 } = await searchParams;

    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);
    console.log(params.toString())

    const res = await fetch(`${process.env.API_ENDPOINT}/complexSearch?${params.toString()}`, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.SPOONACULAR_API_KEY || '',
        },
        next: {
            revalidate: 60,
        },
    });

    const data = await res.json();

    console.log(data);

    return (
        <div>
            <Catalog catalogData={data} />
        </div>
    );
};
export default RecipesPage;
