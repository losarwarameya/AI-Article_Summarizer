import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='flex flex-col justify-center items-center w-full'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='logo' className='w-28 object-contain' />
            <button type='button' onClick={() => {
                window.open('https://github.com/losarwarameya')
            }} className='black_btn'>
                GitHub
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>OPENAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui eos eveniet omnis magni in quisquam suscipit nostrum blanditiis, dolore consequuntur beatae.
        </h2>
    </header>
  )
}

export default Hero