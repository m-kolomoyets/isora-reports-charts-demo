import { BrowserRouter } from 'react-router-dom';
import { BASE_PUBLIC_PATH } from '@/constants';
import Router from '@/pages/router';

const App: React.FC = () => {
    return (
        <BrowserRouter basename={BASE_PUBLIC_PATH}>
            <Router />
        </BrowserRouter>
    );
};

export default App;
