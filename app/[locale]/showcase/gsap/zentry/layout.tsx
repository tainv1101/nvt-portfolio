function ZentryLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-dvw h-dvh overflow-x-hidden font-general bg-[#dfdff0]">
      {children}
    </main>
  );
}

export default ZentryLayout;