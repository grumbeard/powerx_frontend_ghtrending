export const AppShell = ({children}) => {
  return(
    <>
    <main className="min-h-screen bg-gray-900 pb-2 text-white">
      {children}
    </main>
    <footer className="sticky bottom-0 bg-gray-800 text-white">This is a footer</footer>
    </>
  );
}