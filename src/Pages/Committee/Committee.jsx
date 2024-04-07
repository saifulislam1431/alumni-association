import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import useCommittee from "../../Hooks/useCommittee";

const Committee = () => {
    const { allCommittee } = useCommittee();
    return (
        <section>
            <SectionHeader title="Alumni Committee: Leading the Way" description="Get acquainted with the driving force behind our alumni network. Meet the dedicated members of our committee who work tirelessly to connect, engage, and empower our alumni community. " />
            <div className="my-28 px-5 lg:px-12 max-w-2xl mx-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Rule</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCommittee?.map(member => <tr key={member?._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={member?.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{member?.name}</div>
                                                <div className="text-sm opacity-50">{member?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-primary badge-md text-white font-semibold">{member?.committeeRule}</span>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
};

export default Committee;