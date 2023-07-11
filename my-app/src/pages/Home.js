import '../components/Opening';
import Opening from '../components/Opening';
import BioSection from '../components/BioSection';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';

export function Home() {
    
    return (
        <>
            <Opening />
            <BioSection />
            <Projects />
            <ContactForm />
        </>
    );
}

export default Home;