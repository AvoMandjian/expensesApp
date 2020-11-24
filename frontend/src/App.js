import './App.css';
import SignIn from './components/Pages/SignIn';
import ExpenseTable from './components/ExpenseTable';

export default function App() {
  return (
    <div>
      {/* <SignIn /> */}
      <ExpenseTable userEmail='avo2@gmail.com' />
    </div>
  )
}

// userEmail = 'avo@gmail.com'
// userEmail = 'avo2@gmail.com'
// userEmail='avo3@gmail.com'
