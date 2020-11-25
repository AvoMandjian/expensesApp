import './App.css';
import SignIn from './Pages/SignIn';
import ExpenseTable from './components/ExpenseTable'
import getCookie from './API/getCookiesFunction';


export default function App() {
  const token = getCookie('token');
  if (token === null) {
    return (
      <div>
        <SignIn />
      </div>
    )
  } else {
    return (
      <div>
        <ExpenseTable />
      </div>
    )
  }
}