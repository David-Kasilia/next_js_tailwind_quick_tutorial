import Sidebar from "@components/Sidebar"

const Home = () => {
  return (
    <section className="home-container">
    <div className="left-20 absolute">
        <h1 className="text-center font-bold mt-1">Home</h1>
        <p>This is the home page.</p>
    </div>
        <Sidebar />
    </section>
  )
}

export default Home
