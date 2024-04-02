const SectionHeader = ({ title, description }) => {

    // https://i.ibb.co/Fnt4Qhc/signIn.png
    // https://i.ibb.co/1Q9vhSv/signUp.png
    return (
        <div className="hero h-[500px] mb-20" style={{ backgroundImage: 'url( https://i.ibb.co/zRggdKK/banner1.png)', backgroundSize: "cover" }}>
            <div className="hero-overlay bg-primary  bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-4xl font-bold">{title}</h1>
                    <p className="mb-5">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;