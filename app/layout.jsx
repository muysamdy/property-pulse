import '@/assets/styles/globals.css'
// import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'PropertyPluse | Find the perfect Rental',
    description: 'Find your dream rental property',
    keyword: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default MainLayout


