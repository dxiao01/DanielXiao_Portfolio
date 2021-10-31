import Topbar from './components/Topbar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div class="">
      <Topbar/>
      <div class="w-full h-section relative top-20 overflow-y-scroll
       snap snap-y snap-mandatory hide-scrollbar-chrome hide-scrollbar-firefox scroll-smooth mt-12">
        <Intro/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
