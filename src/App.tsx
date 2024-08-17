import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import GoalTypeScript from "./components/Projects/Goal-typescript/GoalTypeScript";
import TimerTypeScript from "./components/Projects/Timer-typescript/TimerTypeScript";
import ChartbarExpenseTypescript from "./components/Projects/Chartbar-expense-typescript/ChartbarExpenseTypescript";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Homepage />} />
      <Route path="*" element={<Homepage />} />
      <Route path="/goal-typescript" element={<GoalTypeScript />} />
      <Route path="/timer-typescript" element={<TimerTypeScript />} />
      <Route path="/chartbar-expense-typescript" element={<ChartbarExpenseTypescript />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={route}/>;
}

export default App;
