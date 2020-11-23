import './App.css';
import SignIn from './components/Pages/SignIn';
import ExpenseTable from './components/ExpenseTable';

export default function App() {
  return (
    <div>
      {/* <SignIn /> */}
      <ExpenseTable userEmail='avo@gmail.com' />
    </div>
  )
}
