import { About, Experience, Header, HomePage, Skills, Projects, MoveToUp, Footer } from "../../shared/Components"


export const Home = () => {
    return (<>
        <Header />
        <HomePage />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />

        <MoveToUp />
    </>)
}