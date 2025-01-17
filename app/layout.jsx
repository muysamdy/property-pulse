import '@/assets/styles/globals.css'

export const metadata = {
    title: 'PropertyPluse | Find the perfect Rental',
    description: 'Find your dream rental property',
    keyword: 'rental, find rentals, find properties'
}
const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default MainLayout


