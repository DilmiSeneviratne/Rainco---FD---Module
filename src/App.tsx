import { useEffect, useState } from 'react';
import { SapRoute } from './components/sap/SapChrome';
import { FixedDepositsPage } from './pages/FixedDepositsPage';
import { FixedDepositsInstallmentPage } from './pages/FixedDepositsInstallmentPage';

function getInitialRoute(): SapRoute {
  if (typeof window !== 'undefined' && window.location.pathname === '/installment') {
    return '/installment';
  }
  return '/';
}

export default function App() {
  const [route, setRoute] = useState<SapRoute>(getInitialRoute);

  useEffect(() => {
    const onPopState = () => {
      setRoute(getInitialRoute());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to: SapRoute) => {
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
    }
    setRoute(to);
  };

  if (route === '/installment') {
    return <FixedDepositsInstallmentPage onNavigate={navigate} />;
  }

  return <FixedDepositsPage onNavigate={navigate} />;
}
