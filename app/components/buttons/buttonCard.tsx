export default function buttonTemp({ name }: {name: string}) {
    return (
        <>
            <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            {name}
          </button>
        </>
    )
}