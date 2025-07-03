const BulletItem = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <div className="flex items-start gap-2 ml-2">
      <span>-</span>
      {children}
    </div>
  )
}

export default BulletItem