import Link from "next/link"
export const metadata = {
    title: 'Homes',
    description: 'Listed Homes for Sale'
}

const Homes = () => {
    return (
        <div>
            <h1>Homes</h1>
            <ul>
                <li>
                    <Link href={'homes/1'} replace>Home 1</Link>
                </li>
                <li>
                    <Link href={'homes/2'} replace>Home 2</Link>
                </li>
                <li>
                    <Link href={'homes/3'} replace>Home 3</Link>
                </li>
            </ul>
        </div>
    )
}

export default Homes