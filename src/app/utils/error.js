export default function Error(props){
    return <header className="bg-neutral-50 px-6 py-20 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
    <h1 className="mb-6 text-5xl font-bold">{props.h1}</h1>
        <h3 className="mb-8 text-3xl font-bold">{props.hints}</h3>
        {props.children || ""}
    </header>
}