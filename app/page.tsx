import * as Components from './components';
import * as HeroIcons from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Components.Navigation.Header />
      <header className="bg-green-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold items-center">SmartCycle </h1>
          <p className="mt-4 text-xl">Revolutionizing Waste Management with AI.</p>
          <Components.Buttons.buttonCard name='Learn more'/>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <Components.Headers.Header name='Why Choose SmartCycle?' />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Components.Cards.aboutCard heading='AI-Powered Sorting' text='Automatically identifies and sorts recyclables, compostables, and waste.' />
            <Components.Cards.aboutCard heading='Eco-friendly Analytics' text='Track your waste habits and reduce your carbon footprint.' /> 
            <Components.Cards.aboutCard heading='Real-time Feedback' text='Receive immediate guidance on waste sorting.' />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 flex flex-col items-center">
              <HeroIcons.TrashIcon className='size-5'/>
              <h3 className="text-lg font-semibold mt-4">Step 1: Add Waste</h3>
              <p className="mt-2 text-gray-600">Place your waste into the SmartCycle bin.</p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <HeroIcons.CursorArrowRaysIcon className='size-5'/>
              <h3 className="text-lg font-semibold mt-4">Step 2: AI Analysis</h3>
              <p className="mt-2 text-gray-600">SmartCycle identifies the type of waste.</p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <HeroIcons.ArchiveBoxIcon className='size-5'/>
              <h3 className="text-lg font-semibold mt-4">Step 3: Sorted for You</h3>
              <p className="mt-2 text-gray-600">Waste is automatically sorted into the correct bin.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What People Are Saying</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="italic">"SmartCycle transformed how my family recycles. We’re so much more eco-friendly now!"</p>
              <h4 className="mt-4 font-semibold">- Sarah L.</h4>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="italic">"The AI feedback is amazing. It even tells me when I’m recycling incorrectly!"</p>
              <h4 className="mt-4 font-semibold">- John D.</h4>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="italic">"I love how SmartCycle combines technology and sustainability. It feels like a step towards a cleaner future!"</p>
              <h4 className="mt-4 font-semibold">- Nicola H.</h4>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-green-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Join the Waste Revolution</h2>
          <p className="mt-4">Pre-order SmartCycle today and make a difference!</p>
          <Components.Buttons.buttonCard name='Pre-order Now' />
        </div>
      </footer>
    </div>
  );
}
