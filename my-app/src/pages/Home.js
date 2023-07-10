import '../components/Opening';
import Opening from '../components/Opening';
import BioSection from '../components/BioSection';
import Projects from '../components/Projects';

export function Home() {
    
    return (
        <>
            <Opening />
            <BioSection />
            <Projects />
        </>
    );
}

export default Home;