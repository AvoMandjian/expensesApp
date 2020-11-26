import './App.css';
import SignIn from './Pages/SignIn';
import ExpenseTable from './components/ExpenseTable'
import getCookie from './API/getCookiesFunction';


export default function App() {
  if (!getCookie('token').token) {
    return (
      <div>
        <SignIn />
      </div>
    )
  } else {
    return (
      <div>
        <ExpenseTable userId={getCookie('userId').userId} />
      </div>
    )
  }
}