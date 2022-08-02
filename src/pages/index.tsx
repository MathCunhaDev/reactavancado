type HomeProps = {
  title: string
}

export default function Home({ title = 'React Avançado' }: HomeProps) {
  return <div>{title}</div>
}
