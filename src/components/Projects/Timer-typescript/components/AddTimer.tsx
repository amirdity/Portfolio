import { useRef } from "react";
import Button from "./UI/Button.tsx";
import Form, { FormHandle } from "./UI/Form.tsx";
import Input from "./UI/Input.tsx";
import  useTimersContext  from "../hook/useTimersContext.tsx";
export default function AddTimer() {
  const timersCtx = useTimersContext();
  const form = useRef<FormHandle>(null);
  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    timersCtx.addTimer({
      name: extractedData.name,
      duration: Number(extractedData.duration),
    });
    form.current?.clear();
  }
  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
