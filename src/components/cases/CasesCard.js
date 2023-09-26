function CaseCard ({data, index}){

    return (

        <div onMouseEnter={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.add('text-orange-500')
        }} 
        onMouseLeave={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.remove('text-orange-500')
        }}
        className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={data.imageUrl} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-xl font-medium text-gray-800">
                        <a href={data.category.href} className="hover:underline">
                            {data.category.name}
                        </a>
                    </p>
                    <a href={data.href} className="mt-2 block">
                        <p id={index} className="lg:text-4xl pt-4 pb-6 text-2xl font-semibold text-gray-900">{data.title}</p>
                        <p className="mt-3 text-xl leading-9 text-gray-500">{data.description}</p>
                    </a>
                </div>
            </div>
        </div>

    )

}

export default CaseCard;