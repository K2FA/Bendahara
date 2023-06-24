import { Link } from "@inertiajs/react";

const ListData = ({ pemasukkans }) => {
    return Pemasukkan(pemasukkans);
};

const Pemasukkan = (pemasukkan) => {
    return pemasukkan?.map((data, i) => {
        return (
            <tr key={data.id}>
                <th>{i + 1}</th>
                <td>{data.name}</td>
                <td>Rp {data.amount.toLocaleString()}</td>
                <td>{data.date}</td>
                <td>
                    <Link
                        href={route("pemasukkan.edit")}
                        method="get"
                        as="button"
                        data={{ id: data.id }}
                    >
                        Update
                    </Link>
                </td>
                <td>
                    <Link
                        href={route("pemasukkan.delete")}
                        method="post"
                        data={{ id: data.id }}
                        as="button"
                    >
                        Delete
                    </Link>
                </td>
            </tr>
        );
    });
};

export default ListData;
