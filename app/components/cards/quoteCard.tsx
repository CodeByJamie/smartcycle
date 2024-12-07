export default function quoteCard({ quote, person }: {quote: string, person: string}) {

    return (
        <>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <span className="italic">"{quote}"</span>
              <span className="mt-4 font-semibold">- {person}</span>
            </div>
        </>
    )

}