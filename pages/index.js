import Layuot from "../public/componets/layout";

export default function Home() {
  return (
      <div>
        <Layuot/>
      </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

