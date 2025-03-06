function Contents1(){
    return (
      <>
        <section className="flex flex-col justify-center  max-w-7xl m-auto mt-10 p-10 rounded-xl">
          <div className="text-3xl text-center m-10 text-green-950 font-bold">
            BEST SELLER
          </div>
          <div className="flex flex-wrap justify-center gap-6  ">
            <div className="card flex flex-wrap text-green-950 w-96 shadow-sm ">
              <figure className="h-58 object-fill ">
                <img
                  className="transform  -translate-y-24"
                  src="fikap1.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Mocha Coffee</h2>
                <p>
                  A rich blend of chocolate and coffee. served cold with whipped
                  cream on top.
                </p>
              </div>
            </div>
            <div className="card text-green-950 w-96 shadow-sm">
              <figure className="h-58 object-bottom">
                <img
                  className="transform  translate-y-8"
                  src="fikap2.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Refreshing Iced Tea</h2>
                <p>
                  A perfectly brewed iced tea. served chilled for a refreshing
                  taste
                </p>
              </div>
            </div>
            <div className="card text-green-950 w-96 shadow-sm">
              <figure className="h-58  ">
                <img src="fikap3.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default Contents1