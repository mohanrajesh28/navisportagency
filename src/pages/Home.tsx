import Hero from '../components/Hero';
import About from '../components/About';
import Mission from '../components/Mission';
import ServicesList from '../components/ServicesList';
import Hubs from '../components/Hubs';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Mission />
            <ServicesList />
            <Hubs />
        </>
    );
}
