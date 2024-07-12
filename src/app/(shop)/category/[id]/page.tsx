import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string;
    };
}

export default function CategoryPage({ params }: Props) {
    const { id } = params;

    if (!["men","women","kids"].includes(id)) return notFound()
        
    return (
        <div>
            <h1>Category Page {id}</h1>
        </div>
    );
}
