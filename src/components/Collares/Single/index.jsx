const SingleCollar = () => {
    const location = useLocation();
    const { collar } = location.state;

    return (
        <main className="max-w-7xl mx-auto pt-16 pb-24 px-8 lg:grid-cols-2 lg:gap-x-16">
            <section>
                <h1 className="text-4xl font-bold">
                </h1>

                <div className="mt-4">
                    <p className="text-gray-500">
                        {collar.description}
                    </p>

                </div>   

                <div className="mt-4"> 
                    <h1 className="text-3xl">
                        {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(collar.price)}
                    </h1>
                </div>

            </section>

        </main>

    );

        export default SingleCollar;