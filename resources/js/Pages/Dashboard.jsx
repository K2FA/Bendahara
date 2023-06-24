import ListData from "@/Components/Tables/ListData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    // console.log(props);
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pemasukkan
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-4">
                        <Link
                            href={route("pemasukkan.create")}
                            as="button"
                            method="get"
                            className="btn btn-sm  rounded-full text-white"
                        >
                            Masukkan pemasukkan
                        </Link>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-black font-bold text-lg">
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Jumlah Uang</th>
                                        <th>Tanggal</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="text-black">
                                    <ListData
                                        pemasukkans={props.pemasukkan}
                                    ></ListData>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
