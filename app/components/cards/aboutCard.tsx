export default function aboutCard({ heading, text }: {heading: string, text: string}) {
    return (
        <>
            <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg">
                <span className="text-xl font-semibold">{heading}</span>
                <span className="mt-2 text-gray-600">{text}</span>
            </div>
        </>
    )
}