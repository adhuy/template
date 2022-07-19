import Layout from "../../components/Layout";
import Cards from "../../components/elements/Cards";

export default function Dashboard() {
    return (
        <Layout>
            <section>
                <div className="flex flex-col gap-4 lg:flex-row">
                    <Cards color={'bg-green-100'} value={'100'} />
                    <Cards color={'bg-yellow-100'} value={'90'} />
                    <Cards color={'bg-red-100'} value={'80'} />
                </div>
            </section>
        </Layout>
    )
}