import Card from './Card';

const Catalog = ({ catalogData }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {catalogData ? (
                catalogData.map(item => (
                    <div key={item.id} className="">
                        <Card cardData={item} />
                    </div>
                ))
            ) : (
                <div className="col-span-4 text-center p-4">
                    <p>No recipes found.</p>
                </div>
            )}
        </div>
    );
};
export default Catalog;
