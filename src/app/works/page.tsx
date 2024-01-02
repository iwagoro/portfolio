export default function Page() {
    return (
        <div className="w-screen  min-h-screen flex flex-col items-center my-[120px]">
            <div className="w-full px-10 box-border  max-w-7xl h-full flex flex-col items-center">
                <h2>Works</h2>
                <div className="w-full px-10 mt-10 grid grid-cols-1  md:grid-cols-2  gap-x-5 gap-y-10">
                    <div className="flex flex-col items-center">
                        <img className="w-[90%]  h-auto aspect-[4/3] object-cover " src="https://images.unsplash.com/photo-1649290098499-f4148542f2e0?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        <h4 className="mt-5 text-white w-[90%] text-start">Title</h4>
                        <p className="text-[gray] w-[90%] text-start">Describe</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-[90%]  h-auto aspect-[4/3] object-cover " src="https://images.unsplash.com/photo-1658963654546-593c6ea57ce4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        <h4 className="mt-5 text-white w-[90%] text-start">Title</h4>
                        <p className="text-[gray] w-[90%] text-start">Describe</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-[90%]  h-auto aspect-[4/3] object-cover " src="https://images.unsplash.com/photo-1658963654546-593c6ea57ce4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        <h4 className="mt-5 text-white w-[90%] text-start">Title</h4>
                        <p className="text-[gray] w-[90%] text-start">Describe</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
