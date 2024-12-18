import { Outlet } from "react-router-dom";
import Card from "../../../components/Card";

export default function ProductsPage() {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="mt30">
                        <Card />
                    </div>
                    <Outlet />
                </div>
            </section>
        </main>
    );
}
