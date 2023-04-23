import { logo } from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full pt-3 mb-10'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        <button
          type='button'
          onClick={() => window.open('https://github.com/arjunmadavoor')}
          className='black_btn'
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading experience with Summize, an open-source article
        summarizer that can convert complex articles into brief and clear
        summaries.
      </h2>
    </header>
  );
}

export default Hero