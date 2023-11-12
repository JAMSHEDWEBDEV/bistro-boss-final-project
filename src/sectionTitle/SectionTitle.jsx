
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-12 w-96 mx-auto">
            <p className="text-yellow-500 mb-3">---{subHeading}---</p>
            <h3 className="uppercase border-y-4 py-4 font-bold text-4xl">{heading}</h3>
        </div>
    );
};

export default SectionTitle;