import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
export default function Thanks() {
  return (
    <div className="container text-center pb-5 otherPages thanks">
      <h2 className=''>Ваша заявка принята</h2>
      <p className="mb-5">Ваша заявка принята в обработку.<br></br> Наш менеджер свяжется с вами в ближайшее время<br></br></p>

  <AppLink className="tohome"  href="/">Вернуться на главную сайта</AppLink>
    </div>
  )
}
