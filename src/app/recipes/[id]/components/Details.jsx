import Image from 'next/image';

const Details = ({ detailsData }) => {
    return (
        <div className="p-4 max-w-3xl mx-auto my-24 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">{detailsData.title}</h1>
            <Image
                src={detailsData.image}
                alt={detailsData.title}
                className="mb-4 rounded"
                width={700}
                height={500}
            />
            <div
                className="mb-4 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: detailsData.summary }}
            />
            <h2 className="text-xl font-bold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
                {detailsData.extendedIngredients.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            <h2 className="text-xl font-bold mb-2">Ready in</h2>
            <p>{detailsData.readyInMinutes} minutes</p>
        </div>
    );
};

export default Details;
