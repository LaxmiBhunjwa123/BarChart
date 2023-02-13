import './App.css';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

const Array = [
  {
    name:"Python",
    student:15,
    fees:"30$"
  },
  {
    name:"JavaScript",
    student:15,
    fees:"12$"
  },
  {
    name:"PHP",
    student:5,
    fees:"10$"
  },
  {
    name:"React",
    student:30,
    fees:"20$"
  },
  {
    name:"Node",
    student:20,
    fees:"10$"
  },
  {
    name:"SQL",
    student:25,
    fees:"15$"
  },
  {
    name:"java",
    student:10,
    fees:"50$"
  }
]

function App() {
  return (
    <div className="App">
      <h1 style={{color:"gray"}} >Create Bar Chart{" "}
      <strong style={{color:"black"}}>Coding Drafts</strong>
      </h1>
    
    <ResponsiveContainer width="50%" aspect={3} className="Bar">
      <BarChart data={Array} width={300} height={600} >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="student" fill='#8883d8' />
      </BarChart>
    </ResponsiveContainer>

    </div>
  );
}

export default App;
