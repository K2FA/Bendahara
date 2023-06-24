import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Add(props) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleBtnSubmit = () => {
        const data = {
            name,
            amount,
            date,
        };
        router.post("/pemasukkan", data);
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Input Data
                </h2>
            }
        >
            <Head title="Input-Data" />

            <div className="min-h-screen bg-slate-50">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="form-control max-w-4xl">
                        <label className="label ">
                            <span className="label-text">Nama</span>
                        </label>
                        <label className="input-group ">
                            <span className="w-1/6">Nama</span>
                            <input
                                type="text"
                                placeholder="Masukkan Nama"
                                className="input input-bordered bg-white w-full"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </label>
                        <label className="label">
                            <span className="label-text">Nominal Uang</span>
                        </label>
                        <label className="input-group">
                            <span className="w-1/6">Nominal</span>
                            <input
                                type="number"
                                placeholder="Masukkan Nominal Uang"
                                className="input input-bordered bg-white w-full"
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount}
                            />
                        </label>
                        <label className="label">
                            <span className="label-text">Tanggal</span>
                        </label>
                        <label className="input-group">
                            <span className="w-1/6">Tanggal</span>
                            <input
                                type="date"
                                placeholder="Pilih tanggal"
                                className="input input-bordered bg-white w-full"
                                onChange={(e) => setDate(e.target.value)}
                                value={date}
                            />
                        </label>
                        <div className="flex justify-center">
                            <button
                                onClick={handleBtnSubmit}
                                className=" btn mt-8 w-1/3"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
