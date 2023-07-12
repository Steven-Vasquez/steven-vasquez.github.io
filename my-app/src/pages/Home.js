import '../components/Opening';
import Opening from '../components/Opening';
import BioSection from '../components/BioSection';
import ProjectSection from '../components/ProjectSection';
import ContactForm from '../components/ContactForm';

export function Home() {
    
    return (
        <>
            <Opening />
            <BioSection />
            <ProjectSection />
            <ContactForm />
        </>
    );
}

export default Home;