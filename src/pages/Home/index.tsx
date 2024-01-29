import { Play } from "phosphor-react";
import { CountdownConteiner, FormConteiner, HomeConteiner, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeConteiner>
      <form action="">
        <FormConteiner>
        <label htmlFor="task">Vou trabalhar em:</label>
        <TaskInput id="task" list="task-suggestions" placeholder="Dê um nome para o seu projeto"/>

        <datalist id="task-suggestions">
          <option value="Valor 1"/>
          <option value="Valor 2"/>
        </datalist>

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60}/>

        <span>minutes</span>

        </FormConteiner>

        <CountdownConteiner>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownConteiner>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeConteiner>
  );
}
