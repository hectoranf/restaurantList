import { getAllRestaurantsIds, getOneRestaurant } from "../../lib/restaurants"
import Head from "next/head"
import Link from "next/link"

export default function RestaurantDetails({ details }) {
  return (
    <>
      <Head>
        <title>{details.name}</title>
      </Head>
      <article>
        <h1>{details.name}</h1>
        <p>{details.neighborhood}</p>
      </article>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getAllRestaurantsIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return await getOneRestaurant(params.id).then((res) => {
    return {
      props: {
        details: res.data,
      },
    }
  })
}
