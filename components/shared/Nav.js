import Link from 'next/link'
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
const Navbar = () => {
  return(
    <ul>
      <AppLink href="/" className="navbar-brand">
        Ansar
      </AppLink>
      <AppLink href="/checkpage" className="navbar-brand">
        Checkpage
      </AppLink>
    </ul>
  )
}
export default Navbar;
