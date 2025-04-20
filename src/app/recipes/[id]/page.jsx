import Details from './components/Details';

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`${process.env.API_ENDPOINT}/${id}/information`, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.SPOONACULAR_API_KEY,
        },
        next: {
            revalidate: 60, // Revalidate every 60 seconds
        },
    });
    const data = await res.json();

    console.log(data);

    return (
        <div>
            <Details detailsData={data} />
        </div>
    );
};
export default DetailsPage;
