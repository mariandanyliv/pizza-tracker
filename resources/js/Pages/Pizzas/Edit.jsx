import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import UpdatePizzaOrderForm from "@/Pages/Pizzas/Partials/UpdatePizzaOrderForm.jsx";

export default function Edit({ auth, pizza }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold test-xl text-gray-800 learning-tight">Order #{pizza.id}</h2>}
        >

        <Head title={'Order #' + pizza.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePizzaOrderForm pizza={pizza} className="max-w-xl"></UpdatePizzaOrderForm>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
