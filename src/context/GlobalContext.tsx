import { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  turnstileToken: string | null;
  setTurnstileToken: (token: string | null) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  return (
    <GlobalContext.Provider value={{ turnstileToken, setTurnstileToken }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext должен использоваться внутри GlobalProvider');
  }
  return context;
} 