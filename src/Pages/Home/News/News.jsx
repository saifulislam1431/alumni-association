
const News = () => {
    return (
        <section className="my-28">
            <div className="text-center mb-14">
                <h1 className="text-5xl font-bold brandFont text-primary">Blog</h1>
            </div>

            <div className="px-5 lg:px-12 flex items-center justify-center gap-10 flex-col lg:flex-row">
                <div className="card w-96 glass">
                    <figure><img src="https://miro.medium.com/v2/resize:fit:372/0*g7rqzQCKsDkU0JnK.png" alt="car!" className="w-full h-60" /></figure>
                    <div className="card-body">
                        <h2 className="card-title brandFont text-primary">Unlocking the Power of Networking</h2>
                        <p className="text-sm font-semibold">Discover the secrets to effective networking and how it can propel your career forward. From leveraging social media platforms to attending industry events, learn valuable tips on how to expand your professional network and cultivate meaningful connections that open doors to new opportunities.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read now!</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 glass">
                    <figure><img src="https://teambuildinghub.com/wp-content/uploads/2022/05/work-life-balance.webp" alt="car!" className="h-60" /></figure>
                    <div className="card-body">
                        <h2 className="card-title brandFont text-primary">Mastering Work-Life Balance</h2>
                        <p className="text-sm font-semibold">Achieving a harmonious balance between work and personal life is essential for overall well-being. In this blog, explore practical strategies and techniques for managing your time effectively, setting boundaries, and prioritizing self-care. Gain insights on how to thrive both professionally and personally while maintaining a healthy equilibrium.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read now!</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 glass">
                    <figure><img src="https://media.licdn.com/dms/image/C4E12AQG3lp5I5Cfn6g/article-cover_image-shrink_600_2000/0/1520087881831?e=2147483647&v=beta&t=OYoLJWvymDdE_hF3CkukiIoOKai1_YkRT67imhGPtxE" alt="car!" className="h-60" /></figure>
                    <div className="card-body">
                        <h2 className="card-title brandFont text-primary">The Art of Effective Communication</h2>
                        <p className="text-sm font-semibold">Effective communication is a cornerstone of success in every aspect of life. This blog delves into the importance of clear, concise communication in the workplace and beyond. Discover techniques for active listening, delivering impactful presentations, and navigating difficult conversations with confidence and tact. </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read now!</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default News;