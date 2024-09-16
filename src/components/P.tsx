
export const P = ({children  , className}:{children:any , className?:string}) => {
  return (
    <p className={`font-bold uppercase ${className}`}>{children}</p>
  )
}
