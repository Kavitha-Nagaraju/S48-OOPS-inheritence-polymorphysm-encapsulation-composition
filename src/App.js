import logo from './logo.svg';
import './App.css';
import Dog from './classes/Dog';
import Tiger from './classes/Tiger';
import ResultTable from './components/ResultTable';

function App() {
  let bow = new Dog();
  bow.colorOfAnimal();
  bow.foodHabits();
  bow.facingHumans();

  console.log("***********************")

  let tiger = new Tiger();
  tiger.colorOfAnimal();
  tiger.foodHabits();
  tiger.facingHumans();
  tiger.functionOverloading();

  return (
    <div className="App">
     <ResultTable name="Kavitha" telMarks="89" engMarks="67" hinMarks="90" mathMarks="89" sciMarks="34" socMarks="90"></ResultTable>
     <ResultTable name="Kumari" telMarks="89" engMarks="67" hinMarks="90" mathMarks="89" sciMarks="34" socMarks="90"></ResultTable>
     <ResultTable name="Akanksha" telMarks="89" engMarks="67" hinMarks="90" mathMarks="89" sciMarks="34" socMarks="90"></ResultTable>
    </div>
  );
}

export default App;
