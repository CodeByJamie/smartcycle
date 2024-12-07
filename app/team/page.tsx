import * as Components from '../components';

export default function MeetTheTeam() {

    const teamMembers = [
      { name: "Neve Morrison", role: "Project Manager & Research Lead" },
      { name: "Noah Ward", role: "Software Lead" },
      { name: "Robert Gold", role: "Design Lead" },
      { name: "Lewis Adaramoyre", role: "Risk Lead" },
      { name: "Jamie MacDonald", role: "Marketing Lead" },
    ];
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <Components.Navigation.Header />
        <header className="bg-green-600 text-white py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Meet the Team</h1>
            <p className="mt-4 text-xl">
              The passionate individuals behind SmartCycle.
            </p>
          </div>
        </header>
  
        <main className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="mt-2 text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
  