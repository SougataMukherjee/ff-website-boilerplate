export interface GlobalContextProps {
  user: string | null;
  setUser: (user: string | null) => void;
}
