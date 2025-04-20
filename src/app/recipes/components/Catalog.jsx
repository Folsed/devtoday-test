import Card from './Card';

const Catalog = ({ catalogData }) => {
    return (
        <div>
            {catalogData.map(item => (
                <div key={item.id} className="">
                    <Card cardData={item} />
                </div>
            ))}
        </div>
    );
};
export default Catalog;
