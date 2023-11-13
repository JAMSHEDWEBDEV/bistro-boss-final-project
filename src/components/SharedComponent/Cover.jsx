
import { Parallax } from 'react-parallax';
const Cover = ({ coverImg, Title, h1 }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={coverImg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-bold">{Title}</h1>
                        <p className="mb-5">{h1}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;