
import chefImg from '../../assets/images/chef-service.jpg';

const ChefService = () => {
    return (
            <div className='relative my-12'>
                <img src={chefImg} alt="" />
                <div className='mx-32 px-10 py-12 absolute top-20 bg-white'>
                    <div className='text-center text-[#151515]'>
                        <h1 className='text-5xl font-medium uppercase mb-3'>Bistro Boss</h1>
                        <p className='text-xl]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
    );
};

export default ChefService;