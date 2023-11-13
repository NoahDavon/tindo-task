import Image from 'next/image'
import Dropdown from './uiElements/Dropdown'

export default function Home() {
  return (
    <main className='p-10'>
      <Dropdown title='Dropdown' onHover>
        <div>Hello</div>
        <div>Hey</div>
      </Dropdown>
      <div>Try spacing</div>
    </main>
  )
}
