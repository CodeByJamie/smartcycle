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
          <Components.Headers.Header name='How it works' />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Components.Cards.funcCard icon='TrashIcon' stepNum={1} stepDesc='Add Waste' desc='Place your waste into the SmartCycle bin.' />
            <Components.Cards.funcCard icon='CursorArrowRaysIcon' stepNum={2} stepDesc='AI Analysis' desc='SmartCycle identifies the type of waste.' />
            <Components.Cards.funcCard icon='ArchiveBoxIcon' stepNum={3} stepDesc='Sorted for You' desc='Waste is automatically sorted into the correct bin.' />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <Components.Headers.Header name='What People Are Saying'/>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Components.Cards.quoteCard quote='SmartCycle transformed how my family recycles. We’re so much more eco-friendly now!' person='Sarah L.'/>
            <Components.Cards.quoteCard quote='The AI feedback is amazing. It even tells me when I’m recycling incorrectly!' person='John D.' />
            <Components.Cards.quoteCard quote='I love how SmartCycle combines technology and sustainability. It feels like a step towards a cleaner future!' person='Nicola H.' />
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
