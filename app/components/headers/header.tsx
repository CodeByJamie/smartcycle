export default function subHeader({ name }: {name: string}) {
    return (
        <>
            <span className="text-3xl font-bold"> {name} </span>
        </>
    )
}