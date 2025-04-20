import Image from 'next/image';
import Link from 'next/link';

const Card = ({ cardData }) => {
    return (
        <Link
            href={`recipes/${cardData.id}`}
            className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]"
        >
            <Image
                src={cardData.image}
                alt={cardData.title}
                width={1920}
                height={1080}
                className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5">
                {cardData.title}
            </div>
        </Link>
    );
};
export default Card;
