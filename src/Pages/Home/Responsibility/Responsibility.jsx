import scholarship from "../../../assets/scholarship.png";
import university from "../../../assets/university.png";
import partners from "../../../assets/partners.png";
import homework from "../../../assets/homework.png";

const Responsibility = () => {
    return (
        <section className="my-28 px-5 lg:px-10">
            <div className="text-center">
                <h1 className="text-5xl font-bold brandFont text-primary">Our Responsibility</h1>
            </div>
            <div className="my-20 flex flex-col lg:flex-row items-start justify-center gap-16">

                <div className="flex flex-col gap-2">
                    <img src={scholarship} alt="scholarship" className="w-20" />
                    <h1 className="text-base font-bold brandFont text-primary">Supporting Scholarships</h1>
                    <p className="max-w-xl">We are committed to fostering academic excellence by providing scholarships and financial aid opportunities to deserving students. By investing in their education, we empower future leaders to reach their full potential and make a positive impact on society.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <img src={homework} alt="scholarship" className="w-20" />
                    <h1 className="text-base font-bold brandFont text-primary">Assisting Current Students</h1>
                    <p className="max-w-xl">We extend a helping hand to current students by offering mentorship programs, career guidance, and networking opportunities. Through our support, we aim to equip them with the skills, resources, and connections they need to succeed both academically and professionally.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <img src={university} alt="scholarship" className="w-20" />
                    <h1 className="text-base font-bold brandFont text-primary">Help Our University</h1>
                    <p className="max-w-xl">We actively participate in initiatives that contribute to the growth and development of our alma mater. Whether through volunteering, fundraising, or advocacy efforts, we strive to enhance the quality of education and enrich the university experience for students, faculty, and staff.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <img src={partners} alt="scholarship" className="w-20" />
                    <h1 className="text-base font-bold brandFont text-primary">Building Our Community</h1>
                    <p className="max-w-xl">We believe in the strength of community and the power of connections. Through social events, alumni reunions, and online platforms, we foster a sense of belonging and camaraderie among our members. Together, we celebrate achievements, support each other through challenges, and create lasting bonds that transcend graduation.</p>
                </div>

            </div>
        </section>
    );
};

export default Responsibility;