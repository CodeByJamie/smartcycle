"use client"
import { useRouter } from "next/navigation";

export default function ButtonTemp({ name }: { name: string }) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/team')
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="mt-6 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
                {name}
            </button>
        </>
    );
}
