import React, { useEffect } from 'react';
import '../components/Opening';
import Opening from '../components/Opening';
import BioSection from '../components/BioSection';
import ProjectSection from '../components/ProjectSection';
import ContactForm from '../components/ContactForm';
import { useLocation } from 'react-router-dom';

export function Home() {
    const location = useLocation();

    useEffect(() => {
        const section = location.hash;
        if (section) {
            const element = document.querySelector(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
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