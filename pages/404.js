import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Error() {
  return (
		<div className="">
      <Head><title>Страница не найдена</title></Head>
			<div id="notfound">
  <div className="notfound">
    <div className="notfound-404">
      <h1>4<span></span>4</h1>
    </div>
    <h2>Oops! Страница не найдена</h2>
    <p>Извините, но страница, которую вы ищете, не существует, была удалена. имя изменено или временно недоступно</p>
    <a href="/">Вернуться на главную страницу</a>
  </div>
</div>
	</div>
  )
}
