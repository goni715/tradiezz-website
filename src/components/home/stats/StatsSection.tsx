import { FaBriefcase, FaBuilding, FaUserFriends } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const stats = [
  {
    icon: FaBriefcase,
    label: 'Live Job',
    value: '1,75,324',
  },
  {
    icon: FaBuilding,
    label: 'Companies',
    value: '97,354',
    highlight: true,
  },
  {
    icon: FaUserFriends,
    label: 'Candidates',
    value: '38,47,154',
  },
  {
    icon: MdWork, 
    label: 'New Jobs',
    value: '7,532',
  },
];

const StatsSection = () =>{
  return (
    <div className="w-full py-10 bg-white my-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex items-center space-x-4 p-4 rounded-xl shadow-sm transition duration-300 ${
              stat.highlight
                ? 'bg-primary text-white shadow-lg'
                : 'bg-blue-50 text-black'
            }`}
          >
            <div className="bg-white/10 p-3 rounded-full">
              <stat.icon className={`text-2xl ${stat.highlight ? 'text-white' : "text-primary"}`} />
            </div>
            <div>
              <div className="text-lg font-semibold">{stat.value}</div>
              <div className={`text-sm text-gray-400 ${stat.highlight ? 'text-gray-400' : "text-gray-600"}`}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
